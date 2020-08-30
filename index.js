'use strict';
console.log('Cargando');
//Conexion a mongo DB

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/portafolio', { useNewUrlParser: true, useUnifiedTopology: true } )
        .then( ()=>{
            console.log('conexion a la DB Establecida');
            const app = require('./app')
            
        })
        .catch( error => console.log(error) );