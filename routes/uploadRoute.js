const express = require('express');
const router = express.Router();
const { uploadProfileImage } = require('../controllers/uploadController');
const upload = require('../config/multer');

router.post('/upload/:userId', upload.single('profileImg'), uploadProfileImage);

module.exports = router;
