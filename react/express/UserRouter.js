const express = require("express");
const userRouter = express();
const bodyParser = require('body-parser');
const cors = require("cors");
const port =process.env.PORT || 8000;
const userData = require("./model/UserShema");

userRouter.use(bodyParser.json());
userRouter.use(cors());

userRouter.get("/user", async(req, res) =>{
  let getUsers =await userData.find({});
  console.log(getUsers);
  res.send(getUsers);
})

userRouter.post("/user", async(req, res) =>{

    let users = new userData();
    users.firstName = req.body.firstName;
    users.lastName = req.body.lastName;
    users.Email = req.body.Email;
    users.Phone = req.body.Phone;
    users.Password = req.body.Password;
    users.Profession = req.body.Profession;
    users.genders = req.body.genders;
    users.cities = req.body.cities;

    let saveuserData = await users.save();
    console.log(saveuserData);
    
    res.json(saveuserData);
})

userRouter.listen(port, async(req, res) => {
    console.log(`Server is running on this ${port}`);
});