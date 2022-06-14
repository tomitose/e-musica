
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({item}) => {

  return (
    <div className='container-item'>
        <img src={item.img} alt="img"/>
        <h2 className='item-name'>{item.name}</h2>
        <p>Price: ${item.price}</p>
        <Link className='link-btn' to={`/item/${item.id}`}>
             <Button className='btn-view-product' variant="outline-success">View Product</Button>
        </Link>
        <br/>
    </div>
  )
}

export default Item