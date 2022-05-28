import React from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai";
import "./CartWidget.css";

function CartWidget  () {
  return (
      <div className='cart-container'>
          <AiOutlineShoppingCart className='cart-logo'/>
      </div>
  )
}

export default CartWidget