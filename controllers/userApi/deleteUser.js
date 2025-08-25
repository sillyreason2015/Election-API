import User from '../../schema/userSchema.js'


export const deleteUser = async (req,res) => {
    const {id} = req.params
    const {_id, isAdmin} = req.user

    const user = await User.findById(id)
    if(!user){
        return res.status(404).json({message: "This user does not exist."})
    }

    try{
        if(_id.toString() !== id && !isAdmin ){
            return res.status(400).json({message: "You are not authorized to carry out this action"})
        }
        await User.findByIdAndDelete(id)
        res.status(200).json({message: "User deleted Successfully"})
    }catch(error){
        res.status(500).json({message: error.message})
    }
}