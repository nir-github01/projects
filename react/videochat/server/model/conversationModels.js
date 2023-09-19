import mongoose from "mongoose";

let conversationSchema = new mongoose.Schema({
      senderId:{type:String, require: true},
      recieverId:{type:String, require:true},
      members:{type:[], require:true}
});
let conversationsModel = mongoose.model("conversations", conversationSchema);

export default conversationsModel;

