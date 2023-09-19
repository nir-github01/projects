import mongoose from "mongoose";

let groupSchema = new mongoose.Schema({
  groupName: {type:String, require: true},
  members:{type:[], require:true},
  messages:{type:String, require:true},
})
let groupModel = mongoose.model("groupModel", groupSchema);

export default groupModel;