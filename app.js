const express = require('express');
const app = express();
require('dotenv').config({path: './test.env'});

console.log(process.env.Super_Secret);
console.log(process.env.Super_Secret1);

app.use(middleware1);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/usemiddleware2', middleware2, (req, res) => {
  res.send('Hello with middleware2');
});

function middleware1 (req, res, next) {
  console.log('middleware1 - middleware1');
  next();
}

function middleware2 (req, res, next) {
  console.log('middleware2 - middleware2');
  next();
}

module.exports = {app, express};  // passing in objects {app, and express}, can import specific objects in other files
