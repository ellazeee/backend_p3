const dataKaryawan = require('../models/karyawan')

const getAllKaryawan = async (req, res) => {
    try {
        const [data] = await dataKaryawan.getAllDBKaryawan()
        res.json({
            message: "GET ALL Karyawan Success",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error
        })
    }

}

const insertKaryawan = async (req, res) => {
    const bodyPayload = req.body
    console.log(req.body)

    try {
        await dataKaryawan.insertKaryawan(bodyPayload)
        res.json({
            message: "POST New Karyawan Success",
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
    getAllKaryawan,
    insertKaryawan
}