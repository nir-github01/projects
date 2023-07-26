const express = require('express');
const router = express.Router();
const Employee = require("./model/Schema.js");




router.post('/create', async(req, res, next) => {
  
  let emp = new Employee();
  res.send("Server send data ");
})