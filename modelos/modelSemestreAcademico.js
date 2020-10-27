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


    /**
     * @method getId para obtener el id de todos los registros de semestre_academico
     * 
     * @param { String } parametro No se está usando 
     * 
     * @returns { List } resultado Lista de objetos que contienen un id de semestre_academico respectivamente
     * 
     * @used_in
     *       - controllerFormularioLegalizacion -> case: buscar
     *       - ******************************** -> case: ******
     * 
     * @author Oscar Corzo
     */
    static async getId(parametro){
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