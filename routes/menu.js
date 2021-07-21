const express = require('express')
const router = express.Router()
const menu = require('../controllers/menu')

router.post('/createMenu', menu.createMenu)
router.post('/deleteMenu', menu.deleteMenu)
router.post('/updateMenu', menu.updateMenu)

/** Routes exported */
module.exports = router;