const express = require("express");
const server = express();
let routing = require("./routes/ServerRoute");
const cors = require("cors");
const bodyParser = require("body-parser");


//database 
 require("./db/Connect");

 server.use('/routing',routing);
//  server.use(express.static(path.join(__dirname, 'public')));

 server.use(cors());
 server.use(bodyParser.json());
 server.use(bodyParser.urlencoded({ extended: false }));

//Server start
const port = process.env.PORT || 4000;
server.listen(port, (req, res) =>{
    console.timeLog("server is running on this port" + port)
})