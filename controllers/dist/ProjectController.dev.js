'use strict';

var Project = require('../models/project');

var projectController = {
  home: function home(req, res) {
    return res.status(200).send({
      message: 'Soy home de Projects'
    });
  },
  test: function test(req, res) {
    return res.status(200).send({
      message: 'Soy Test de Projects'
    });
  },
  store: function store(req, res) {
    //let project = new Project()
    console.log(req.body);
    return res.status(200).send({
      message: 'Metodo storage de project',
      url: req.url,
      request: req.body
    });
  }
};
module.exports = projectController;