'use strict'

const Prueba = require('./../modelos/model.prueba');



async function controllerPrueba(req, res){

   // validacion del request

   // realizar consultas
   console.log('este');
   let respuesta1 = await Prueba.getInfo('legalizacion_matricul');
   console.log(respuesta1);
   if(!respuesta1.estado) return res.status(400).json({mensaje:respuesta1.mensaje, error: respuesta1.error});
   let respuesta2 = await Prueba.getInfo('legalizacion_matricula');
   console.log('este3');
   if(!respuesta2.estado) return res.status(400).json({mensaje:respuesta1.mensaje, error: respuesta1.error});

   console.log('este4');

   res.status(200).json({
      resultado: respuesta2
   });

   // ------------------------------------------------------
   // let getInfoTotal = async () => {
   //    let resultado1 = await Prueba.getInfo('legalizacion_matricul');
   //    let resultado2 = await Prueba.getInfo('legalizacion_matricula');

   //    console.log(resultado2);
   //    return resultado2;
   // };

   // getInfoTotal().then(
   //    respuesta => res.status(200).send(respuesta)
   // ).catch(
   //    error => res.status(500).send({error: error.message})
   // );
   
   // ---------------------------------------------------------
   // .then( e => {
   //    console.log(e);
   //    res.status(200).send(e);
   // }).catch(err => {
   //    console.log(err);
   //    res.status(400).send({mensage: err});
   // });

   // console.log('este 2');

   // console.log(resultado);

   // console.log('este');


   // if(Array.isArray(resultado)) res.status(200).send(resultado);
   // else res.status(400).send(resultado);

   // res.send('Hola Mundo API');
}

module.exports = {
   controllerPrueba
}