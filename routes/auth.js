const express = require('express')
const router = express.Router()
const auth = require('../controllers/auth')

router.post('/login', auth.verifyUser)
router.post('/logout', auth.logOutUser)
router.post('/register', auth.registerUser)

/** Routes exported */
module.exports = router;