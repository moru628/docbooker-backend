const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'registerModel'},
    profileImg: String,
    name: String,
    email: String,
    phone: String,
    address: {
        line1: String,
        line2: String,
    },
    gender: String,
    dob: String
})

const profileModel = mongoose.model('profiles', profileSchema)

module.exports = profileModel