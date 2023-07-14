const  express = require('express');
const payRouter = express.Router();
const  Razorpay = require('razorpay');
const KEY_ID = require('dotenv').config();
const KEY_SECRET = require('../.config/.env');



payRouter.post('/order', async(req, res) => {
        
    let  instance = new Razorpay({
        key_id :KEY_ID,
        key_secret: KEY_SECRET,
    });

    let options = {
        amount: parseFloat(req.body.amount) * 100,
        currency:"INR",
        receipt: 'order_rcptid_11',
    };

    instance.orders.create(options, function(err, order){
        console.log(order);
    })

    res.status(200).send(order);
});

payRouter.get('/paymentgateway', (req, res) => {
       console.log("Payment gateway "+ process.env.KEY_ID+" "+"Secret "+process.env.KEY_SECRET);
       res.send("payment gateway" + "Key "+ KEY_ID+" "+"Secret "+KEY_SECRET);
})

module.exports = payRouter;


