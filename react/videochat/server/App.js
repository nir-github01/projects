import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import { config, configDotenv } from "dotenv";
configDotenv('.env');
import connectMongoDb from "./db/Connectdb.js";
import router from './routes/userRoutes.js';
import chatrouter from "./routes/videoChatRouter.js";
const app = express();
const MONGODB_URL = process.env.MONGODB_URL;
 //Data Base 
 
connectMongoDb(MONGODB_URL);
 //Middlewares
app.use(cors());
app.use(express.json())

//Routers
app.use('/', router);
app.use('/', router);
app.use('/get', router);
app.use('test', router);

//Chat Routers 
app.use('/', chatrouter);
app.use('/', chatrouter);

let port = process.env.SERVER_PORT;

app.listen(port, (req, res)=> {
  console.log(`Server is running on this port http://localhost:${port} `);
})