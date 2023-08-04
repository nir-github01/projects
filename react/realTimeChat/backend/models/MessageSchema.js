import mongoose from "mongoose";


let messageSchema = new mongoose.Schema({
      conversationId:{
        type:String
      },
      sender:{
        type:String,
      },
      text:{
        type:String,
      },
}, {timestamps:true});

let userMsgModel = mongoose.model('userMsgs', messageSchema);

export default userMsgModel;