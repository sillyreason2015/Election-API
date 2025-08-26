import Candidate from "../../schema/candidateSchema.js";

export const updateCandidate = async (req, res) => {
    const {candidateId} = req.params
    const {name, level} = req.body
    const {isAdmin} = req.user

    if(!isAdmin){
        return res.status(400).json({message: "You are not authorized to carry out this action "})
    }

    try{
        const candidate = await Candidate.findById(candidateId)
        if(!candidate){
            return res.status(404).json({message: "Candidate not found"})
        }
        if(name) candidate.name = name
        if(level) candidate.level = level


        
         if (req.file) {
         if (candidate.photo) {
        const oldPhotoPath = path.join(candidate.photo);
        fs.unlink(oldPhotoPath, (err) => {
          if (err) console.error("Failed to delete old photo:", err);
        });
      }
      candidate.photo = req.file.path;
    }

        await candidate.save()
        res.status(200).json({message: "Candidate updated Successfully", candidate})
    }catch(error){
        res.status(500).json({message: error.message})
    }
}