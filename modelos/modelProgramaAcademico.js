'use strict'



// module.exports = (sequelize) => {
//    return sequelize.define(
//       'programa_academico',
//       {},
//       {
//          tableName: 'programa_academico',
//          timestamps: false
//       }
//    );
// }


module.exports = (db) => {

   const { Model } = require('sequelize');
   
   class ProgramaAcademico extends Model{}
 
   ProgramaAcademico.init(
     {},
     {
       sequelize: db,
       tableName: 'programa_academico',
       timestamps: false
     }
   );
 
   return ProgramaAcademico;
 }