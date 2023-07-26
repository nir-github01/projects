const  express = require("express");
const app = express();
const  db = require("./db/Connect.js");
require('dotenv').config();
const router = require("./route/ServerRoute.js");
const port = process.env.PORT;


app.listen(port, (req, res) => {
  console.log(`server is running on this port : ${port}`);
})
