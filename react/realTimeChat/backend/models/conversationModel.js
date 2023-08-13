import mongoose from "mongoose";


let conversationSchema = new mongoose.Schema({
    members:{
      type:Array,
      required:true
    },
    senderId:{
      type:String,
    },
    recieverId:{
      type:String,
    }
},   {timestamps:true},);

let ConvoModel = mongoose.model('userConvo', conversationSchema);

export default ConvoModel;