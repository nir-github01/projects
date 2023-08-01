import jwt from "jsonwebtoken";
import UserModel from "../models/userSchema.js";
import dotenv from "dotenv";
dotenv.config();
let JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

var checkUserAuth = async( req, res, next) => {
  const {authorization} = req.headers;
  // console.log("authorization" +" " + authorization)
  let token;
        if(authorization && authorization.startsWith('Bearer')){
 
           token = authorization.split(' ')[1];   
          try{
            // console.log("Token" +" " + token)
                  //verify token
                  const { userId } =  await  jwt.verify( token ,  JWT_SECRET_KEY );
                  //Get user from token
                  req.user = await UserModel.findById(userId).select("-password");

                  next();
                  }catch(error){
                console.log(error);
                res.status(403).send({
                  "status":"failed",
                  "message":"Unauthorized User",
                  "error":error 
                })
              }
  }
 if(!token) {
      res.status(401).send({
        "status": "failed",
        "message":"Token not found unauthorized user",
      })
    }
}

export default checkUserAuth;