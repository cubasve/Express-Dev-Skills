const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan'); 
const methodOverride = require('method-override');


const indexRouter = require('./routes/index');
const skillsRouter = require('./routes/skills');
// const Skill = require('../models/skill'); - don't need anymore since we're connecting this to controllers

const app = express(); //create the Express app

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); //Use EJS as our view engine
 
app.use(logger('dev')); //logs our request to terminal
app.use(express.json()); //Send JSON requests in req.body
app.use(express.urlencoded({ extended: false })); //Takes data from a form and attaches it to req.body
app.use(cookieParser()); //Parses our cookies info that get sent to server and attach them to request object 
app.use(express.static(path.join(__dirname, 'public'))); //Handles a static asset (ex. stylesheet, images, JS files)
app.use(methodOverride('_method')); 

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
