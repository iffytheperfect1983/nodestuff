const {app} = require('./app.js');

let port = 3000;
app.listen(port, () => {
  console.log('listening on port:' + port);
});
