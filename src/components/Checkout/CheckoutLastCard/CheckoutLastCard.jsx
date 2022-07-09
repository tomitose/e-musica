import React from 'react';
import { Link } from "react-router-dom";
import './CheckoutLastCard.css';

const CheckoutLastCard = ({orderId}) => {
  return (
    <div className='container-last-card'>
        <h1 className='title-last-card'>Checkout</h1>
        <h3>Your order  has been done succesfully !</h3>
        <h4> Your number order is: {orderId}</h4>
        <div>
          <Link to="/">
            <button className='btn-go-home-last'> Go back home </button>
          </Link>
        </div>
    </div>
  )
}

export default CheckoutLastCard