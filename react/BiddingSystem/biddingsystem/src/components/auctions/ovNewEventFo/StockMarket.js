import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/esm/Button';

const StockMarket = () => {

    const [stockMkt, setStockMkt] = useState([]);

    useEffect(() => {
        // let getStockdata = () => {
             axios.get("https://api.marketaux.com/v1/news/all?exchanges=NYSE,NASDAQ&api_token=0nliES2eaa5S8oYylGyf3MnIIttlRblPTeClq2jH")
                 .then((resp) => {
                      // console.log(res.data.data);
                      setStockMkt(resp.data.data);
                    })
        // }
        // getStockdata();
    }, [])
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
                                   <Button className='btn ms-2 me-2' variant='danger'>SELL</Button>
                              </div>
                            
                )})}
                  </div>
                )})}
                
         </div>


    </div>
  )
}

export default StockMarket