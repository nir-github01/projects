import conversationsModel from "../model/conversationModels.js";
import messageModel from "../model/messageModel.js";



export default class videoChatControllers {
   static userConversations = async(req, res)=> {
     try{
         const {senderId, recieverId, members} = req.body;
         let newChats = await conversationsModel({
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
        let newMessages = await messageModel({consversationId, messages, senderId, recieverId})
            let mesagesData = await newMessages.save();
            console.log("messagesData  >>> ", mesagesData);
      }catch(error){
      console.log(error)
    }
   }
   static getUserMessages = async(req, res) => {
      try{
        let conversationId;
        let getMessages = await conversationsModel.findById(conversationId);
      }catch(error){
        console.log(error);
      }     
   }

}