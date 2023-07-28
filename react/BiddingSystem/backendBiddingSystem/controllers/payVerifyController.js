import crypto from "crypto";

// import  {Payment} from '../model/paymentModel.js';
// import { parse } from "path";

//  export const checkout = async(req, res) => {
//   const options = {
//     amount :parseFloat(req.body.amount)* 100,
//     currency : "INR",
//   };

//   const order = await instance.orders.create(options);

//   res.status(200).json({
//     success : true,
//     order,
//   });
// };

// export const paymentVerification = async(req, res) => {

//   let generated_signature = hmac_sha256(order_id + "|" + razorpay_payment_id, secret);

//   if (generated_signature == razorpay_signature) {
//    console.log(" payment is successful")
//   }

//   var instance = new Razorpay({ key_id: 'YOUR_KEY_ID', key_secret: 'YOUR_SECRET' })

// var { validatePaymentVerification, validateWebhookSignature } = require('./dist/utils/razorpay-utils');
// validatePaymentVerification({"order_id": razorpayOrderId, "payment_id": razorpayPaymentId }, signature, secret);
// } 
