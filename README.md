# BUTIDiners-log-in-application
Coding Challenge

The index.js file contains the firebase configuration, the Twilio API calls, and my three express back-end functions, the last of which, ValidateAccessCode, I'm still working on. The path to this file is my-app>routes>api-routes.

I set up my PORT and app listener in index.js.

In my front-end, I call my formComponents in the body of App.js

In formComponents.js, I set up all the form fields- in this case, a phone number field, an access code field, and a submit button after each field. I've also included a submit handler under which I use axios to call my CreateAccessCode function and my twilioAccessCode function.

I call my Text.js file in formComponents. In this file, I define a text field.
I also call validation.js in formComponents. This file outlines the rules that should be checked for in each form field before a user can click submit.


