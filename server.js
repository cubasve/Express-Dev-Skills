var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan'); 


var indexRouter = require('./routes/index');
var skillsRouter = require('./routes/skills');
// const Skill = require('../models/skill'); - don't need anymore since we're connecting this to controllers

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
 
app.use(logger('dev')); //logs our request to terminal
app.use(express.json()); //Send JSON requests in req.body
app.use(express.urlencoded({ extended: false })); //Takes data from a form and attaches it to req.body
app.use(cookieParser()); //Parses our cookies info that get sent to server and attach them to request object 
app.use(express.static(path.join(__dirname, 'public'))); //Handles a static asset (ex. stylesheet, images, JS files)

//Routers = middleware that map to specific routes
app.use('/', indexRouter);
app.use('/skills', skillsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
