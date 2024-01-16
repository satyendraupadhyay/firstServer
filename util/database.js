const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'local',
    user:'root',
    database: 'node-complete',
    password: 'nodecomplete'
});

module.exports = pool.promise();