import  express  from "express";
const userRouter = express.Router();
import { userDetail } from "../model/Schema.js";
// import { users } from "../server1";


// let storage = multer.memoryStorage();
// let upload  = multer({storage:storage});


userRouter.use((req, res, next) => {
    console.log('Time: ', () =>Date.now())
    next()
  })
  userRouter.get("/get/v1", async(req, res, next) => {
       let getuserDetail =await userDetail.find({});
    res.status(200).json(getuserDetail);
});

// console.log("Selected File uploading" + upload);

userRouter.post("/server/post",  async(req, res, next)=> {

    const {firstName, lastName, email, phone, password,
        confirmPassword, dateOfBirth, current_address, currState, 
        current_pincode, Permanent_address, permanent_state, 
       permanent_pincode, profession, documents, sipmentAmt,
        tradingType, gender, sipmentYear, cities, investmentType, selectedFile, createdDate } = req.body;
     
    let user = new userDetail();
    user.firstName=firstName; user.lastName=lastName; user.email =email; user.phone = phone;
    user.password=password; user.confirmPassword=confirmPassword;user.dateOfBirth=dateOfBirth;
    user.current_address=current_address;user.currState=currState;user.current_pincode=current_pincode;
    user.Permanent_address=Permanent_address;user.permanent_state=permanent_state;user.permanent_pincode=permanent_pincode;
    user.profession=profession;user.documents=documents;user.sipmentAmt=sipmentAmt;user.tradingType=tradingType;
    user.investmentType=investmentType; user.gender=gender;user.sipmentYear=sipmentYear;user.cities=cities;user.selectedFile=selectedFile;
    user.createdDate=createdDate;
     try{
        let saveUser = await user.save();
        res.status(200).send(saveUser)
     }catch(error) {
        console.log(error)
     }

     

//    console.log("user details " + saveUser)
})

export default userRouter;

// module.exports = serverrouter;