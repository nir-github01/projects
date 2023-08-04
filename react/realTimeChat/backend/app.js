import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB  from './config/dbconnection.js';
import cors from 'cors';
// import bodyParser from 'body-parser';

import signupRoutes from './routes/userRoutes.js';
import socketConnection from './config/webSocket.js';

const app = express();
const port = process.env.PORT;
const mongodburl = process.env.MONGODB_URL;

//database connection 
 connectDB(mongodburl);

 //cors 
 app.use(cors());
 
 //json 
 app.use(express.json({extended:false}))

 //Body parser

//  app.use(express.json(bodyParser));

 /**Router */
app.use('/api/user', signupRoutes);
 socketConnection();
 

app.listen(port , (req, res) => {
   console.log(`server is running on this http://localhost:${port}`)
})