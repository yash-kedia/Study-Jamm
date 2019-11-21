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
            console.log(req.body);
            let user = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                description: req.body.description,
                linkedInLink: req.body.linkedInUrl,
                role: req.body.role,
                location: {
                    type: "Point",
                    coordinates: req.body.pos
                },
                skills: req.body.skill
            });
            
            User.addUser(user, (err, user) => {
                if(err){
                    console.log(err);
                }
                else{
                    console.log(user);
                    return res.json({success: true, msg: 'Account creation successfull.', data: user});
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

router.get('/profile/:id', (req, res) => {
    console.log("Entered");
    //res.send(req.params.id);
    var ty = req.params.id;
    console.log(ty);
    /*var id = req.params.id;*/
    //console.log(id);
    User.findById(ty).then((re) => {
        res.send({data: re});
    });
    //res.json({user: req.user});
});

router.post('/maps', (req, res) => {
    //console.log(req.body)
    var skills = req.body.skills;
    const userLocation = req.body.coordinates;
    const dist = req.body.radius || 20000;
    const role = req.body.role || 'Student';

    console.log(userLocation);
    //console.log(skills.split(','))
    User.find({
        location: {
            $near: {
                $geometry: {
                    type: "Point",
                    coordinates: userLocation
                },
                $maxDistance: dist
            }
        },
        skills: {
            $all: skills
        },
        role: role
       }).find((error, results) => {
            if(results){
                console.log(results);    
                return res.json({success: true, msg: '', result: results});
            }
            else{
                return res.json({success: true, msg: 'No users found'});
            }
            
    });
    
});


module.exports = router;