import React from 'react';
import Button from 'react-bootstrap/esm/Button';
// import {Link} from 'react-router-dom';
// import { useNavigate } from "react-router-dom";

const StockDetailPage = () => {

  // let navigate = useNavigate();
  return (
    <>
        <div id='stockDetailId' className='stockDetail-container'>
            <div id='stock_detail_box'>
                     <p>Stock Sign <img src='' alt='stock'/></p>
                    <p>Stock Name</p>
                     <p>increament/decrement</p>
                    <p>Stock Live Graph</p>
                <div className='box1'>
                    <p>Performance</p>
                    <Button variant='danger'>SELL</Button>
                    <Button variant='success'>BUY</Button>
                </div>
            </div>
            <div className='trackingnav-box'>
                <ul style={{listStyleType:"none"}}>
                   {/* <Link to="/overview"> */}
                   <li>Overview</li>
                   {/* </Link> */}
                   {/* <Link to="/news"> */}
                   <li>News</li>
                   {/* </Link> */}
                   {/* <Link to="events"> */}
                   <li>Events</li>
                   {/* </Link> */}
                   {/* <Link to="futandOpt "> */}
                   <li>F&O</li>
                   {/* </Link> */}
                </ul>
                 
                   
            </div>
         </div>
    </>
  )
}

export default StockDetailPage