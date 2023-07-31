import mongoose from "mongoose";


 const connectDB = async(DATABASE_URL) => {
  
  try{
     const DB_OPTIONS = {
      dbName: "userauth"
     }
     await mongoose.connect(DATABASE_URL, DB_OPTIONS)
      console.log("database connected sucessfiully");
    }catch(error){
          console.log(error);
  }
}

export default connectDB;