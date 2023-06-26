const mongoose = require("mongoose");

const UserShema = new mongoose.Schema({

    firstName:{
        type:String,
    },
    lastName:{
        type:String,
    },
    Phone:{
        type:String,
    },
    Email:{
        type:String,
    },
    Password:{
        type:String,

    },
    genders:{
        type:String,
    },
    Profession:{
        type:String,
    },
    cities:{
        type:[String],
    }
    
})

const userData= mongoose.model("userData", UserShema);

module.exports = userData;