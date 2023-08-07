import express from 'express';
import realChatController from '../controllers/realChatController.js';

const router = express.Router();


router.post('/register', realChatController.userRegistartion);
router.post ('/login', realChatController.userLogIn);
router.get('/get', (req, res) => {
  res.send('get method')
})
router.get('/usersdetails', realChatController.userDetails);


export default router;