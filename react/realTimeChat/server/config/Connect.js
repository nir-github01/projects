import mongoose from "mongoose";

const connectDB = async()=>{
    try{
      let MONGODB_URL = 'mongodb://127.0.0.1:27017/userdetails';
      await mongoose.connect(MONGODB_URL)
      console.log("Database Connected successfully")
    }catch(error) {
      console.log(error)
    }
}

export default connectDB;