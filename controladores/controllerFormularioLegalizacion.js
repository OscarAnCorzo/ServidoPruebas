'use strict'

const db = require('./../modelos/db').conexion;
const {ProgramaAcademico, SemestreAcademico} = require('./../modelos/db').modelos;


async function controlador(req, res){
   
   let body = req.body;

   // --------------- verificamos la accion --------------- \\
   try {
      switch ((body.accion) ?body.accion :null) {
         case 'buscar':
            console.log('empieza buscar');

            // --------------- validamos los campos del body --------------- \\
            // validamos el codigo
            let val1 = parseInt(body.codigo,10) ? true : false
            // validamos el semestre
            let val2 = parseInt(body.semestre,10)
               ?  await SemestreAcademico.findAll({
                     where: {
                        id: body.semestre
                     }
                  })
               : false;
            
            if(!(val1 && val2 && val2.length != 0)){
               return res.status(400).json({
                  status: 400,
                  mensage: 'error en los parametros del body'
               });
            }
            
            // --------------- desarrollamos la peticion --------------- \\            
            var resultado = await SemestreAcademico.getId();

            // const [resultado, metadata] = await db.query('SELECT * FROM programa_academico');

            // --------------- terminamos la petición --------------- \\
            // armamos la respuesta.
            if(!resultado){
               return res.status(400).json({
                  status: 400,
                  mensaje: 'No hay registros'
               });
            }else{
               return res.status(200).json({
                  status: 200,
                  mensaje: 'Todo bien',
                  body: {
                     registros: resultado 
                  }
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
      console.log(error);
      return res.status(500).json({
         status: 500,
         mensage: 'pailas',
         'error': error.message
      });
   }
}

module.exports = controlador;