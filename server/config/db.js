import "dotenv/config";
import mongoose from "mongoose";

const dbURI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/todoDB";

async function connectDB(){
    try{
        await mongoose.connect(dbURI);
        console.log("MongoDB is connected....");
    }
    catch(error){
        console.log("MongoDB Couldn't be connected for now....");
        console.log(error);
        process.exit(1);
    }
}

export default connectDB;