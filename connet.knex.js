const knex = require('knex')({
    client: 'mysql2',
    version:'8.3',
    connection: {
      host : 'localhost',
      port : 3306,
      user : 'root',
      password : '1234',
      database : 'thailand-provinces'
    }
  });

  module.exports = knex