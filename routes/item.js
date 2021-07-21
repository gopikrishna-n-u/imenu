const express = require('express')
const router = express.Router()
const item = require('../controllers/item')

router.post('/createItem', item.createItem)
router.post('/deleteItem', item.deleteItem)
router.post('/updateItem', item.updateItem)

/** Routes exported */
module.exports = router;