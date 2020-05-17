var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();
console.log("Server Started...");

//controllers
var alf_details = require('./api/controllers/alf.js');
var shg_details = require('./api/controllers/shg.js');
var people_details = require('./api/controllers/people.js');
var shg_meeting = require('./api/controllers/shg_meeting.js');
var alf_meeting = require('./api/controllers/alf_meeting.js');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//logger files
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/api/alf', alf_details);
app.use('/api/shg', shg_details);
app.use('/api/people', people_details);
app.use('/api/meeting/shg', shg_meeting);
app.use('/api/meeting/alf', alf_meeting);

//Error handling 404
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log(err);
  res.render('error');
});

module.exports = app;
