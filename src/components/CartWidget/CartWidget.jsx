import React from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai";
import { Link } from 'react-router-dom';
import "./CartWidget.css";

function CartWidget  () {
  return (
      <div className='cart-container'>
        <Link to="/cart">
          <AiOutlineShoppingCart className='cart-logo'/>
        </Link>
      </div>
  )
}

export default CartWidget