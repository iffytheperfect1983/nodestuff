// app.js

var express = require('express');
var bodyParser = require('body-parser');

var product = require('./routes/product'); // Imports routes for the products
var app = express();


// Set up mongoose connection
var mongoose = require('mongoose');
let dev_db_url = 'mongodb://someuser:ABC1234@ds139124.mlab.com:39124/productstutorial';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

// var port = 3100;
//
// app.listen(port, () => {
//     console.log('Server is up and running on port numner ' + port);
// });

module.exports = {app, express}; // passing in objects {app, and express}, can import specific objects in other files
