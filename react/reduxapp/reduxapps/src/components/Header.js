import React from 'react'

function Header(props) {

  return (
    <div>
      <div className='add-to-cart'>
      { (props.itemsStateData.cartItems.length > 0) &&
      <span className='cart-count'> {props.itemsStateData.cartItems.length}</span>
      }
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTl1hurWCAjPXkTInlppKuXJHNScJryrQ_Tylq4W4Ef171tO4&s' />
      </div>
    </div>
  )
}

export default Header