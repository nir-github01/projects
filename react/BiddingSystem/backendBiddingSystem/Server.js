const express = require("express");
const server = express();
const cors = require("cors");

const bodyParser = require("body-parser");
const  multer = require("multer");
let router = require("./routes/ServerRoute");

let storage = multer.memoryStorage();
let upload  = multer({storage:storage});


//database 
 require("./db/Connect");

 server.use(cors());
 server.use(bodyParser.json());
 server.use(bodyParser.urlencoded({ extended: false }));

 server.use('/rout',router);
//  server.use(express.static(path.join(__dirname, 'public')));




//Server start
const port = process.env.PORT || 4000;
server.listen(port, (req, res) =>{
    console.timeLog("server is running on this port" + port )
})