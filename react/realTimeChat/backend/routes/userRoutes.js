import express from 'express';
import realChatController from '../controllers/realChatController.js';

const router = express.Router();


router.post('/register', realChatController.userRegistartion);
router.post ('/login', realChatController.userLogIn);

router.post('/conversation', realChatController.userConversation);
router.post('/message', realChatController.usersMessages);

router.get('/usersdetails', realChatController.userDetails);
router.get('/conversation/:userId', realChatController.oldConversation);
router.get('/message/:conversationId', realChatController.getConversation)

export default router;