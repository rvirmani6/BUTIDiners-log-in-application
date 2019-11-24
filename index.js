// // Dependencies
// const express = require('express');

// // Set the port of our application
// // process.env.PORT lets the port be set by Heroku
//const PORT = process.env.PORT || 8080;

const firebaseConfig = {
    authDomain: "butidiners-coding-challenge.firebaseapp.com",
    databaseURL: "https://butidiners-coding-challenge.firebaseio.com",
    projectId: "butidiners-coding-challenge",
    storageBucket: "butidiners-coding-challenge.appspot.com",
    messagingSenderId: "691167628423",
    appId: "1:691167628423:web:2d941f3e89175f0c73bc22",
    measurementId: "G-RKPHQ70J2M"
  };

const firebase = require("firebase").initializeApp(firebaseConfig);
// var message = {text: 'hey guys', timestamp: new Date().toString()};
var database = firebase.database();
// var CreateNewAccessCode = function(req, res) {
//     console.log(req);

//     res = Math.floor(100000 + Math.random() * 900000);
//     console.log(res);

// }

module.exports = function(app) {
app.get('/gettestname/:name', function(req, res) {
    // the user was found and is available in req.user
    res.send('What is up ' + req.params.name + '!'); //sends to client
    console.log ("what is up " + req.params.name); //posts to server/terminal
});


app.post('/CreateAccessCode', async function(req, res) {
    try {
    var phoneNumber = req.query.phone;
    var accessCode = Math.floor(100000 + Math.random() * 900000);
    console.log(req.query);
    console.log(phoneNumber + ' ' + accessCode);
    res.send(phoneNumber + ' ' + Math.floor(100000 + Math.random() * 900000));

    var postData = {
        phoneNumeber: accessCode
    };

    var newPostKey = database.ref().child('accessCodes').push().key;

    var updates = {};
    updates['/accessCodes/' + newPostKey] = postData;

    return database.ref().update(updates);
    } catch (err) {
        console.log(err);
    }
});

app.post('/twilioAccessCode', async function(req, res) {
    try {
    const { accessCode, phoneNumber } = req.query;
    const accountSid = '';
    const authToken = '';
    // require the Twilio module and create a REST client
    const client = require('twilio')(accountSid, authToken);
    const message = await client.messages
        .create({
            to: phoneNumber,
            from: '+12056288824',
            body: "Your access code is " + accessCode
        });
        res.json(message);
    } catch (err) {
        res.json(err);
    }
});

app.post('/ValidateAccessCode', function(req, res) {
    var accessCode = req.query.code;
    var phoneNumber = req.query.phone;

    console.log(phoneNumber);
    console.log(accessCode);

    res.send('succesful');

    //search through firebase table for passed in phone number
    //and its access code

    //compare user's access code to code stored in firebase

    //if they're the same, return success message!! :D
    //else, "sorry, incorrect code :("
})

// app.listen(PORT, function() {
//     console.log("Server running on port" + PORT);
//    });
}