'use strict'

const db = require('./../database/conexionDB');

async function getInfo(tabla){

   try {
      let resultado = await db.query('select * from ' + tabla);
      return {
         estado: true,
         respuesta: resultado.rows
      };
   } catch (error) {
      // console.log(error);
      return {
         estado: false,
         error: error,
         mensaje: error.message
      };
   }
   
   // await db.query('select * from ' + tabla)
   //    .then(res => {
   //       return {
   //                   estado: true,
   //                   respuesta: res.rows
   //                };
   //    })
   //    .catch(err => {
   //       return {
   //                   estado: false,
   //                   error: err,
   //                   mensaje: err.message
   //                };
   //    })

   // db.query('select * from ' + tabla, (err, res) => {
   //    if(err){
   //       return {
   //          estado: false,
   //          error: err,
   //          mensaje: err.message
   //       };
   //    }

   //    if(res){
   //       return {
   //          estado: true,
   //          respuesta: res.rows
   //       };
   //    }else{
   //       return {
   //          estado: false,
   //          error: 'paila',
   //          mensaje: 'no hay error pero no hay error'
   //       };
   //    }
   // });

   
}

module.exports = {
   getInfo
}