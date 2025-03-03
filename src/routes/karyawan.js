const express = require('express')
const router = express.Router()
const controllerKaryawan = require('../controller/karyawan')

router.get('/', controllerKaryawan.getAllKaryawan)

module.exports = router;