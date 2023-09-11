import React from 'react'

function Home(props) {

  return (
    <div>
      <h3>Home Components</h3>
      <div className='add-to-cart'>
      { (props.itemsStateData.cartItems.length > 0) &&
      <span className='cart-count'> {props.itemsStateData.cartItems.length}</span>
      }
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTl1hurWCAjPXkTInlppKuXJHNScJryrQ_Tylq4W4Ef171tO4&s' />
      
      </div>
        <div className='cart-wrapper'>
              <div className='img-wrapper item'>
                   <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpsSiScZ1ugJRPmsU3IZpWsvGRqOxkYRZGbbO-Zhvbaw9JG4A&s' />     
              </div>
              <div className='text-wrapper item'>
                 <span>
                  Item Name
                 </span>
                 <span>
                  Price:12
                 </span>
              </div>
              <div className='button-wrapper item'>
                <button onClick={()=>props.addTOCartHandler({price:100, name:"T-Shirt"})}>Add to cart</button>
                <button onClick={()=>props. removeTOCartHandler()}>Remove to Cart</button>
              </div>
        </div>
    </div>
  )
}

export default Home