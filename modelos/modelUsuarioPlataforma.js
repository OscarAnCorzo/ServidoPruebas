'use strict'

module.exports = (db) => {

  const { Model } = require('sequelize');
  
  class UsuarioPlataforma extends Model{

    /**
     * @method getRegistros para obtener los registros de la tabla usuario_plataforma
     * 
     * @param { Object } opciones Objeto que puede contener valores para la clausula WHERE de la consulta a la db. 
     * 
     * @returns { List } Una lista de usuarios, cada registro de usuario va en un objeto  
     * 
     * @used_in
     *       - controllerLogin -> case: ingreso
     * 
     * @example
     * Model.getRegistros({
     *  where: {
     *    campo1: [val1, val2, ...],
     *    ...
     *  }
     * });
     * 
     * @author Oscar Corzo
     */
    static async getRegistros(opciones = {where: null, whereNot: null}){
      var where = '';

      if(opciones.where != null){
        where = 'WHERE ';
      
        for(let i in opciones.where){
          if(!Array.isArray(opciones.where[i])) throw new Error('Los valores para los elememtos del where deben ser Arrays');
          
          where += `up.${i} in ('${opciones.where[i]}') AND `;
        }
        where = where.slice(0,-4);
      }

      let query = `SELECT up.nombre_usuario, up.contrasena, upr.id_rol 
                   FROM usuario_plataforma up
                   JOIN usuario_plataforma_rol upr
                    ON upr.nombre_usuario = up.nombre_usuario
                   ${where} ;`;
      // console.log(query);
      let [resultado, metadata] = await db.query(query);
      return resultado;
    }

  }

  UsuarioPlataforma.init(
    {},
    {
      sequelize: db,
      tableName: 'usuario_plataforma',
      timestamps: false
    }
  );

  return UsuarioPlataforma;
}