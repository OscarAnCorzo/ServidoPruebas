'use strict'

module.exports = (db) => {

  const { Model } = require('sequelize');
  
  class UsuarioPlataformaRol extends Model{}

  UsuarioPlataformaRol.init(
    {},
    {
      sequelize: db,
      tableName: 'usuario_plataforma_rol',
      timestamps: false
    }
  );

  return UsuarioPlataformaRol;
}