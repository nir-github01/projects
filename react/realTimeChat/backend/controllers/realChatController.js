import usersModel from '../models/userModels.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import ConvoModel from '../models/conversationModel.js';
import usersMessages from '../models/MessageSchema.js';



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
    
    const {email, currentPassword} = req.body;
    if(email && currentPassword){
      try{     
      let checkUser = await usersModel.findOne({email:email});
      if(checkUser){
       const validPassword = await bcrypt.compare(currentPassword, checkUser.password);
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
              user:checkUser,
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

  //Conversation 
  static userConversation = async(req, res)=> {
    try{

      const {senderId, recieverId} = req.body;
      if(senderId && recieverId){
        const conversation =new ConvoModel({members:[senderId, recieverId], senderId, recieverId})

        let convoData=await conversation.save();
      
        res.status(200).send({
          "status":"success",
          "message":"Users conversation created successfully",
          "userConvo":convoData,
        })
      }else{
        res.status(400).json({
          "status":"failed",
          "message":"sender Id  or reciever required"
        })
      }

    }catch(error){
      console.log(error);
    }
  }

  static oldConversation = async(req, res)=>{
      try{
          const userId = req.params.userId;

          const Conversations = await ConvoModel.find({ members : { $in: [userId]}})
            let conversationUsers =Promise.all(Conversations.map(async(conversation)=> {
              let recieverId =await conversation.members.find((member) => member !== userId)
                  let user = await usersModel.findById(recieverId)
                  return {user:{_id:user._id, fullName:user.fullName, email:user.email, phone:user.phone}, conversationId:conversation._id};
            }))
            res.status(200).send({
              "status":"success",
              "message":"Old conversation  users",
              "users":await conversationUsers,
            })
      }catch(error){
        console.log(error)
      }
      

  }

  static usersMessages = async(req, res)=>{
      try{
         const {conversationId, senderId, message} = req.body;
         if(!senderId || !message) res.status(200).json([]);

         if(!conversationId && recieverId){
           const newConversation = new ConvoModel({members:[senderId, recieverId]});
                await newConversation.save();
            const newMessages =new usersMessages({conversationId:newConversation._id, senderId, message});
            const messageData = await newMessages.save();
            res.status(200).json({
              "status":"success",
              "message":"users message send successfully",
              "messageData":messageData
            })
        }else{
          res.json({
            "status":"failed",
            "message":"all field required"
          })
        }
      }catch(error){
        console.log(error)
      }
  }

  static getConversation = async(req, res)=>{
    try{
      const conversationId =req.params.conversationId;

      const messages = await usersMessages.find({conversationId});
       const userMessageData =Promise.all(messages.map(async(message) => {
            const senderId = message.senderId;
            const user =await usersModel.findById(senderId);
            const messagesData = { 
                       user:{
                        fullName:user.fullName,
                        email:user.email,
                        phone:user.phone
                      },
                        messages:messages.message
                      }
            return messagesData;
      }))
      res.status(200).send({
        "status":"success",
        "message":"successfully",
        "conversation":messages,
        "userMessagesdata":await userMessageData
      })
    }catch(error){
      console.log(error)
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