import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({item}) => {
  return (
    <div className='container-item-detail'>
      <h1>{item.name}</h1>
      <img src={item.img} alt={item.name} />
      <p className='text-desc'>{item.desc}</p>
      <h3 className='price-detail'>Price: ${item.price}</h3>
      <ItemCount/>
    </div>
  )
}

export default ItemDetail