import { instance } from "../server1.js";

import crypto from "crypto";

// import  {Payment} from '../model/paymentModel.js';
import { parse } from "path";
  
// export const checkout = async(req, res) => {
//   console.log("Payment Id Details"+" "+req.body)
//   const options = {
//     amount :Number(req.body.amount)* 100,
//     currency : "INR",
//   };
//   try{
//   const order = await instance.orders.create(options)
//   res.status(200).json({
//     success : true,
//     order,
//   })
// }catch(err) {
//     console.log(err)
//   };


// };


export const paymentVerification = async(req, res) => {

  console.log("Payment Id Details"+" "+req.body)
  const {razorpay_order_id, razorpay_payment_id, razorpay_signature} = req.body;
  
  const body = razorpay_order_id  + " | " + razorpay_payment_id;
          console.log("Body Payment Verification" + " "+ body);
  const expectedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
            .update(body.toString())
            .digest("hex");

            const isAuthentic = expectedSignature === razorpay_signature;

            if(isAuthentic)
            {
              await Payment.create({
                razorpay_order_id,
                razorpay_payment_id,
                razorpay_signature,
              });
              res.redirect(`http://localhost:3000/paymentsuccess?refrence = ${  razorpay_payment_id}`)
            }else {
              res.status(400).json({
                success: false,
              })
            }
}    

// export {checkout, paymentVerification}