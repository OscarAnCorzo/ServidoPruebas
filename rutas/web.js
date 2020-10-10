const express = require('express');

var web = express.Router();

web.get('/', (req, res) => {
   res.send('Hola Mundo 00');
});

module.exports = web;