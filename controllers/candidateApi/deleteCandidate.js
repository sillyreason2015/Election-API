import Candidate from "../../schema/candidateSchema.js";
import Election from "../../schema/electionSchema.js";

export const deleteCandidate = async (req, res) => {
    const {candidateId} = req.params
    const {isAdmin} = req.user

    if(!isAdmin){
        return res.status(400).json({message: "You are not authorized to carry out this action"})
    }
    
    try{
        const candidate = await Candidate.findById(candidateId)
        if(!candidate){
            return res.status(404).json({message: "Candidate not found"})
        }

        const election = await Election.findById(candidate.electionId)
        if(election){
            election.candidateId = election.candidateId.filter(
                (id)=>id.toString() !== candidateId
            )
            await election.save()
        }
        await Candidate.findByIdAndDelete(candidateId)
        res.status(200).json({message: "Candidate deleted Successfully"})
    }catch(error){
        res.status(500).json({message: error.message})
    }
}