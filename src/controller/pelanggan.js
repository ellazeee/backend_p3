const dataPelanggan = require('../models/pelanggan')

const getAllPelanggan = async (req, res) => {
    try {
        const [data] = await dataPelanggan.getAllDBPelanggan()
        res.json({
            message: "GET ALL Pelanggan Success",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error
        })
    }

}

const insertPelanggan = async (req, res) => {
    const bodyPayload = req.body
    console.log(req.body)

    try {
        await dataPelanggan.insertPelanggan(bodyPayload)
        res.json({
            message: "POST New Pelanggan Success",
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
    getAllPelanggan,
    insertPelanggan
}