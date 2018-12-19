// var User = require('../models/user');
//
// exports.test = function (req, res) {
//     res.send('Greetings from the User Test controller!');
// };
//
// exports.user_create = function (req, res) {
//   console.log('will attempt to create user');
//   console.log('resbody: ' + req.body.email);
//   if (req.body.email &&
//     req.body.username &&
//     req.body.password &&
//     req.body.passwordConf) {
//       var userData = {
//         email: req.body.email,
//         username: req.body.username,
//         password: req.body.password,
//         passwordConf: req.body.passwordConf,
//       }
//     console.log('have all info to create user: ' + userData.email);
//     User.create(userData, function (err, user) {
//       if (err) {
//         // return next(err);
//         // res.send('failed to create user');
//         console.log('error: ' + err);
//         console.log('failed to create user');
//         res.send('failed to create user');
//       } else {
//         console.log('completed creating user');
//         // res.redirect('/profile');
//         // res.send('completed creating user');
//         res.send('successfullyl created user: ' + req.body.username);
//       }
//     })
//   } else {
//     console.log('don\'t have all info to create user')
//   }
// };
