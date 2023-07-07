import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import StockDetailPage from './StockDetailPage';
const StockListPage = () => {
  return (
    <>
      <h5>Stock List Page</h5>

         <div className='stockList-container'>
                <div className='stockListbox'>
                    <p>Stock Sign <img src=''  alt='stock'/></p>
                    <p>Stock Name</p>
                    <p>Stock Price</p>
                    <p>increament or decreament</p>
                </div>
         </div>
         <div>
             <StockDetailPage />
         </div>
    </>
  )
}

export default StockListPage