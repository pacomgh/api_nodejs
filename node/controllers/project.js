'use strict'

var proyecto = require('../models/project');

var controller = {
    home: function(req, res) {
        return res.status(200).send({
            message: "Soy el home"
        });        
    },

    test: function(req, res) {
        return res.status(200).send({
            message: "soy la respuesta de test desde el controlador"
        });        
    },

    saveProject: function(req, res){
        var project = new proyecto();

        var params = req.body;
        project.name = params.name;
        project.descripcion = params.descripcion;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;

        project.save((err, projecStored) =>{
            if(err) return res.status(500).send({message: "Error en el documento"});
            if(!projecStored) return res.status(404).send({message:"No se ha podido guardar el proyecto"});
            return res.status(200).send({project: projecStored});
        });
    },

    getProject: function(req, res){
        var projectId = req.params.id;

        if(projectId==null) return res.status(404).send({message: "El proyecto no existe"});

        proyecto.findById(projectId, (err, project) =>{
            if(err) return res.status(500).send({message: "error al devolver los datos"});
            if(!project) return res.status(404).send({message: "El proyecto no existe"});

            return res.status(200).send({project});
        });

    }


};

module.exports = controller;