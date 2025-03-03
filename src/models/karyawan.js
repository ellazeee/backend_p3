const db = require('../config/database')

const getAllDBKaryawan = () => {
    const sqlQuery = 'SELECT * FROM karyawan'
    return db.execute(sqlQuery)
}

const insertKaryawan = (body) => {
    const sqlQuery = `INSERT INTO karyawan (id_karyawan, nama, jabatan) VALUES (${body.id_karyawan}, '${body.nama}', '${body.jabatan}')`;
    return db.execute(sqlQuery)
}

module.exports = {
    getAllDBKaryawan,
    insertKaryawan
}