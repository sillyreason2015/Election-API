import Candidate from "../../schema/candidateSchema.js";

export const updateCandidate = async (req, res) => {
    const {id} = req.params
    const {name, department} = req.body
    const {isAdmin} = req.user

    if(!isAdmin){
        return res.status(400).json({message: "You are not authorized to carry out this action "})
    }

    try{
        const candidate = await Candidate.findById(id)
        if(!candidate){
            return res.status(404).json({message: "Candidate not found"})
        }
        if(name) candidate.name = name
        if(department) candidate.department = department


          // Handle photo replacement
         if (req.file) {
      // Delete old photo if exists
         if (candidate.photo) {
        const oldPhotoPath = path.join(candidate.photo);
        fs.unlink(oldPhotoPath, (err) => {
          if (err) console.error("Failed to delete old photo:", err);
        });
      }
      // Set new photo path
      candidate.photo = req.file.path;
    }

        await Candidate.save()
        
        res.status(200).json({message: "Candidate updated Successfully", candidate})
    }catch(error){
        res.status(500).json({message: error.message})
    }
}