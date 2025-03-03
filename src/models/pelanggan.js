const db = require('../config/database')

const getAllDBPelanggan = () => {
    const sqlQuery = 'SELECT * FROM pelanggan'
    return db.execute(sqlQuery)
}

const insertPelanggan = (body) => {
    const sqlQuery = `INSERT INTO pelanggan (id_pelanggan, nama) VALUES (${body.id_pelanggan}, '${body.nama}', '${body.jabatan}')`;
    return db.execute(sqlQuery)
}

module.exports = {
    getAllDBPelanggan,
    insertPelanggan
}