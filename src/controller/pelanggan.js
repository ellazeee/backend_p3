const dataPelanggan = require('../models/pelanggan')

const getAllPelanggan = async (req,res) => {
    const [data] = await dataPelanggan.getAllDBPelanggan()
    res.json({
        message: "GET ALL Pelanggan Success",
        data: data
    })
}

module.exports = {
    getAllPelanggan
}