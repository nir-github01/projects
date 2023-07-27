import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/esm/Button';
import useRazorpay from "react-razorpay";


const StockMarket = () => {

    const [stockMkt, setStockMkt] = useState([]);
    const [Razorpay] = useRazorpay();

    useEffect(() => {
        let getStockdata = async() => {
                await  axios.get("https://api.marketaux.com/v1/news/all?exchanges=NYSE,NASDAQ&api_token=0nliES2eaa5S8oYylGyf3MnIIttlRblPTeClq2jH")
                 .then((resp) => {
                      // console.log(res.data.data);
                      setStockMkt(resp.data.data);
                    })
        }
        getStockdata();
    }, []);
    let handlePayment = async(amount) => {
          let {data:{key}} = await axios.get("http://localhost:8000/api/getKey")
            let {data: {order}} = await axios.post("http://localhost:8000/api/check",{amount})

             const options = {
              key_id: key,
              amount:order.amount,
              currency:"INR",
              name:"Stock market Payment",
              description:"Bidding payment gatway",
              order_id: order.id,
              callback_url:"http://localhost:8000/api/paymentverification",
              "handler": function (response){
                  return  response;
                // console.loog(response.razorpay_payment_id);
                // console.loog(response.razorpay_order_id);
                // console.loog(response.razorpay_signature)
                // setOrderkeys(response)
                // console.log("Response "+" "+ JSON.stringify(response));
               },
                prefill:{
                  FirstName:"",
                  LastName:"",
                  email:"",
                  contact:"",

                },
                notes: {
                    "address":"Razorpay corporate Office",
                },
                theme:{
                  "color": "#A2F5FE",
                  "width":"max-content",

                },
             };

             const razor = new window.Razorpay(options);
             razor.open();

        //      let postpayData = await fetch("http://localhost:8000/api/check", {
        //       method:"POST",
        //       body:JSON.stringify(options),
        //       headers:{
        //        "Content-Type":"application/json"
        //       }
        //  })
        //  let data = await postpayData.json();
        //   setOrder(data)
        //  console.log("data" +" "+ data)

    }
  return (
    <div>
         <div className='stockMarket-container'>
         {
             stockMkt.map((stock, idx)=> {
              
                return(
                  <div className='stockboxes' key={idx}  >
                       {

                         stock.entities.map((stk, idx1) => {
                          return(
                       
                              <div className='stkBox' key={idx1}>
                                   <p> <span className='spanclass'>Country :</span> {stk.country}</p>
                                   <p> <span className='spanclass'>Exchange : </span> {stk.exchange}</p>
                                   <p> <span className='spanclass'>Exchange Long : </span> {stk.exchange_long}</p>
                                   <p> <span className='spanclass'>Stock Symbol :</span> {stk.symbol}</p>
                                   <p> <span className='spanclass'>Industry :</span> {stk.industry}</p>
                                   <p> <span className='spanclass'>Match Score :</span> {stk.match_score}</p>
                                   <p> <span className='spanclass'>Sentimate score :</span> {stk.sentiment_score}</p>
                                   <p> <span className='spanclass'>Name :</span> {stk.name}</p>
                                   <p> <span className='spanclass'>Stock Type :</span> {stk.type}</p>
                                   <Button className='btn ms-2 me-2' variant="success">BUY </Button>
                                   <Button className='btn ms-2 me-2' variant='danger'  onClick={()=>handlePayment(stk.match_score)}>SELL</Button>
                              </div>
                            
                )})}
                  </div>
                )})}
                
         </div>


    </div>
  )
}

export default StockMarket