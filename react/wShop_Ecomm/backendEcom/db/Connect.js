const mongoose = require("mongoose");
require('dotenv').config();

const db =mongoose.connect(process.env.URL)
  db.then((res) => {
    console.log("Database connected successfully");
  }).catch((error) => {
    console.log(error);
  })