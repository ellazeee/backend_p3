const db = require('../config/database')
const getAllDBKaryawan = () => {
    const sqlQuery = 'SELECT * FROM karyawan'
    return db.execute(sqlQuery)
}

module.exports = {
    getAllDBKaryawan
}