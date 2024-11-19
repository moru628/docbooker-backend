const express = require('express')
const router = express.Router()
const {appointment, fetchAllAppointments,deleteAppointmentById} = require('../controllers/appointmentController')

router.post('/myAppointment/:userId',appointment)
router.get('/myAppointment/:userId', fetchAllAppointments)
router.delete('/myAppointment/:appointmentId', deleteAppointmentById)

module.exports = router