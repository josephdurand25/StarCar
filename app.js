var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressLayouts = require('express-ejs-layouts'); // Ajouter l'importation


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testsRouter = require('./routes/test');
var carsRouter = require('./routes/cars');
var driversRouter = require('./routes/drivers');
var pannesRouter = require('./routes/pannes');
var versementsRouter = require('./routes/versements');

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/images', express.static(__dirname + 'public/images'))

app.use(expressLayouts); 
app.set('views', path.join(__dirname, 'views'));
// view engine setup
app.set('view engine', 'ejs');
// Configurer express-ejs-layouts
app.set('layout', './layouts/squelette');
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/test', testsRouter);
app.use('/cars', carsRouter);
app.use('/drivers', driversRouter);
app.use('/pannes', pannesRouter);
app.use('/versements', versementsRouter);

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
