import dotenv from "dotenv";
dotenv.config();
import express  from "express";
import cors from 'cors';

import connectDB from './config/dbconnect.js';
import userRouters  from './routes/userRoutes.js'

const app = express();
const port = process.env.PORT;
const database_url = process.env.DATABASE_URL;



//corde policy
app.use(cors());

//Database 
connectDB(database_url);

//JSON 
app.use(express.json())

//Load Routes

 app.use('/api/user', userRouters);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port} `);
})