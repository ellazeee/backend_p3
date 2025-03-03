const mysql = require('mysql2')
const db = mysql.createPool({
    host: 'localhost',
    user: 'root', // Ganti dengan user MySQL Anda
    password: '', // Ganti dengan password MySQL Anda
    database: 'el_restoran'
});

module.exports = db.promise();