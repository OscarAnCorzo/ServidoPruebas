'use strict'

const {ProgramaAcademico} = require('./../modelos/db');
// const db = require('./../modelos/conexionDB');



// async function cronograma(req, res){

//    // validacion del request

//    // realizar consultas
//    console.log('este');
//    let respuesta1 = await Prueba.getInfo('legalizacion_matricula');
//    console.log(respuesta1);
//    if(!respuesta1.estado) return res.status(400).json({mensaje:respuesta1.mensaje, error: respuesta1.error});
//    let respuesta2 = await Prueba.getInfo('legalizacion_matricula');
//    console.log('este3');
//    if(!respuesta2.estado) return res.status(400).json({mensaje:respuesta1.mensaje, error: respuesta1.error});

//    console.log('este4');

//    res.status(200).json({
//       resultado: respuesta2
//    });

//    // ------------------------------------------------------
//    // let getInfoTotal = async () => {
//    //    let resultado1 = await Prueba.getInfo('legalizacion_matricul');
//    //    let resultado2 = await Prueba.getInfo('legalizacion_matricula');

//    //    console.log(resultado2);
//    //    return resultado2;
//    // };

//    // getInfoTotal().then(
//    //    respuesta => res.status(200).send(respuesta)
//    // ).catch(
//    //    error => res.status(500).send({error: error.message})
//    // );
   
//    // ---------------------------------------------------------
//    // .then( e => {
//    //    console.log(e);
//    //    res.status(200).send(e);
//    // }).catch(err => {
//    //    console.log(err);
//    //    res.status(400).send({mensage: err});
//    // });

//    // console.log('este 2');

//    // console.log(resultado);

//    // console.log('este');


//    // if(Array.isArray(resultado)) res.status(200).send(resultado);
//    // else res.status(400).send(resultado);

//    // res.send('Hola Mundo API');
// }

async function controlador(req, res){
// console.log('uno');
   let body = req.body;

   // --------------- verificamos la accion --------------- \\
   try {
      switch ((body.accion != null) ? body.accion :null) {
         case 'prueba':
            

            // --------------- validamos los campos del req --------------- \\
            // --------------- desarrollamos la peticion --------------- \\
            // console.log(db);

            var resultado = await ProgramaAcademico.findAll({
               attributes: ['codigo','nombre','codigo_unidad','codigo_modalidad','id_plan_estudio_activo']
            });

            // const [resultado, metadata] = await db.query('SELECT * FROM programa_academico');

            if(!resultado){
               return res.status(400).json({
                  status: 400,
                  mensage: 'No hay registros'
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