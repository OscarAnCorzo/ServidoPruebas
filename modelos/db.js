'use strict'

// const Sequelize = require('sequelize');
const conexion = require('./conexionDB');
const ProgramaAcademicoModel = require('./../modelos/modelProgramaAcademico');
const SemestreAcademicoModel = require('./../modelos/modelSemestreAcademico');
const UsuarioPlataformaModel = require('./../modelos/modelUsuarioPlataforma');
const UsuarioPlataformaRolModel = require('./../modelos/modelUsuarioPlataformaRol');

// cargar los modelos
const ProgramaAcademico    = ProgramaAcademicoModel(conexion);
const SemestreAcademico    = SemestreAcademicoModel(conexion);
const UsuarioPlataforma    = UsuarioPlataformaModel(conexion);
const UsuarioPlataformaRol = UsuarioPlataformaRolModel(conexion);

conexion.sync()
   .then(() => {
      console.log(' -------------------------- ');
      console.log(' Database & tables created! ');
      console.log(` -------------------------- `);
   })

module.exports = {
   conexion,
   modelos: {
      ProgramaAcademico,
      SemestreAcademico,
      UsuarioPlataforma,
      UsuarioPlataformaRol   
   }
}

