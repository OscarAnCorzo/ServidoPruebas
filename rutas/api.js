'use strict'

const express = require('express');
var controlador1 = require('./../controladores/controller.prueba');

var api = express.Router();

api.get('/api.prueba', controlador1.controllerPrueba);

module.exports = api;
