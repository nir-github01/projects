const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const AdoptPetData = require("./model/Schemamodel");
const giveAway = require("./Routerapp");
const userFormget = require("./UserRouter");



// try {
//     await mongoose.connect('mongodb://127.0.0.1:27017/adoptpetdata');
//     console.log ("db connected successfully");
// } catch (error) {
//     console.log(error);
//     handleError(error);
//   }

  main().catch(err => console.log(err));
  async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/adoptpetdata");
  console.log("Databse connected")  
}

app.use(cors());
app.use(bodyParser.json())
app.post("/adoptdata", async(req, res) =>{
    let adoptdata = new AdoptPetData();
    adoptdata.PetType =req.body.PetType,
    adoptdata.BreedType = req.body.BreedType,
    adoptdata.FirstName = req.body.FirstName,
    adoptdata.LastName = req.body.LastName,
    adoptdata.Email = req.body.Email,
    adoptdata.Phone = req.body.Phone,
    adoptdata.Password = req.body.Password

    let adoption = await adoptdata.save();
//  console.log(req.body)
    res.json(adoption)
});

app.get("/adoptdata", async(req, res) => {

    let adoptiondatas = await AdoptPetData.find({});
      res.send(adoptiondatas);
});

app.get("/adopt/v1/:id", async(req, res) => {
   
  let ids = req.params.id;
  let adoptiondatas = await AdoptPetData.findById(ids);
    res.send(adoptiondatas + " " + ids);
});

app.patch("/adoptpets/update/:id", async(req, res) => {

    let updateData = await AdoptPetData.findOneAndUpdate();
    let breedtype = req.params.BreedType;
         console.log(breedtype)
    res.status(200).send(updateData + breedtype);
})

app.put("/adoptpets/update/:id", async(req, res, next) => {
    
  let ids = req.params.id;
  let findnupdate = await AdoptPetData.findByIdAndUpdate( ids, {$set:{
    BreedType:req.body.BreedType,
    PetType : req.body.PetType,
    FirstName:req.body.FirstName,
    LastName:req.body.LastName,
    Phone:req.body.Phone,
    Email:req.body.Email,
    Password:req.body.Password

  }} 
  )
  res.send(`put method called ${findnupdate}` );
});

app.listen(port, async(req, res)=>{
     console.log(`Server is running on this ${port}`)
});




