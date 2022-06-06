
import React from 'react';
import { Button } from 'react-bootstrap';
import './Item.css';

const Item = ({item}) => {
  return (
    <div className='container-item'>
        <img src={item.img} alt="img"/>
        <h2 className='item-name'>{item.name}</h2>
        <p>Price: ${item.price}</p>
        <Button variant="outline-success">View Product</Button>
        <br/>
    </div>
  )
}

export default Item