const express = require('express')
const router = express.Router()
const rest = require('../controllers/restaurant')

router.get('/fetchRestaurantData', rest.fetchRestaurantData)

/** Routes exported */
module.exports = router;