'use strict'

// module.exports = (sequelize) => {
//   return sequelize.define(
//     'semestre_academico',
//     {},
//     {
//       tableName: 'semestre_academico', 
//       timestamps: false
//     }
//   );
// }

module.exports = (db) => {

  const { Model } = require('sequelize');
  
  class SemestreAcademico extends Model{
    
    static async getId(){
      var [resultado, metadata] = await db.query("SELECT id from semestre_academico");
      return resultado;
    }

  }

  SemestreAcademico.init(
    {},
    {
      sequelize: db,
      tableName: 'semestre_academico',
      timestamps: false
    }
  );

  return SemestreAcademico;
}