var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


const cors = require('cors');

// 引入mongoose
// var mongoose = require('mongoose');

// 第一步，要连接数据库
// mongoose.connect('mongodb://localhost:27017/2006', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// // 判断是否成功
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log("we're connected!")
// });

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cooksRouter = require('./routes/cooks');
var messageRouter = require('./routes/messages');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/cooks', cooksRouter);
app.use('/api/messages', messageRouter);

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
