import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    matricNumber: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isVerified: {
    type: Boolean,
    default: false,
},
    votedElections: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Election"
    }],
otp: String,
otpExpires: Date,
lastOtpSentAt: Date,
passwordResetToken: String,
passwordResetExpires: Date
}, {timestamps: true})

const User = mongoose.model("User", userSchema)

export default User