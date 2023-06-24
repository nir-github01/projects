const mongoose = require('mongoose');

const ReactFormDataSchema = new mongoose.Schema({
    pettype:{
        type:String,
        required:true
    },
    breedtype:{
        type:String,
        required:true
    },
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:Email,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    password:{
        type:Password,

    }

})

const PetData = mongoose.model('PetData', ReactFormDataSchema);
module.exports = PetData;