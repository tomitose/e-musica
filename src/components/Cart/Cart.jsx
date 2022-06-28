import React from 'react'
import { useCartContext } from '../Context/CartContext';
import {AiOutlineDelete} from 'react-icons/ai'
import {AiFillDelete} from 'react-icons/ai'
import {BsCartCheckFill} from 'react-icons/bs'
import "./Cart.css";

const Cart = () => {

  const {cart,totalPrice,deleteItem,emptyCart} = useCartContext();

  
  return (

    

    <div className='container-cart-first'>
          <h2 className='text-title'>Order</h2>
          <hr />
      <div className='container-cart-ext'>
          {
            
              cart.map((item) => (
              <div key={item.id} className="container-cart-item"> 

                <h4>{item.name}</h4>
                <img className='img-cart' src={item.img} alt={item.name} />
                <h5>Product Price: ${item.price * item.count}</h5>
                <p>Count: {item.count}</p>
                
                <button onClick={() => deleteItem(item.id)} className='btn-delete-item'>
                  <AiOutlineDelete className='icon-delete'/>
                </button>
              </div>
              ))
          }
      </div>
      <div className='container-total-button'>
            <h2 className='text-cart-total'>Total: ${totalPrice()}</h2>
            <button onClick={emptyCart} className='btn-empty-cart'>Empty Cart <AiFillDelete/></button>
            <button className='btn-make-order'>Make Order <BsCartCheckFill/> </button>
      </div>
    </div>
  )
}

export default Cart