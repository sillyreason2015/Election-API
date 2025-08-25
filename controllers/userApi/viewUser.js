import User from "../../schema/userSchema.js";

export const viewUser = async (req, res) => {
    const {id} = req.params
    const {_id, isAdmin} = req.user

    const user = await User.findById(id)

    if(!user){
        return res.status(400).json({message: "This user does not exist"})
    }
    try{
        if(_id.toString() !== id && !isAdmin){
            return res.status(400).json({message: "You are not authorized to carry ou this action"})
        }
        await User.findById(id)
        res.status(200).json(user)
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}


export const viewUsers = async (req, res) => {
    const {isAdmin} = req.user

    if(!isAdmin){
        return res.status(400).json({message: "You are not authorized to carry out this action" })
    }

    try{
        const users = await User.find()
        res.status(200).json(users)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}