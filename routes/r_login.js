const express = require('express')
const { loginUser } = require('../controllers/c_login')

const router = express.Router()

router.post('/login', loginUser)

module.exports = router