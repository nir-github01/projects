import express from 'express';
import realChatController from '../controllers/realChatController.js';

const router = express.Router();


router.post('/register', realChatController.userRegistartion);
router.post ('/login', realChatController.userLogIn);


export default router;