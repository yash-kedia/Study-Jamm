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
