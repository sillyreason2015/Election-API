import Candidate from "../../schema/candidateSchema.js";

export const getCandidates = async (req, res) => {
    const {electionId} = req.params
   try{
        let candidates
        if(electionId) {
            candidates = await Candidate.find({election: electionId})
        }else{
            candidates = await Candidate.find()
        }

        const formattedCandidates = candidates.map((candidate) => ({
      _id: candidate._id,
      name: candidate.name,
      department: candidate.department,
      votes: candidate.votes,
      election: candidate.election,
      photo: candidate.photo
        ? `${req.protocol}://${req.get("host")}/${candidate.photo.replace(/\\/g, "/")}`
        : null,
    }));

        res.status(200).json({formattedCandidates})
   }catch(error){
    res.status(500).json({message: error.message})
   }
}