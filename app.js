// app.js

var express = require('express');
var bodyParser = require('body-parser');

var product = require('./routes/product'); // Imports routes for the products
var user = require('./routes/user');  // Imports routes for the user
var app = express();

const path = require('path');
const session = require('express-session');
const cors = require('cors');
const errorHandler = require('errorhandler');

//Configure isProduction variable
const isProduction = process.env.NODE_ENV === 'production';

// Set up mongoose connection
var mongoose = require('mongoose');
let dev_db_url = 'mongodb://someuser:ABC1234@ds139124.mlab.com:39124/productstutorial';
// let dev_db_url = 'mongodb://someuser:ABC1234@ds237574.mlab.com:37574/userstutorial'
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {useNewUrlParser: true});
mongoose.Promise = global.Promise;
mongoose.set('debug', true);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);
// app.use('/users', user);
app.use(cors());
app.use(require('morgan')('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'passport-tutorial', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

// Models and Config
require('./models/Users');
require('./config/passport');
app.use(require('./routes'));

//Error handlers & middlewares
if(!isProduction) {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);

    res.json({
      errors: {
        message: err.message,
        error: err,
      },
    });
  });
}

app.use((err, req, res, next) => {
  res.status(err.status || 500);

  res.json({
    errors: {
      message: err.message,
      error: {},
    },
  });
});


module.exports = {app, express}; // passing in objects {app, and express}, can import specific objects in other files
