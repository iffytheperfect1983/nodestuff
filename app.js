// app.js

var express = require('express');
var bodyParser = require('body-parser');

var product = require('./routes/product'); // Imports routes for the products
var user = require('./routes/user');  // Imports routes for the user
var app = express();

// Set up mongoose connection
var mongoose = require('mongoose');
let dev_db_url = 'mongodb://someuser:ABC1234@ds139124.mlab.com:39124/productstutorial';
// let dev_db_url = 'mongodb://someuser:ABC1234@ds237574.mlab.com:37574/userstutorial'
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {useNewUrlParser: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);
app.use('/users', user);

// var port = 3100;
//
// app.listen(port, () => {
//     console.log('Server is up and running on port numner ' + port);
// });

module.exports = {app, express}; // passing in objects {app, and express}, can import specific objects in other files
