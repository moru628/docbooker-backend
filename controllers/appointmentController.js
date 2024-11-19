const appointmentModel = require('../models/appointment')

const appointment = async(req, res) => {
    try{
        const userId = req.params.userId
        const {name, image, speciality, address, date, time} = req.body
        const appointment =  await appointmentModel.create({
            userId: userId,
            name,
            image,
            speciality,
            address:{
                line1: address.line1,
                line2: address.line2
            },
            date,
            time,
        })
        res.json(appointment)
        console.log(appointment)
    }catch(error){
        console.log("Failed to create appointment database", error)
    }
}

const fetchAllAppointments = async(req, res) => {
    try{
        const userId = req.params.userId
        const fetchAppointment = await appointmentModel.find({userId: userId})
        res.json(fetchAppointment)
    }catch(error){
        console.log('Failed to fetch appointment data', error)
    }
}

const deleteAppointmentById = async(req, res) => {
    try{
        const {appointmentId} = req.params
        const deletedAppointment = await appointmentModel.findByIdAndDelete(appointmentId)
        if(!deletedAppointment){
            return res.json('Appointment not found')
        }
        res.json({message: 'Deleted booking successfully'})
    }catch(error){
        console.log('Failed to delete appointment', error)
    }
}

module.exports = {appointment, fetchAllAppointments, deleteAppointmentById}