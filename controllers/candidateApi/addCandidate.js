import Candidate from '../../schema/candidateSchema.js'
import Election from '../../schema/electionSchema.js'


export const addCandidate = async (req, res) => {
    const {electionId, name, department} = req.body
    const {isAdmin} = req.user

    if(!name ||!department ||!electionId){
        return res.status(400).json({message: "Missing Required Fields"})
    }
    const election = Election.findById(electionId)
    if(!election){
        return res.status(400).json({message: "Election not found"})
    }
    if(!isAdmin){
        return res.status(400).json({message: "You are not authorized to carry out this action"})
    }

     let photoPath = null;
    if (req.file) {
      photoPath = req.file.path;
    }

    try{
        const newCandidate = new Candidate({
            name, 
            department,
            votes: 0,
            election: electionId,
            photo: photoPath
        })
        await newCandidate.save()
        
        election.candidates.push(newCandidate._id)
        await election.save()


        res.status(200).json({message: 'Candidate added Successfully'})
    }catch(error){
        res.status(500).json({message: error.message})
    }

}