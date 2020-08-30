'use strict';

const express = require('express')
const ProjectController = require('../controllers/ProjectController')

var router= express.Router()

router.get('/home', ProjectController.home) 
router.get('/test', ProjectController.test)
router.post('/store', ProjectController.store)

module.exports = router;
