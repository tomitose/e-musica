import React from 'react';
import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({item}) => {


  

  const [count,setCount] = useState(1)
  
  const addToCart = () => {
    const itemToCart = {
      ...item,
      count: count
      
    }
    console.log (itemToCart)
  }
  return (
    <div className='container-item-detail'>
      <h1>{item.name}</h1>
      <img src={item.img} alt={item.name} />
      <p className='text-desc'>{item.desc}</p>
      <h3 className='price-detail'>Price: ${item.price}</h3>
      <ItemCount 
      stock={item.stock}
      addToCart={addToCart}
      setCounter={setCount}
      counter={count}
      />
    </div>
  )
}

export default ItemDetail