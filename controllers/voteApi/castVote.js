import User from "../../schema/userSchema.js";
import Candidate from "../../schema/candidateSchema.js";
import Election from "../../schema/electionSchema.js";
import Vote from "../../schema/voteSchema.js";

export const castVote = async (req, res) => {
    const {electionId, candidateId} = req.body
    const userId = req.user._id

    try{
        if(!electionId || !candidateId){
            return res.status(400).json({message: "Elction Id and Candidate Id are required"})
        }

        const voteCast = await Vote.findOne({user: userId, election: electionId})
            if(voteCast){
                return res.status(403).json({message: "You have already voted in this election"})
            }
        

        const election = await Election.findById(electionId)
        if(!election){
            return res.status(404).json({message: "Election not found"})
        }
        const now = new Date()
        if(now < election.startDate || now > election.endDate){
            return res.status(403).json({message: "Election is not active"})
        }

        if(!election.candidateId.includes(candidateId)){
            return res.status(400).json({message: "Candidate does not belong in this election"})
        }

        const vote = new Vote({
            user: userId,
            candidate: candidateId,
            election: electionId
        })

        await vote.save()

        const candidate = await Candidate.findById(candidateId)
        candidate.votes += 1
        await candidate.save()

        res.status(200).json({message: "Vote cast successfully"})
    }catch(error){
        res.status(500).json({message: error.message})
    }
}