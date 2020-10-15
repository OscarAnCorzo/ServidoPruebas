'use strict'

// puerto
process.env.PORT = process.env.PORT || 3000;

// parametros de conexion DB
// const dbUser = 'postgres';
// const dbHost = 'localhost';
// const dbName = 'ipred_plataformatic';
// const dbPassword = '123456';
// const dbPort = '5432';

// exports.dbUser = dbUser;
// exports.dbHost = dbHost;
// exports.dbName = dbName;
// exports.dbPassword = dbPassword;
// exports.dbPort = dbPort;

module.exports = {
   dbUser: 'postgres',
   dbHost: 'localhost',
   dbName: 'ipred_plataformatic',
   dbPassword: '123456',
   dbPort: '5432'
}
