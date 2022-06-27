import React from 'react'
import { useCartContext } from '../Context/CartContext';
import "./Cart.css";

const Cart = () => {

  const {cart,totalPrice} = useCartContext();

  
  return (

    <div className='container-cart-first'>
          <h2 className='text-title'>Order</h2>
      <div className='container-cart-ext'>

          {
              cart.map((item) => (
              <div key={item.id} className="container-cart-item"> 

                <h4>{item.name}</h4>
                <img className='img-cart' src={item.img} alt={item.name} />
                <p>Count: {item.count}</p>
                <h6>Product Price: ${item.price * item.count}</h6>
                
              </div>
              ))
          }
      </div>
            <h4 className='text-cart-total'>Total: ${totalPrice()}</h4>
    </div>
  )
}

export default Cart