'use strict';

var express = require('express');
var ejs = require('ejs');
var path = require('path');

var app = new express();

 // set the view engine to ejs
// view engine setup
app.engine('html', ejs.renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');


// index page 
app.get('/', function(req, res) {
    res.render('index');
});

app.listen(3000);
console.log('Thinks magic happens at http://localhost:3000');

