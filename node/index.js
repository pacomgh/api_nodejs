'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
//conexion a la BD
mongoose.connect('mongodb://localhost:27017/portafolio')
        .then(() => {
            console.log("Conexion realizada con éxito...")
            
            //crear servidor
            app.listen(port, ()=>{
                console.log("servidor corriendo correctamente en la url localhost:3700");
            });
        })
        .catch(err => console.log(err));