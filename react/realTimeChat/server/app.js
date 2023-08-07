import express  from "express";
const app = express();

import cors from 'cors';
import bodyParser from "body-parser";

//Files 
import connectDB from "./config/Connect.js";
import userRoute from "./routes/userRouters.js";

//Database
connectDB();


app.use(cors());
app.use(express.json());
app.use(express.json({extended:false}));


app.use('/api/user', userRoute)

const port =process.env.PORT ||  4000;

app.listen(port , () => {
  console.log("Server is running successfully");
});