import express from "express";
const  router = express.Router();
import userController from "../controllers/userController.js";



//Public routes 
router.get('/check', (req, res, next) => {
  res.send("user register checking");
  next();
})
//Register router 
router.post('/register', userController.userRegistration);
 router.get('/register', userController.retriveUsers);

 //Login router

 router.post('/login', userController.userLogin);



 export default router;