const express = require('express')
const router = express.Router()
const {fetchProfileData, updateProfile} = require('../controllers/profileController')

router.get('/profile/:userId', fetchProfileData)
router.put('/profile/:userId', updateProfile)

module.exports = router