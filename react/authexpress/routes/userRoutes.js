import express from "express";
const  router = express.Router();

import userController from "../controllers/userController.js";
import checkUserAuth from "../middleware/middlewareAuthentication.js";


//Route level middleware

router.use('/cp',  checkUserAuth)
router.use("/loggeduser",  checkUserAuth);

//Public routes 
router.get('/check', (req, res, next) => {
  res.send("user register checking");
  next();
})

router.post('/register', userController.userRegistration);
 router.post('/login', userController.userLogin);
 router.post('/emailpwdreset', userController.emailPasswordReset);
 router.post("/resetpwd/:id/:token", userController.userPasswordReset)
 //Protected User

 router.post("/cp", userController.changePassword);
 router.get("/loggeduser", userController.loggedUser)



 export default router;