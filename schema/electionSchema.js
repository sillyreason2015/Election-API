import mongoose from "mongoose";
const Schema = mongoose.Schema

const electionSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    thumbnail:{
        type: String,
        required: true
    },
    candidateId:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Candidate",  
    }],
    resultsSent: {
        type: Boolean,
        default: false
    },
    voterId:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Voters"
    }]
}, {timestamps: true})

const Election = mongoose.model("Election", electionSchema)

export default Election