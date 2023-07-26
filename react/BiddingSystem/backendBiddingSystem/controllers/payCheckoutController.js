import { instance } from "../server1.js";

import crypto from "crypto";

// import  {Payment} from '../model/paymentModel.js';
import { parse } from "path";
  
export const checkout = async(req, res) => {
  const options = {
    amount :parseFloat(req.body.amount)* 100,
    currency : "INR",
  };

  const order = await instance.orders.create(options);

  res.status(200).json({
    success : true,
    order,
  });
};


// export const paymentVerification = async(req, res) => {
//   const {razorpay_order_id, razorpay_payment_id, razorpay_signature} = req.body;
  
//   const body = razorpay_order_id  + " | " + razorpay_payment_id;

//   const expectedSignature = crypto
//             .createHmac("emmanuelniry007", process.env.RAZORPAY_API_SECRET)
//             .update(body.toString())
//             .digest("hex");

//             const isAuthentic = expectedSignature === razorpay_signature;

//             if(isAuthentic)
//             {
//               await Payment.create({
//                 razorpay_order_id,
//                 razorpay_payment_id,
//                 razorpay_signature,
//               });
//               res.redirect(`http://localhost:3000/paymentsuccess?refrence = ${  razorpay_payment_id}`)
//             }else {
//               res.status(400).json({
//                 success: false,
//               })
//             }
// }    

// export {checkout, paymentVerification}