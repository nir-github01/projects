import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  name:{type:String, required:true},
  email:{type:String, required:true, unique:true},
  phone:{type:String, required:true, unique:true},
  password:{type:String, required:true},
  // password_confirmation:{type:String, required:true},
  tc:{type:Boolean, required:true}

}, {timestamps:true})

let usersModel = mongoose.model('users', usersSchema);

export default usersModel;