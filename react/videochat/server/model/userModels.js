import mongoose from "mongoose";

let  usersignUpSchema =new  mongoose.Schema({
         
  firstName :{type:String, require:true},
  lastName :{type:String, require:true},
  phone  : {type:String, require:true},
  email : {type: String, require: true},
  new_password: {type:String, require:true},
  confirmPassword:{type:String, require:true},
  file:{type:Buffer},

},{timestamps:true});

const usersModel = mongoose.model("usersModel", usersignUpSchema);

export default usersModel;

