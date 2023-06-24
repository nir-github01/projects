const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');
const app = express();
const PORT = require("../src/config/.env")



const PetData = require('../models/Schema');

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/adoptpetdata', {useUrlParser :true});

app.post("insert", async(req, res) => {
    const Fname = req.body.fname
    const Lname = req.body.lname
    const PetType = req.body.pettype
    const BreedTpe = req.body.breed
    const Phone  = req.body.Phone
    const Email = req.body.email
    const Password = req.body.Password

    const formData = new PetData ({
        fname:Fname,
        lname:Lname,
        pettype:PetType,
        breedtype:BreedTpe,
        phone:Phone,
        email:Email,
        password:Password           
    })

    try{
        await formData.save();
        res.send("insert data...")
    }catch(err){
        console(err)
    }
});
const port =PORT || 4000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
