const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const app = express();

const user = require('./routes/user');

app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

const db = require('./config/keys').mongoURI;

mongoose.connect("mongodb://localhost:27017/StudyJamm");

mongoose.connection.on('connected', () => {
    console.log("Connected to mongodb");
});
const port = process.env.PORT || 5000;

app.use('/user', user);

app.listen(port, () => {
    console.log("Server is up");
});

/*  ===============================================
    ===============================================
    ===============================================    */ 
/*const readXlsxFile = require('read-excel-file/node');
    
const User = require('./models/User');

readXlsxFile('./databse.xlsx').then((rows) => {
  rows.forEach(row => {
    let user = new User({
        name: row[2],
        email: row[1],
        password: row[3],
        skills: row[4].split(', '),
        location: {
            lat: row[5],
            long: row[6]
        }
    });
    User.addUser(user, (err, user) => {
        if(err){
            console.log(err);
        }
        else{
            console.log("Added");
        }
    });
  });
})
*/


