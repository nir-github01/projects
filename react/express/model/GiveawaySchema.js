const mongoose = require("mongoose");

const GiveAwayFormDataSchema = new mongoose.Schema({
    First_Name:{
        type:String,
        required:true
    },
    Last_Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Phone:{
        type:String,
        required:true
    },
    Pet_Type:{
        type:String,
        required:true
    },
    Breed_Type:{
        type:String,
        required:true
    },
    Password:{
        type:String,

    }
})

const GiveAwaypetData = mongoose.model("giveAwaypetData", GiveAwayFormDataSchema);
module.exports =GiveAwaypetData;