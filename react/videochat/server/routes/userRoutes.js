import express from "express";
import usersController from "../controllers/userController.js";
const router = express.Router();

router.get('/user', async(req, res) => {
     res.send("get User")
})
router.post('/api/user/signUp', usersController.userRegistration);
router.post('/api/user/signin', usersController.userSignIn);

router.get('/test/user/', usersController.testController);

export default router;