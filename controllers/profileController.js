const profileModel  = require('../models/profile')

const fetchProfileData = async(req, res) => {
    try{
        const userId = req.params.userId
        const profile = await profileModel.findOne({userId: userId})
        res.json(profile)
    }catch(error){
        console.log('Error fetching profile', error)
    }
}

const updateProfile = async(req, res) => {
    try{
        const userId = req.params.userId
        const { name, email, phone, address, gender, dob } = req.body
        const updateProfile = await profileModel.findOneAndUpdate(
            {userId: userId},
            {name,email,phone,address:{line1:address.line1,line2:address.line2},gender,dob},
            {new:true}
        )
        res.json(updateProfile)
    }catch(error){
        console.log('Error updating profile',error)
    }
}

module.exports = {fetchProfileData, updateProfile}