import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const connectDb = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        )
        console.log("Connected to MongoDb") 
    }catch(error){
        throw error
    }
}

export default connectDb