'use strict'

// const {ProgramaAcademico, SemestreAcademico} = require('./../modelos/db');
const Conexion = require('./../modelos/conexionDB');

async function controlador(req, res){
   let body = req.body;

   // --------------- verificamos la accion --------------- \\
   try {
      switch ((body.accion) ? body.accion :null) {
         case 'buscar':
            console.log('empieza buscar');
            // establecemos la conexion
            var db = await Conexion();
            
            /* 
             * si vamos a usar un modelo lo cargamos aqui 
             * si no, usamos el metodo query de la conexion que no se necesita cargar
            */
            const ProgramaAcademico = require('./../modelos/modelProgramaAcademico');
            const SemestreAcademico = require('./../modelos/modelSemestreAcademico');

            // --------------- validamos los campos del req --------------- \\
            // validamos el codigo
            let val1 = parseInt(body.codigo,10) ? true : false
            // validamos el semestre
            let val2 = parseInt(body.semestre,10)
               ?  await SemestreAcademico(db).findAll({
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
            var resultado = await SemestreAcademico(db).getId();

            // const [resultado, metadata] = await db.query('SELECT * FROM programa_academico');

            // --------------- terminamos la petición --------------- \\
            // cerramos la conexion
            await db.close();
            console.log('termina buscar');
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
         case 'prueba':
               console.log('empieza este');
               var db = await Conexion();
               const SemestreAcademic = require('./../modelos/modelSemestreAcademico')(db);
            setTimeout(async ()=>{
               console.log('empieza prueba');

               // establecemos la conexion
               var db = await Conexion();
               
               /* 
               * si vamos a usar un modelo lo cargamos aqui 
               * si no, usamos el metodo query de la conexion que no se necesita cargar
               */
               const ProgramaAcademico = require('./../modelos/modelProgramaAcademico');
               const SemestreAcademico = require('./../modelos/modelSemestreAcademico');

               // --------------- validamos los campos del req --------------- \\
               // validamos el codigo
               let val1 = parseInt(body.codigo,10) ? true : false
               // validamos el semestre
               let val2 = parseInt(body.semestre,10)
                  ?  await SemestreAcademico(db).findAll({
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
               var resultado = await SemestreAcademico(db).getId();

               // const [resultado, metadata] = await db.query('SELECT * FROM programa_academico');

               // --------------- terminamos la petición --------------- \\
               // cerramos la conexion
               await db.close();
               console.log('termina prueba');
               
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
            }, 5000);
            
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
   


   // console.log('este');
   // let respuesta1 = await Prueba.getInfo('legalizacion_matricula');
   // console.log(respuesta1);
   // if(!respuesta1.estado) return res.status(400).json({mensaje:respuesta1.mensaje, error: respuesta1.error});
   // let respuesta2 = await Prueba.getInfo('legalizacion_matricula');
   // console.log('este3');
   // if(!respuesta2.estado) return res.status(400).json({mensaje:respuesta1.mensaje, error: respuesta1.error});

   // console.log('este4');

   // res.status(200).json({
   //    resultado: respuesta2
   // });

}

module.exports = controlador;