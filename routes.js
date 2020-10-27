'use strict'

const express = require('express');
const autenticacion = require('./middlewares/midAutenticacion');

var api = express.Router();
api.post('/Login', require('./controladores/controllerLogin'));
api.post('/FormularioLegalizacion', autenticacion, require('./controladores/controllerFormularioLegalizacion'));
// api.post('/GruposHomologacion', require('./controladores/controllerGruposHomologacion'));
// api.post('/SubAcademica', require('./controladores/controllerSubAcademica'));

module.exports = api;