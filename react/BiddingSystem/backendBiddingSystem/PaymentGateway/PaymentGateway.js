const  express = require('express');
const payRouter = express.Router();
const  Razorpay = require('razorpay');
// const { default: orders } = require('razorpay/dist/types/orders');
require('dotenv').config();
const KEY_ID =process.env.KEY_ID;
const KEY_SECRET = process.env.KEY_SECRET;


payRouter.get('/orders', (req, res) => {
    res.send("Get Method calleds"  +"Key Id  " + KEY_ID + " "+ "Key Secret  "+ KEY_SECRET);
})

payRouter.post('/order', (req, res) => {
        
    let  instance = new Razorpay({
        key_id :KEY_ID,
        key_secret: KEY_SECRET,
    });

    let options = {
        amount: req.body.amount * 100,
        currency:"INR",
    };

    const order =  instance.orders.create(options);
res.send(order);
    // instance.orders.create(options, function(err, order){
    //     console.log("error" +" "+ err )
    //     if(err) {
    //         return res.send({status :502, message:`Server Error ${err}`,})
    //     }
    //     return res.send({status:200, message: "Order created", data: order})
    // })

    // let MyOrder = instance.orders.create({amount, currency, receipt, notes});
    // console.log(MyOrder);
    
});

payRouter.get('/paymentgateway', (req, res) => {
       console.log("Payment gateway "+ process.env.KEY_ID+" "+"Secret "+process.env.KEY_SECRET);
       res.send("payment gateway" + "Key "+ KEY_ID+" "+"Secret "+KEY_SECRET);
})

module.exports = payRouter;


