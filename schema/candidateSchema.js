import mongoose from 'mongoose'
const Schema = mongoose.Schema

const candidateSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    motto: {
        type: String,
        required: true
    },
    votes: {
        type: Number, 
        default: 0
    },
    electionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Election",
        required: true
    },
     photo: { 
        type: String 
    }
}, {timestamps: true})

const Candidate = mongoose.model("Candidate", candidateSchema)

export default Candidate
