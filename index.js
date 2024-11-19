const express = require("express")
const cors = require("cors")
const connectToDatabase = require('./config/db')
const path = require('path')

const registerRoute = require('./routes/registerRoute')
const profileRoute = require('./routes/profileRoute')
const uploadRoute = require('./routes/uploadRoute')
const appointmentRoute = require('./routes/appointmentRoute')

const app = express()
app.use(express.json())
app.use(cors())
connectToDatabase();

app.use('/', registerRoute)
app.use('/', profileRoute)
app.use('/', uploadRoute)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/', appointmentRoute)

const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{
    console.log("server is running")
})