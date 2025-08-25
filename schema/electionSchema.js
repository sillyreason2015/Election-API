import mongoose from "mongoose";
const Schema = mongoose.Schema

const electionSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate:{
        type: Date,
        required: true
    },
    candidateId:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Candidate",  
    }]
}, {timestamps: true})

const Election = mongoose.model("Election", electionSchema)

export default Election