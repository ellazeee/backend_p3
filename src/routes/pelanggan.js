const express = require('express')
const router = express.Router()
const controllerPelanggan = require('../controller/pelanggan')

router.get('/', controllerPelanggan.getAllPelanggan)

module.exports = router;