/**
 * Created by kikovinh on 10/27/2016.
 */
var firebase = require("firebase");
var express = require('express');
var app = express();

firebase.initializeApp({
    serviceAccount: "PriceSavior-6bc819483d90.json",
    databaseURL: "https://pricesavior-23da4.firebaseio.com"
});
var accountsRef = firebase.database().ref();

var port = process.env.PORT || 3000;

var counter = 0;

app.post('/createAccount', function (req, res) {
    console.log("New User");
    //Sets the node to the email, each node is a child of User Accounts

    var node = accountsRef.child('User Accounts');
    node.set({
        Username: req.body.accountNew[0],
        Password: req.body.accountNew[1],
        Zipcode: req.body.accountNew[2],
        Email: req.body.accountNew[3]
    });
    res.send("Account has been made!")
});



app.get('/', function (req, res) {
    res.send('Hello World has been said ' + counter + ' times!');
    counter++;
});

app.use(express.static('public'));

app.listen(port, function () {
    console.log('Example app listening on port' + port);
});