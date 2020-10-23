'use strict'

const express = require('express');

var api = express.Router();
api.post('/FormularioLegalizacion', require('./controladores/controllerFormularioLegalizacion'));
// api.post('/GruposHomologacion', require('./controladores/controllerGruposHomologacion'));
// api.post('/SubAcademica', require('./controladores/controllerSubAcademica'));

module.exports = api;