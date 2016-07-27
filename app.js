var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

const MONGO_PASS = process.env.MONGO_DB_PASS;
const MONGO_HOST = process.env.OPENSHIFT_MONGODB_DB_HOST;
const MONGO_PORT = process.env.OPENSHIFT_MONGODB_DB_PORT;

var mongoose = require('mongoose');
if (MONGO_HOST) {
  mongoose.connect('mongodb://admin:' + MONGO_PASS + '@' + MONGO_HOST + ':' + MONGO_PORT + '/checkedin');
} else {
  mongoose.connect('mongodb://localhost/checkedin');
}

var routes = require('./routes/index');
var users = require('./routes/users');
var courses = require('./routes/courses');
var userprofile = require('./routes/userprofile');
var home = require('./routes/home');
var settings = require('./routes/settings');


var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, './public')));

app.use('/', routes);
app.use('/courses', courses);
app.use('/users', users);
app.use('/userprofile', userprofile);
app.use('/home', home);
app.use('/settings', settings);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;