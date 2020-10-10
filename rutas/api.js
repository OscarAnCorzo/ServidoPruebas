const express = require('express');

var api = express.Router();

api.get('/api.prueba', (req, res) => {
   res.send({
      nombre: 'nombre1',
      edad: 32
   });
});

module.exports = api;
