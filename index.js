'use strict'

// cargar variables globales
require('./config');

// express
const express = require('express');
const bodyParser = require('body-parser');
var servidor = express();
// cargar rutas
const rutasWeb = require('./rutas/web');
const rutasApi = require('./rutas/api');

// middlewares
servidor.use(bodyParser.urlencoded({extended: false}));
servidor.use(bodyParser.json());

// rutas web
servidor.use(rutasWeb);

// rutas api
servidor.use(rutasApi);

servidor.listen(process.env.PORT, () => {
   console.log('Escuchando por el puerto: ', process.env.PORT);
});

