const mongoose = require('mongoose')

const appointmentSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'registerModel'},
    name: String,
    image:String,
    speciality: String,
    address:{
        line1: String,
        line2: String,
    },
    date: String,
    time: String,
})

const appointmentModel = mongoose.model('appointments', appointmentSchema)

module.exports = appointmentModel