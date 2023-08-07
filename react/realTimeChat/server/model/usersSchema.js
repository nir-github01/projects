import mongoose from 'mongoose';


const usersSchema = new mongoose.Schema({
  fullName:{type:String, required:true},
  phone:{type:Number, required:true, unique:true},
  email:{type:String, required:true, unique:true},
  password:{type:String, required:true},
  password_confirmation:{type:String},
  tc:{type:Boolean, required:true}
})

const Users = mongoose.model("user", usersSchema);

export default Users;