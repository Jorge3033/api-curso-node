'use strict';

console.log('Cargando'); //Conexion a mongo DB

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  console.log('conexion a la DB Establecida');

  var app = require('./app');
})["catch"](function (error) {
  return console.log(error);
});