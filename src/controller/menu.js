const dataMenu = require('../models/menu')

const getAllMenu = async (req, res) => {
    try {
        const [data] = await dataMenu.getAllDBMenu()
        res.json({
            message: "GET ALL Menu Success",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error
        })
    }

}

const insertMenu = async (req, res) => {
    const bodyPayload = req.body
    console.log(req.body)

    try {
        await dataMenu.insertMenu(bodyPayload)
        res.json({
            message: "POST New Menu Success",
            data: req.body
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error
        })
    }
}

module.exports = {
    getAllMenu,
    insertMenu
}