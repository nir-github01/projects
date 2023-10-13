import  express from "express";
import videoChatControllers from "../controllers/chatingControllers.js";

let chatrouter = express.Router();

chatrouter.post("/api/chat/conversation", videoChatControllers.userConversations);
chatrouter.post("/api/chat/messages", videoChatControllers.usersMessages);
chatrouter.post("/api/chat/groups", videoChatControllers.usersGroup);


export default chatrouter;