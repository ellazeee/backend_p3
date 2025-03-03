const dataKaryawan = require('../models/karyawan')

const getAllKaryawan = async (req,res) => {
    const [data] = await dataKaryawan.getAllDBKaryawan()
    res.json({
        message: "GET ALL Karyawan Success",
        data: data
    })
}

module.exports = {
    getAllKaryawan
}