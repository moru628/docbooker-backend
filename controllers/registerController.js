const bcrypt = require('bcryptjs')
const registerModel = require('../models/register')
const profileModel = require('../models/profile')

const register = async (req, res) => {
  try {
    const { email, password,name } = req.body
    console.log(req.body)

    const check = await registerModel.findOne({email: email})
    if(check){
      return res.json({message:'exist'})
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const register = await registerModel.create({
      name,
      email,
      password: hashedPassword
    })

    const newProfile = await profileModel.create({
      userId: register._id,
      profileImg:"/assets/defaultProfileImg.png",
      name: register.name,
      email:register.email,
      phone:"",
      address:{
        line1: "",
        line2: "",
      },
      gender: "",
      dob: ""
    })
    if (newProfile) {
      res.json(register)
    } else {
      await registerModel.deleteOne({ _id: register._id })
      res.json({ message: "Failed to create profile" })
    }
  } catch (error) {
    console.log("Error creating user:", error)
  }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body
    console.log(req.body)
    const check = await registerModel.findOne({ email: email })
    if (check) {
      const compareResult = await bcrypt.compare(password, check.password)
      if(compareResult){
        const profile = await profileModel.findOne({userId: check._id})
        res.json({
          message: "success",
          userId: check._id,
          profileImg: profile.profileImg,
        })
      }else{
        res.json("The password is incorrect")
      }
    }else{
      res.json("The user doesn't exist")
    }
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error });
  }
}

module.exports = {register,login}