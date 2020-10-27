const config = require('./../config');
const jwt = require('jsonwebtoken');

module.exports = (req,res, next) => {
  jwt.verify(req.get('autenticacion'), config.semillaJWT, (err, decoded) => {
    if(err){
      return res.status(401).json({
        status: 401,
        mensage: 'Autenticación Fallida'
      });
    }
    
    req.usuario = decoded;

    next();
  });

}