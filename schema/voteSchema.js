// models/Vote.js
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const voteSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  candidate: {
    type: Schema.Types.ObjectId,
    ref: "Candidate",
    required: true,
  },
  election: {
    type: Schema.Types.ObjectId,
    ref: "Election",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Vote = mongoose.model("Vote", voteSchema);
export default Vote;
