import Candidate from "../../schema/candidateSchema.js";
import Election from "../../schema/electionSchema.js";
import Vote from "../../schema/voteSchema.js";

export const viewResults = async (req, res) => {
    const {electionId} = req.params
    const {isAdmin} = req.user

    if(!isAdmin){
        return res.status(400).json({message: "You are not authorized to carry out this action"})
    }
    try{
        if(!electionId){
            return res.status(400).json({message: "Election not found"})
        }

        const election = await Election.findById(electionId).populate("candidates")
        if(!election){
            return res.status(400).json({message: "Election not found"})
        }


        const votes = await Vote.find({election: electionId})


        const results = election.candidateId.map((candidate)=>{
            const voteCount = votes.filter((v)=>v.candidate.toString() === candidate._id.toString()).length
            return {
                candidateId: candidate._id,
                name: candidate.name,
                department: candidate.department,
                votes: voteCount
            }
        })  
        results.sort((a, b)=> b.votes - a.votes)
        res.status(200).json({election: election.title, results})
    }catch(error){
        res.status(500).json({message: error.message})
    }
}