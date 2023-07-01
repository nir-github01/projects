const express = require("express");
const server = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 4000;


server.get('/', async(req, res, next) => {

    console.timeLog("get method called")
    res.status(200).send("get method called")
})

server.listen(port, (req, res) =>{
    console.timeLog("server is running on this port" + port)
})