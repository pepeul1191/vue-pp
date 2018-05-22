// modules de express
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const async = require('async');
const unirest = require('unirest');
const base_url = 'http://localhost:9090/';
const servicio_url = 'http://localhost:4567/';
// funciones helper
function makeId() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 20; i++){
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}
// servidor express
var app = express();
app.use(logger('dev'));
app.use(function (req, res, next) {
  res.set('Server', 'Ubuntu');
  res.set('Access-Control-Allow-Origin', '*');
  return next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(fileUpload());
app.use(express.static(path.join(__dirname, '')));
app.listen(9090);
console.log('Listening on port 9090');
// rutas rest
app.get('/', function (req, res) {
  res.redirect('/demos');
});
