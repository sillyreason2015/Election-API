import Candidate from '../../schema/candidateSchema.js'
import Election from '../../schema/electionSchema.js'


export const addCandidate = async (req, res) => {

    const {electionId, name, level} = req.body
    const {isAdmin} = req.user

    if(!name ||!level ||!electionId){
        return res.status(400).json({message: "Missing Required Fields"})
    }
    const election = await Election.findById(electionId)
    if(!election){
        return res.status(400).json({message: "Election not found"})
    }
    if(!isAdmin){
        return res.status(400).json({message: "You are not authorized to carry out this action"})
    }

     let photoPath = null;
    if (req.file) {
      photoPath = `/uploads/${req.file.filename}`;
    }

    try{
        const newCandidate = new Candidate({
            name, 
            level,
            votes: 0,
            electionId,
            photo: photoPath
        })
        await newCandidate.save()
        
        election.candidateId.push(newCandidate._id)
        await election.save()


        res.status(200).json({message: 'Candidate added Successfully'})
    }catch(error){
        res.status(500).json({message: error.message})
    }

}