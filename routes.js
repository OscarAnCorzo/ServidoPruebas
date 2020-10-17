'use strict'

const express = require('express');
// var rutasGestionAcademica = require('./rutas/ruta.GestionAcademica')
var api = express.Router();
api.post('/ProgramaAcademico', require('./controladores/controllerProgramaAcademico'));
// enrutador.use('/api.GestionAula', rutasGestionAula);
// enrutador.use('/api.Convenios', rutasConvenios);

module.exports = api;