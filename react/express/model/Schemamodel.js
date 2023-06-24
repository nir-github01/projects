// const express = require("express");
const mongoose = require('mongoose');

const AdoptionPetDataSchema = new mongoose.Schema({
    PetType:{
        type:String,
        required:true
    },
    BreedType:{
        type:String,
        required:true
    },
    FirstName:{
        type:String,
        required:true
    },
    LastName:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Phone:{
        type:Number,
        required:true
    },
    Password:{
        type:String,

    }

})

const AdoptPetData = mongoose.model('AdoptPetData', AdoptionPetDataSchema);
module.exports = AdoptPetData;