const db = require('../config/database')
const getAllDBPelanggan = () => {
    const sqlQuery = 'SELECT * FROM pelanggan'
    return db.execute(sqlQuery)
}

module.exports = {
    getAllDBPelanggan
}