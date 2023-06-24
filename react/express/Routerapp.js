const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const mongoose = require('mongoose');
const GiveAwaypetData= require("./model/GiveawaySchema");
const bodyParser = require('body-parser');

// main().catch(err => console.log(err));
// async function main() {
//   await mongoose.connect("mongodb://127.0.0.1:27017/giveawaypetdata");
//    console.log("Databse connected")  
// }



app.use(cors());
app.use(bodyParser.json());

app.post("/giveaway", async(req, res) =>{

    let petData = new GiveAwaypetData();
      
    petData.First_Name=req.body.First_Name,
    petData.Last_Name = req.body.Last_Name,
    petData.Phone = req.body.Phone,
    petData.Email = req.body.Email,
    petData.Pet_Type= req.body.Pet_Type,
    petData.Breed_Type = req.body.Breed_Type,
    petData.Password = req.body.Password

    let savepetData = await petData.save();

    console.log("save pet Data"+savepetData);
    res.json(savepetData)
});

app.get("/giveaway", async(req, res) => {
   let getData =await  GiveAwaypetData.find();
//    console.log(getData);
   res.send(getData)

});



app.listen(port, async(req, res) => {
    console.log(`Server is running on this ${port}`);
})
