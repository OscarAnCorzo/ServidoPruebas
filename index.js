'use strict'

// servidor
const express = require('express');
const bodyParser = require('body-parser');
const rutasWeb = require('./rutas/web');
const rutasApi = require('./rutas/api');

var servidor = express();

servidor.use(bodyParser.urlencoded({extended: false}));
servidor.use(bodyParser.json());

// rutas web
servidor.use(rutasWeb);

// rutas api
servidor.use(rutasApi);

servidor.listen(3000, () => {
   console.log('Escuchando por el puerto 3000');
});

