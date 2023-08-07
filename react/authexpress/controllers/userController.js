import UserModel from "../models/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import transporter from "../config/emailConfig.js";


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
            next()
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


  //User Login Controller

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
          //Generate Token 

          const jwtsecret = process.env.JWT_SECRET_KEY
          const token = jwt.sign({"userId": user._id}, jwtsecret, {expiresIn:'5d'})
             res.status(200).send({
              "status":"success",
              "message":"User login Successfully",
              "token":token
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

  //Chage Password 

  static changePassword = async(req, res) => {

    const { password, password_confirmation} = req.body;

    if(password && password_confirmation){
        
      try{
            if(password  === password_confirmation){
              //req.user getting from middleware authentication page
         let userId = req.user._id
            let salt = await bcrypt.genSalt(10);
            let newHasPassword = await bcrypt.hash(password, salt);

             let updatePassword = await UserModel.findByIdAndUpdate(userId, {$set: {password:newHasPassword}})
      
            res.status(201).send({
                "status": "success",
                "message":"Password changed successfully",
              })

            } else{
                res.status(402).send({
                  "status":"failed",
                  "message":"password and confim password dosen't match",
                })
            } 
        }catch(error){
          console.log(error)
            res.status(401).send ({
              "status": "failed",
              "message":"something gonna wrong"
            })
        }
    }else{
        res.status(400).send({
          "status": "failed",
          "message": "All fields are required",
        })
    }
  }

  static loggedUser = async(req, res) => {
    res.send({
      "user":req.user
    })
  }

  static emailPasswordReset = async(req, res) => {
    try{
      let { email } = req.body;
      let user = await UserModel.findOne({email:email});
   
      if( user){
        const secret = user._id + process.env.JWT_SECRET_KEY;

                const token = await jwt.sign({userId:user._id}, secret, {
                  expiresIn:'15m'
                })
                const link = `http://127.0.0.1:3000/api/user/reset/${user._id}/${token}`
                
                console.log("Link" + " "+ link)
                
                 let info  = await transporter.sendMail({
                  from: process.env.EMAIL_FROM,
                  to:user.email,
                  subject:"password reset",
                  html: `<a href= ${link} > click here to reset your password</a>`
                 })
                 console.log("info" + info)
                res.send({
                  "status":"success",
                  "messege": "password reset link sent to email",
                  email:info
                })
              }else{
        res.send({
          "status":"failed",
          "message":"correct email required"
        })
      }

    }catch(error){
      console.log(error);
      res.status(400).send({
        "status":"failed",
        "message":"something went incorrect check email field",
        "error":error
      })
    }
  }

  static userPasswordReset = async(req, res) => {
    const {password, password_confirmation} = req.body;
    const {id, token} = req.params;
    const user = await UserModel.findById(id);
    const new_secret = user._id + process.env.JWT_SECRET_KEY;

    try{
      let tokenverify = await jwt.verify(token,new_secret )

      if(password && password_confirmation){
            if(password === password_confirmation){
              let salt = await bcrypt.genSalt(10);
              let resetnewpwd = await bcrypt.hash(password, salt);

              let updatePassword = await UserModel.findByIdAndUpdate(user._id, {$set:{password:resetnewpwd}});
              res.send({
                "status":"success",
                "message":"Password reset successfully ",
                updatePassword
              })
            }else{
              res.send({
                "status":"failed",
                "message":"password and password confirm dosen't match"
              })
            }

      }else{
        res.send({
          "status":"failed",
          "message":"all field required"
        })
      }
    }catch(error) {
      console.log(error);
      res.send({
        "status":"failed",
        "message": "something went wrong"
      })
    }
  }
}

export default userController;