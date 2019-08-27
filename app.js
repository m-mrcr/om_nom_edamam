var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config()
var app = express();
const cors = require('cors');

var indexRouter = require('./routes/index');
var recipeRouter = require('./routes/api/v1/recipes');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET');
});

app.use('/', indexRouter);
app.use('/api/v1/recipes', recipeRouter);

module.exports = app;
