'use strict';

var _require = require('express'),
    Router = _require.Router;

var ProjectController = require('../constollers/ProjectController');

Router.get('/projects-home', ProjectController.home);
Router.get('/projects-home', ProjectController.test);
module.exports = Router;