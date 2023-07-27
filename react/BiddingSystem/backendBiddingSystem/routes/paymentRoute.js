import  express  from "express";
import { instance } from "../server1.js";
import {  paymentVerification} from "../controllers/payCheckoutController.js";
// import { paymentVerification } from "../controllers/payVerifyController.js";
 
const router = express.Router();


router.post("/check", async(req, res, next) => {

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
  req.body;

    const options = {
      amount :parseInt(req.body.amount) * 100,
      currency : "INR",
    };
  try{
    const order = await instance.orders.create(options)
    res.status(200).json({
      success:true,
      order
    })
  }catch(err){
    console.log(err)
  }
   

})


router.post("/refund", async(req, res) => {
   
  try {
    //first validate the payment Id then call razorpay API
    const options = {
        payment_id: req.body.paymentId,
        amount: req.body.amount,
    };
    const razorpayResponse = await razorpay.refund(options);
    //we can store detail in db and send the response
    res.send('Successfully refunded')
} catch (error) {
    console.log(error);
    res.status(400).send('Unable to refund the payment');
}

})
// router.route("/checkout").post(checkout);
router.route("/paymentverification").post(paymentVerification);

export default router;