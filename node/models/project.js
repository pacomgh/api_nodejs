'use strict'
//hacemos un require de moongose
var mongoose = require('mongoose');
//traemos el schema del modelo de la base de datos
var Schema = mongoose.Schema;
//crearemos el formato del schema del modelo de base de datos en formato json
var ProjectSchema = Schema({//identificador y tipo
    name: String,
    descripcion: String,
    category: String,
    year: Number,
    langs: String,//arreglo
    image: String
});

//exportamos el modulo para que se pueda usar en otras clases
//los parametros son, el nombre de la coleccion en mongo y el schema de la base de datos.
//mongoose convierte a minuscula y pluraliza el nombre de la coleccion
module.exports = mongoose.model('Project', ProjectSchema);