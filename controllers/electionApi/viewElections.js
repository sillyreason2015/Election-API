import Election from "../../schema/electionSchema.js";


export const viewElections = async (req, res) => {
    try{
    const elections = await Election.find().populate('candidateId')
    res.status(200).json({elections})
}catch(error){
    res.status(500).json({message: error.message})
}
}