const express=require("express");
const router = express.Router();
const userDetail = require("../model/Schema");


router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
  })
router.get("/get", async(req, res, next) => {
    res.status(200).send("Get method is called");
});

router.post("/server/post", async(req, res, next)=> {

    const {firstName, lastName, email, phone, password,
        confirmPassword, dateOfBirth, current_address, currState, 
        current_pincode, Permanent_address, permanent_state, 
       permanent_pincode, profession, documents, sipmentAmt,
        tradingType, gender, sipmentYear, cities, investmentType, selectedFile } = req.body;

    let user=new userDetail();

    user.firstName=firstName; user.lastName=lastName; user.email =email; user.phone = phone;
    user.password=password; user.confirmPassword=confirmPassword;user.dateOfBirth=dateOfBirth;
    user.current_address=current_address;user,currState=currState;user.current_pincode=current_pincode;
    user.Permanent_address=Permanent_address;user.permanent_state=permanent_state;user.permanent_pincode=permanent_pincode;
    user.profession=profession;user.documents=documents;user.sipmentAmt=sipmentAmt;user.tradingType=tradingType;
    user.investmentType=investmentType; user.gender=gender;user.sipmentYear=sipmentYear;user.cities=cities;user.selectedFile=selectedFile;

    let saveUser = await user.save();
    console.log(saveUser);
    res.status(200).send(saveUser);     
})


module.exports = router;