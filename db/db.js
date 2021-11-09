const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: '123456789',
        database: 'yardentestdb'
    }
});

module.exports = knex