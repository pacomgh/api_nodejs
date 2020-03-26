//configuracion express y body parser
'use strict'
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//cargar archivos de rutas
//cargamos el archivo de rutas
var project_routes = require('./routes/project');

//middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS

//rutas
//sobreescribimos la ruta para que la cargue el archivo app
app.use('/api', project_routes);
//exportar
module.exports = app;