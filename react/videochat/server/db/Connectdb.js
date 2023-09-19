import mongoose from "mongoose";

let connectMongoDb =async(MONGODB_URL)=> {
  let OPTIONS = {
    "dbName":'videochatdb'
  }
await mongoose.connect(MONGODB_URL, OPTIONS).then((res)=>{
    console.log("Database connected sucessfully.......");
}).catch((error)=> {
    console.log(error)
})
}
export default connectMongoDb;