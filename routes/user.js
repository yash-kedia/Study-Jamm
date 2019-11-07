const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

router.post('/register', (req, res, next) => {

    let emailId = req.body.email;

    User.getUserByEmail(emailId, (err, su) => {
        if(err) throw err;
        if(!su){
            let user = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });
            
            User.addUser(user, (err, user) => {
                if(err){
                    console.log(err);
                }
                else{
                    return res.json({success: true, msg: 'Account creation successfull.'});
                    console.log("Added");
                }
            });

        }
        else{
            console.log("User already exsists.");
            return res.json({success: false, msg: 'User already exsists.'});
        }
        
    });    
});

router.post('/authenticate', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.getUserByEmail(email, (err, user) => {
        if(err) throw err;
        if(!user){
            return res.json({success: false, msg: 'User Not Found'});
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if(err) throw err;
            if(isMatch){

                res.json({
                    success: true,
                    user: {
                        id: user._id,
                        name: user.name,
                        email: user.email
                    }
                });
            }else{
                return res.json({success: false, msg: 'Wrong Password'});
            }
        });
    });
});

router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    res.json({user: req.user});
});

router.post('/maps', (req, res) => {
    //console.log(req.body)
    var skills = req.body.skills;
    const userLocation = req.body.coordinates;
    //console.log(skills.split(','))
    User.find({
        location: {
            $near: {
                $geometry: {
                    type: "Point",
                    coordinates: userLocation
                },
                $maxDistance: 100000
            }
        },
        skills: {
            $all: skills.split(',')
        }
       }).find((error, results) => {
        console.log(results);    
        return res.json({success: true, msg: '', result: results});
            
    });
    
});


module.exports = router;