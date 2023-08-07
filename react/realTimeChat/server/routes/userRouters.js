import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Users from '../model/usersSchema.js';
import bcryptjs from 'bcryptjs';

const router = express.Router();

router.get('/get', async(req, res) => {

  let users = await Users.find();
  res.status(200).json({
    "status":"success",
    "message":"messages get from users",
    "users":users
  })
})

router.post("/register", async(req, res, next) => {
    try{
      const {fullName, phone, email, password, password_confirmation, tc} = req.body;

      if(fullName && phone && email && password && password_confirmation && tc){
         let isUser =await Users.findOne({email:email});
         if(isUser){
              res.json({
                "status":"failed",
                "message":"User already exist",
              })
         }else{
          if(password === password_confirmation){
            // let salt =await bcrypt.genSalt(10);
            // let hashPassword =await bcrypt.hash(password, salt)
               let newUser = await Users({fullName, phone, email, tc });
               bcryptjs.hash(password, 10, async(err, hashPassword) =>{
                try{
                   await newUser.set('password', hashPassword);
                   await newUser.save()
                   next();
                }catch(error){
                  console.log(error)
                }
               })
                     //  let saveUser = await newUser.save();
                     let payLoad = {
                      userId:saveUser._id,
                      email:email
                     }
                    //  let JWT_SECRET_KEY ="This_is_test_jwt_secret_key";
                    //  jwt.sign(payLoad, JWT_SECRET_KEY, {expiresIn:Math.floor(Date.now() / 1000) + (60 * 60)},
                    //  async(error, token)=>{
                    //   if(token){
                    //      try{

                    //       await newUser.set('token', token);
                    //       await newUser.save()
                    //       next();
                    //      }catch(error){
                    //       res.status(400).json({
                    //         "status":"failed",
                    //         "message":"something went wrong in token",
                    //         error:error
                    //       })
                    //      }
                    //     }else{
                    //       res.status(400).json({
                    //         "status":"failed",
                    //         "message":"something went wrong in token",
                    //         error:error
                    //       })
                    //     }
                    //  })
               return res.status(201).json({
                "status":"success",
                "message":"User created successfully",
               })
        
               
          }else{
             res.status(400).json({
              "status":"failed",
              "message":"Password and password confirmation dosen't match",
             })
          }
         }

      }else{
        res.status(400).json({
          "status":"failed",
          "message":"All fields are requireds, fill"
        })
      }
   }catch(error){
    res.status(400).send({
      "status":"failed",
      "message":"Something went wrong",
      "error":error
    })
   }
})

router.post ('/login', async(req, res, next)=> {
  try{
    const {email, password} = req.body;
    if(email && password) {
        
      const checkUser = await Users.findOne({email:email});
      if(checkUser){
            let validPassword = await bcryptjs.compare(password, checkUser.password);
            if(validPassword){

              let payLoad = {
                user_id:checkUser._id,
                email:checkUser.email
              }
              let JWT_SECRET_KEY = "This_is_secret_key";
              let expireTime = {
                expiresIn:Math.floor(Date.now()/1000) + (60 * 60)
              }
              jwt.sign(payLoad, JWT_SECRET_KEY, expireTime, async(error, token) => {
                  
                   await Users.updateOne({userId:checkUser._id}, {$set:{token}})
                  checkUser.save();
                  
                  next();
          
              })
              return res.status(200).json({
                "status":"success",
                "message":"User login successfully",
                user:checkUser
              })
            } else{
              res.status(400).json({
                "status":"failed",
                "message":"Email or password not correct",
              })
            }
      }else{
        res.status(400).json({
          "status":"failed",
          "message":"User dosenot exist",        
        })
      }
    }else{
      res.status(400).json({
        "status":"failed",
        "message":"All field requireds"
      })
    }

  }catch(error){
    res.status(400).json({
      "status":"failed",
      "message":"Something went wrong",
    })
  }
})

export default router;