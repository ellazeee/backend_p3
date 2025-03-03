const express = require('express')
const router = express.Router()
const controllerMenu = require('../controller/menu')

router.get('/', controllerMenu.getAllMenu)
router.post('/', controllerMenu.insertMenu)

module.exports = router;