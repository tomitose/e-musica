import React from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import "./CartWidget.css";

const CartWidget = () => {

  const {cart} = useCartContext()

  return (
      <div className='cart-container'>
        <Link className="link-cart" to="/cart">
          {
            cart.length === 0 
            ?
            <AiOutlineShoppingCart className='cart-logo'></AiOutlineShoppingCart>
            :
            <div className="cart-cond">
              <AiOutlineShoppingCart className='cart-logo'></AiOutlineShoppingCart>
              <p className='cart-length'>
              {cart.length}
              </p>
            </div>
          }

         
        </Link>
        
      </div>
  )
}

export default CartWidget