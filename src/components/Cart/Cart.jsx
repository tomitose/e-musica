import React from 'react'
import { useCartContext } from '../Context/CartContext';

const Cart = () => {

  const {cart,totalPrice} = useCartContext();

  console.log (cart)
  console.log (totalPrice())
  return (


    <div>
        <h2>Order</h2>
        <hr />

        {
            // cart.map((item) => (
            // <div key={item.id} className="container-cart-item"> 
            //   <h4>{item.name}</h4>
            //   <p>Count: {item.counter}</p>
            //   <h6>Price: $ {item.price * item.counter}</h6>
              
            // </div>
            // ))
        }
          <h4>Total: ${totalPrice()}</h4>
    </div>
  )
}

export default Cart