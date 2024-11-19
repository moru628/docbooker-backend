const mongoose = require('mongoose')

const registerSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

const registerModel = mongoose.model('registers', registerSchema)

module.exports = registerModel