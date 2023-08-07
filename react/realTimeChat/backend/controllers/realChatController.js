import usersModel from '../models/userModels.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';



class realChatController {

  //User Registration 

  static userRegistartion = async (req, res) => {
    const {fullName, email, phone, password, password_confirmation, tc} = req.body;
    if(fullName && email && phone && password && password_confirmation, tc){
        let checkExistUser = await usersModel.findOne({email:email})
        if(checkExistUser){
           res.send({
            "status":"failed",
            "message":"User already exist,  visit login page"
           })
        }else{
              if(password === password_confirmation){
                     let salt = await bcrypt.genSalt(10);
                     let hashPassword = await bcrypt.hash(password, salt);
                      let registerUser = new usersModel({
                        fullName:fullName,
                        email:email,
                        phone:phone,
                        password:hashPassword,
                        tc:tc
                      })
                try{
                    let userDetails = await registerUser.save();
                    let registeredUser =await usersModel.findOne({email:email});

                    let secretKey = process.env.JWT_SECRET_KEY;
                    let payLoad = {
                      userId:registeredUser._id,
                      email:email
                    }
                    let token = jwt.sign(payLoad, secretKey, {expiresIn:'1d'});
                    console.log(userDetails)
                    res.status(201).send({
                      "status":"success",
                      "messege":"User registered successfully",
                      token:token,
                      userDetails:userDetails
                    })
                }catch(error){
                  res.send({
                    "status":"failed",
                    "messege":"Something went wrong ",
                    "error":error
                  })
                }
              }else{
                res.send({
                  "status":"failed",
                  "messege":"password and confirm password dosenot match"
                })
              }
            }    

    }else{
      res.send({
        "status":'failed',
        "messege":'All fields are required'
      })
    }
  }

  //User LogIn

  static userLogIn = async(req, res) => {
    const {email, password} = req.body;
    if(email && password){
      try{     
      let checkUser = await usersModel.findOne({email:email});
      if(checkUser){
       const validPassword = await bcrypt.compare(password, checkUser.password);
          if(validPassword){ 
            let payLoad = {
                  userId:checkUser._id,
                  email:email,
            }

            let jwtSecretKey =process.env.JWT_SECRET_KEY;
            let token = jwt.sign(payLoad, jwtSecretKey, {expiresIn:'1d'});
            res.status(200).send({
              "status":"success",
              "message":"LogIn Successfully",
              token:token,
            })
          }else{
            res.send({
              "status":"failed",
              "message":"incorrect email or password"
            })
          }
      }else{
        res.send({
          "status":"failed",
          "message":"User not found"
        })
      }
      }catch(error){
        res.send({
          "status":"failed",
          "message":"Something went wrong...... ",
          "errorr":error
        })
      }
    }else{
         res.send({
          "status":"failed",
          "messege":"fill all field correctly",
         })    
    }
  }

  static userDetails = async(req, res) => {
       try{
            let users = await usersModel.find();
            res.send({
              "status":"success",
              "message":"User datas",
              "users":users
            })
       } catch(error){
        console.log(error);
       }
  }
}

export default realChatController;