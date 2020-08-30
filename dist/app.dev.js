'use strict';

var express = require('express');

var bodyParser = require('body-parser');

var app = express();
var port = 3700;

var projectsRoutes = require('./routes/projectsRoutes'); //rutas


app.listen(port, function () {
  return console.log("Example app listening on port port!");
});
app.get('/', function (req, res) {
  return res.send('Hello World!');
});
app.use('/projects', projectsRoutes); //middleware
//app.use(express.urlencoded({ extended: false }))
//app.use(express.json())

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json()); //CORS
//exportar el module

module.exports = app;