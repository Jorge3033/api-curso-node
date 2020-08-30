'use strict';

const Project = require('../models/project');

const projectController = {
    home : ( req, res )=>{
        return res.status(200)
               .send({
                   message : 'Soy home de Projects'
               })
    },
    test : ( req, res )=>{
        return res.status(200)
               .send({
                   message : 'Soy Test de Projects'
               })
    },
    store : (req, res) => {
        //let project = new Project()
        console.log(req.body)
        
        return res.status(200)
                .send({
                    message: 'Metodo storage de project',
                    url : req.url,
                    request : req.body,
                })
        
    }
}

module.exports = projectController;