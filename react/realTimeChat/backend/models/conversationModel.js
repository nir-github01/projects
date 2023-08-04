import mongoose from "mongoose";


let conversationSchema = new mongoose.Schema({
  members:{
    type:[String]
  },
},   {timestamps:true},);

let ConvoModel = mongoose.model('userConvo', conversationSchema);

export default ConvoModel;