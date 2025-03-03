const dataMenu = require('../models/menu')

const getAllMenu = async (req,res) => {
    const [data] = await dataMenu.getAllDBMenu()
    res.json({
        message: "GET ALL Menu Success",
        data: data
    })
}

const addKaryawan = async (req,res) => {
    const [data] = await dataMenu.getAllDBMenu()
    res.json({
        message: "GET ALL Menu Success",
        data: data
    })
}

module.exports = {
    getAllMenu
}