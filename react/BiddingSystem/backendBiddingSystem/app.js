import express from "express";
import {config} from "dotenv";
import paymentrouter from "./routes/paymentRoute.js";
import userRouter from "./routes/ServerRoute.js";

import cors from "cors";

config({path : "./config/config.env"});

export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api', paymentrouter);
app.use('/rout', userRouter);

app.get("/api/getKey", (req, res) => {
  res.status(200).json({key : process.env.RAZORPAY_API_KEY})
})

