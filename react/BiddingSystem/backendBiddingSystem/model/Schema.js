const mongoose = require("mongoose");

let UserFormDataSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required :[true, 'First Name is required'],
    },
    lastName:{
        type:String,
        required :[true, 'Last Name is required'],
    },
    email:{
        type:String,
        required :[true, 'Fill your email-Id'],
    },
    password:{
        type:String,
        required :[true, 'Fill your password'],
    },
    confirmPassword:{
        type:String,
        required :[true, 'Fill your confirm password'],
    },
    phone:{
        type:Number,
        required :[true, 'Fill your phone'],
    },
    dateOfBirth:{
        type:Date,
        required :[true, 'Date of Birth is required'],
    },
    current_address:{
        type:String,
        required :[true, 'Current Address is required'],
    },
    currState:{
        type:String,
        required :[true, 'Select state'],
    },
    current_pincode:{
        type:Number,
        required :[true, 'Pincode is required'],
    },
    Permanent_address:{
        type:String,
        required :[true, 'Permannent address is required'],
    },
    permanent_pincode:{
        type:Number,
        required :[true, 'Permanent address is required'],
    },
    profession:{
        type:String,
        required :[true, 'Select your profession'],
    },
    documents:{
        type:[String],
        required :[true, 'Select your documents'],
    },
    
    sipmentAmt:{
        type:Number,
        required :[true, 'Sipment Amount is required'],
    },
    tradingType:{
        type:[String],
        required :[true, 'Choose trading type'],
    },
    gender:{
        type:String,
        required :[true, 'Select Gender'],
    },
    sipmentYear:{
        type:String,
        required :[true, 'select sipment year'],
    },
    cities:{
        type:[String],
        required :[true, 'Select at least one city'],
    }, 
    investmentType:{
        type:String,
        required :[true, 'Select Investment type'],
    },
    selectedFile: {
        documentsUpload:{
             type: Buffer, required:true 
            },
        filename: { type: String,  },
        mimetype: { type: String,  },

      },
      createdDate:{
        type:Date,
        default: Date.now() ,
      }

 
});

const userDetail =mongoose.model("userDetail", UserFormDataSchema);

module.exports = userDetail;

