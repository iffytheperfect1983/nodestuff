const express = require('express');
const app = express();

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


app.listen(3000, () => {
  console.log('listening on 3000');
});
