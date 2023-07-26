const mongoose = require('mongoose');

let WorkshopSchema =new mongoose.Schema({

  name:{
    type:String,
    required:true
  },
  age:{
    type:Number,
    required:true,
  },
  email:{
    type:String,
    required:true,
  },
  password:{
    type:String,
    required:true,
  }
})

let Employee =mongoose.model('Employee', WorkshopSchema);
module.exports = Employee;