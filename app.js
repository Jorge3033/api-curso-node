'use strict';

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3700

const projectsRoutes  = require('./routes/projectsRoutes')

//rutas
app.listen(port, () => console.log(`Example app listening on port port!`))
app.get('/', (req, res) => res.send('Hello World!'))

app.use( '/projects', projectsRoutes )

//middleware
//app.use(express.urlencoded({ extended: false }))
//app.use(express.json())
app.use( bodyParser.urlencoded( { extended: false } ) )
app.use( bodyParser.json() )
//CORS

//exportar el module

module.exports = app