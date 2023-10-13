import groupModel from "../model/GroupModel.js";
import conversationsModel from "../model/conversationModels.js";
import messageModel from "../model/messageModel.js";



export default class videoChatControllers {
   static userConversations = async(req, res)=> {
     try{
         const {senderId, recieverId, members} = req.body;
         let newChats = new conversationsModel({
          members, senderId, recieverId
         })
         let chatData = await newChats.save();
        console.log(" chatdata >>>  ", chatData);
     }catch(error){
      console.log(error);
     }
   }

   static usersMessages = async(req, res) => {
    try{
        const {consversationId, messages, senderId, recieverId} = req.body;
        let newMessages = new messageModel({consversationId, messages, senderId, recieverId})
            let mesagesData = await newMessages.save();
            console.log("messagesData  >>> ", mesagesData);
      }catch(error){
      console.log(error)
    }
   }
   static getUserMessages = async(req, res) => {
      try{
        let conversationId = req.params;
        let getMessages = await conversationsModel.findById(conversationId);
      }catch(error){
        console.log(error);
      }     
   }

   static usersGroup =async(req, res) => {
    try{
      let newGroup = new groupModel({groupName,members, messages })
        let groupDetails = await newGroup.save();
        res.send({
          status:"success",
          "messages":"new Group Created"
        })
    }catch(error){
      console.log("userGroups errors >>>  ", error)
    }
   }

}