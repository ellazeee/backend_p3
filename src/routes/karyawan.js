const express = require('express')
const router = express.Router()
const controllerKaryawan = require('../controller/karyawan')

router.get('/', controllerKaryawan.getAllKaryawan)
router.get('/', controllerKaryawan.insertKaryawan)

module.exports = router;