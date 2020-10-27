'use strict'

// const Sequelize = require('sequelize');
const conexion = require('./conexionDB');
const ProgramaAcademicoModel = require('./../modelos/modelProgramaAcademico');
const SemestreAcademicoModel = require('./../modelos/modelSemestreAcademico');

// cargar los modelos
const ProgramaAcademico = ProgramaAcademicoModel(conexion);
const SemestreAcademico = SemestreAcademicoModel(conexion);

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
      SemestreAcademico   
   }
}

