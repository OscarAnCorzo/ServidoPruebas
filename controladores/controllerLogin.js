'use strict'

const jwt = require('jsonwebtoken');
const config = require('./../config');
const { UsuarioPlataforma, UsuarioPlataformaRol } = require('./../modelos/db').modelos;


async function controlador(req, res){

  let body = req.body;
  
  // --------------- verificamos la accion --------------- \\
  try {
    switch (body.accion) {
      case 'ingresar':
        // --------------- validamos los campos del body --------------- \\            
        if(!(body.usuario && body.contraseña)){
          return res.status(400).json({
            status: 400,
            mensage: 'error en los parametros del body'
          });
        }
        
        // --------------- desarrollamos la peticion --------------- \\            
        var resultado = await UsuarioPlataforma.getRegistros({
          where: {
            'nombre_usuario': [body.usuario],
            'contrasena'    : [body.contraseña]
          }
        });

        // --------------- terminamos la petición --------------- \\
        // armamos la respuesta.
        if(resultado.length == 0){
          return res.status(400).json({
            status: 400,
            mensaje: 'Credenciales incorrectas'
          });
        }else{
          let token = jwt.sign({
            usuario: resultado[0]['nombre_usuario'],
            idRol: resultado[0]['id_rol']
          }, config.semillaJWT, {expiresIn: 60 * 60});

          return res.status(200).json({
            status: 200,
            mensaje: 'Todo bien',
            body: { token }
          });
        }
      break;
      default:
        return res.status(400).json({
          status: 400,
          mensage: 'accion no reconocida, revise la petición.'
        });
      break;
    }
  } catch (error) {
    // console.log(error);
    return res.status(500).json({
        status: 500,
        mensage: 'pailas',
        'error': error.message
    });
  }
}

module.exports = controlador;