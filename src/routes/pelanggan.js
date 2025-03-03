const express = require('express')
const router = express.Router()
const controllerPelanggan = require('../controller/pelanggan')

router.get('/', controllerPelanggan.getAllPelanggan)
router.get('/', controllerPelanggan.insertPelanggan)

module.exports = router;