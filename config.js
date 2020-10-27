'use strict'

// puerto
process.env.PORT = process.env.PORT || 3001;

// parametros de conexion DB
module.exports = {
   dbUser: 'postgres',
   dbHost: 'localhost',
   dbName: 'ipred_plataformatic',
   dbPassword: '123456',
   dbPort: '5432',
   semillaJWT: 'estaEsLaSemillaDeDesarrollo'
}
