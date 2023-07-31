import UserModel from "../models/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


class userController {
  static userRegistration = async(req, res, next)=>{
    const {name, email, password, password_confirmation , tc}  = req.body;
 
    const user = await UserModel .findOne({email:email})
       if(user) {
        res.send({"status": "failed", "message": "email already exist" })
       }else{
        if(name && email && password && password_confirmation && tc){
                   
          if(password === password_confirmation){
             try{
              const salt = await bcrypt.genSalt(10)
              const hashPassword = await bcrypt.hash(password, salt);
            const doc = new UserModel({
              name:name,
              email:email,
              password:hashPassword,
              tc:tc
            })

            let userdata = await doc.save();
            let savedUser = await UserModel.findOne({email:email});
            
            //Generate jWT token
             const jwtsecret = process.env.JWT_SECRET_KEY
            const token = jwt.sign({"userId": savedUser._id}, jwtsecret, {expiresIn:'5d'})
            console.log(userdata);
            res.send({
              "status":200,
              "message":"Registration successfully",
              "token": token,
              userdata
            })
          }catch(error){
            console.log(error);
          }
          }else{
            res.send({"status": "failed", "message": "password and confirm password dosenot match" })
          }
        }else{
          res.send({"status": "failed", "message": "All  fields are required" })
        }
       }
  } 

  static retriveUsers = async(req, res, next) => {
    const users =await UserModel.find();
    res.json({
      status: 200,
      message:"User data retrived ",
      users
    })
    next();
  }

  static userLogin = async(req, res, next) => {
    try{
    const {email, password} = req.body;
    if(email && password) {
    const user = await UserModel.findOne({email:email});
    
    if(user === null){
      res.send({
        "status": "failed",
        message:"User is not registerd",
      })
    }else{
         let isMatch = await bcrypt.compare(password, user.password);
         

         if((user.email === email) && isMatch){
             res.status(200).send({
              "status":"success",
              "message":"User login Successfully",
             })
         }else{
          res.send({
            "status":"failed",
            "message":"Either email or password dosen't match",
          })
         }
    }

    }else{
      res.send({
        "status":"failed",
        "message":"email or password field required",
      })
    }
  
  }catch(error) {
    console.log(error);
  }
    
  }
}

export default userController;