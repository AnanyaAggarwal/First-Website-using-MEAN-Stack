/*const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))*/

//var express = require('express');
/*var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});*/

// app.js
var express = require('express');
var app = express();

var db = require('./db'); //ADD THIS LINE

// ADD THESE TWO LINES
var UserController = require('./user/UserController');
app.use('/users', UserController);

module.exports = app;