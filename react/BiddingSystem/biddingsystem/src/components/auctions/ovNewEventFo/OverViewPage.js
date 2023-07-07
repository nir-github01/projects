import React from 'react'

const OverViewPage = () => {
  return (
    <>
        <div id='overviewpage' className='OverviewContainer'>
                <div>
                    <h6>Performance</h6>
                       <div>
                          <p>Todays Low</p>
                          <p>Amount  Rs</p>
                          <p>Today's High</p>
                          <p>Amount Rs</p>
                      </div>

                      <div>
                          <p>52 weeks Low</p>
                          <p>Amount  Rs</p>
                          <p>52 weeks  High</p>
                          <p>Amount Rs</p>
                      </div>

                </div>

                <div className='box1'> 
                      <p>Open <span> Amount</span></p>
                      <p>Prev Close <span> Amount </span></p>
                      <p>Volume <span>Quantity</span></p>
                      <p>Lower Circuit <span>Quantity</span></p>
                      <p>Upper Circuit <span>Quantity</span></p>
                </div>
            <hr/>
                <div className='marketdepth-box'>

                    <h5>Market Depth</h5> 
                    <p>Buy Orders</p>
                    <p>Sell Orders</p>
                    <progress>counting live</progress>
                </div>
                <div className='bidandaskprice-box'> 
                      <Table>
                        <thead>
                            <tr>
                                <th>Bid Price</th>
                                <th>Qty</th>
                                <th>Ask Price</th>
                                <th>Qty</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>bid price</td>
                                <td>Qty</td>
                                <td>Ask price</td>
                                <td>Qty</td>
                            </tr>
                        </tbody>
                      </Table>
                </div>

                <div className='funcdamentals-box'>
                    <span>Market price</span> <span>Amount</span> 
                    <span>P/E Ratio(TTM)</span> <span>Amount</span>
                    <span>P/B Ratio</span> <span>Amount</span>
                    <span>Industry P/E</span> <span>Amount</span>
                    <span>Debt Equity</span> <span>Amount</span>
                    <span>ROE</span> <span>Amount</span>
                    <span>EPS(TTM)</span> <span>Amount</span>
                    <span>Div Yield</span> <span>Amount</span>
                    <span>Book Value</span> <span>Amount</span>
                    <span>Face Value</span> <span>Amount</span>
                   <span>Understand Fundamentals</span>
                </div>
        </div>
        

    </>
  )
}

export default OverViewPage