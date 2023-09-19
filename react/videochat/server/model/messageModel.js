import mongoose from "mongoose";

let messageSchema = new mongoose.Schema({
      consversationId:{type:String, require: true},
      senderId:{type:String, require: true},
      recieverId: {type: String, require:true},
      messages:{type:String, require:true},
})
let messageModel = mongoose.model("messageModel", messageSchema);

export default messageModel;