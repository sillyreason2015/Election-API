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
    // we will bring this back when we want to show votes: votes: candidate.votes,
      election: candidate.electionId,
      photo: candidate.photo
        ? `${req.protocol}://${req.get("host")}/${candidate.photo.replace(/\\/g, "/")}`
        : null,
    }));

        res.status(200).json({formattedCandidates})
   }catch(error){
    res.status(500).json({message: error.message})
   }
}