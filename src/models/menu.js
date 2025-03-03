const db = require('../config/database')

const getAllDBMenu = () => {
    const sqlQuery = 'SELECT * FROM menu'
    return db.execute(sqlQuery)
}

const addDBKaryawan = () => {
    const sqlQuery = 'INSERT INTO menu VALUE '
    return db.execute(sqlQuery)
}

module.exports = {
    getAllDBMenu
}