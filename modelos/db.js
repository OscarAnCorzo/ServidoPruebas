'use strict'

const Sequelize = require('sequelize');
const conexion = require('./conexionDB');
const ProgramaAcademicoModel = require('./../modelos/modelProgramaAcademico');

// cargar los modelos
const ProgramaAcademico = ProgramaAcademicoModel(conexion, Sequelize);

conexion.sync()
   .then(() => {
      console.log(' -------------------------- ');
      console.log(' Database & tables created!');
      console.log(` -------------------------- `);
   })

module.exports = {
   ProgramaAcademico
}