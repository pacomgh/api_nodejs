'use strict'
//importamos la biblioteca express
var express = require('express');
//importamos el controlador project
var ProjectController = require('../controllers/project');
//creamos la variable router para usar Router desde ecpress
var router  = express.Router();
//hacemos la peticion que necesitemos 
//El primer parametro sera la ruta que utilizaremos en el navegador web, el segundo es el metodo que traemos del controlador
router.get('/home', ProjectController.home);
router.post('/test', ProjectController.test);
router.post('/save-project', ProjectController.saveProject);
router.get('/project/:id?', ProjectController.getProject);
//exportamos archivo para que se pueda usar fuera de si mismo
module.exports = router;


