// // Dependencies
// const express = require('express');

// // Set the port of our application
// // process.env.PORT lets the port be set by Heroku
// const PORT = process.env.PORT || 8080;

// // Create express app instance.
// const app = express();
var express = require("express");
var app = express();
app.listen(3000, () => {
 console.log("Server running on port 3000");
});

var CreateNewAccessCode = function(req, res) {
    console.log(req);

    res = Math.floor(100000 + Math.random() * 900000);
    console.log(res);

}

app.post('/CreateAccessCode', (req, res) => {
    res = Math.floor(100000 + Math.random() * 900000);
    console.log(res);
    var accessCode = res;

    //store number and access code in database in firebase

    //call twilio to send an SMS with access code to the user
})

var ValidateAccessCode = function(req, res) {
    console.log(res);

}

app.post('/ValidateAccessCode', (req, res) => {
    req = this.state.formControls.code.value;
    res = this.state.formControls.phone.value;

    //search through firebase table for passed in phone number
    //and its access code

    //compare user's access code to code stored in firebase

    //if they're the same, return success message!! :D
    //else, "sorry, incorrect code :("
})

