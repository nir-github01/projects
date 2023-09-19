import  express from "express";
import videoChatControllers from "../controllers/chatingControllers.js";

let chatrouter = express.Router();

chatrouter.post("/api/user/conversation", videoChatControllers.userConversations);
chatrouter.post("/api/user/messages", videoChatControllers.usersMessages);


export default chatrouter;