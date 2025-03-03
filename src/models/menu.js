const db = require('../config/database')

const getAllDBMenu = () => {
    const sqlQuery = 'SELECT * FROM menu'
    return db.execute(sqlQuery)
}

const insertMenu = (body) => {
    const sqlQuery = `INSERT INTO menu (id_menu, nama_menu, harga) VALUES (${body.id_menu}, '${body.nama_menu}', ${body.harga})`;
    return db.execute(sqlQuery)
}

module.exports = {
    getAllDBMenu,
    insertMenu
}