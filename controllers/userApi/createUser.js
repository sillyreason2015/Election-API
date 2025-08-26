import User from "../../schema/userSchema.js";
import bcrypt from 'bcrypt'
import {sendMail} from '../../utility/sendMail.js'
import dotenv from 'dotenv'

dotenv.config()


export const createUser = async (req, res) => {
    const {name, matricNumber, email, password} = req.body
    if(!name || !matricNumber || !email || !password){
        return res.status(400).json({message: "Please enter all fields"})
    }
     const user = await User.findOne({matricNumber})
    try{
        if(user){
            return res.status(400).json({message: "This user already exists. Please login or register."})
        }

        const otp = Math.floor(100000 + Math.random() * 90000)
        const otpExpires = new Date(Date.now() + 1000 * 60 * 5).toISOString()

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            name,
            matricNumber,
            email: email.toLowerCase(),
            password: hashedPassword,
            otp,
            otpExpires
        })

        await newUser.save()

        const mailObj = {
            mailFrom: process.env.EMAIL_HOST,
            mailTo: email,
            subject: "New User Account Created Successfully",
            body: `Hi ${name}. Thank you for signing up. Your verification code is ${otp}, and it expires in 5 Minutes.`,
        }
        await sendMail(mailObj)
        res.status(200).json({message: "New User account created Successfully! Your OTP has been sent to your provided email address"})
    }catch(error){
        res.status(500).json({message: error.message})
    }
}