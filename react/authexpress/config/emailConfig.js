import dotenv from "dotenv";
dotenv.config();
import nodemailer from 'nodemailer';
let host = process.env.EMAIL_HOST;
let eport = process.env.EMAIL_PORT;
let useremail = process.env.EMAIL_USER;
let emailpassword = process.env.EMAIL_PASSWORD;

let transporter = nodemailer.createTransport({
  host: host,
  port:eport,
  secure: false,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: useremail,
    pass:emailpassword,
  }
});

export default transporter;