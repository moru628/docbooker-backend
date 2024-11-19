const mongoose = require('mongoose')
const dotenv = require('dotenv'); 

dotenv.config();

const CONNECTION_STRIING = process.env.MONGO_URL;

const connectToDatabase = async() => {
    try{
        await mongoose.connect(CONNECTION_STRIING)
        console.log("MongoDB connected successfully")
    } catch(error){
        console.log("Failed to connect to the database", error)
    }
}

module.exports = connectToDatabase