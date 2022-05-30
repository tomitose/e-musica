import React, { useState } from 'react';
import {Button} from 'react-bootstrap';
import './ItemCount.css';

const ItemCount = () => {

const[count,setCount] = useState (1)

function decrement () {
   setCount(count - 1)
   if (count <= 0){
    setCount(0)
   }
}

function increase () {
   setCount(count + 1)
}

  return (
    <div className='container-count'>
        <Button onClick={() => increase()}> + </Button>
        <h3 className='count-number'>{count}</h3>
        <Button onClick={() => decrement()}> - </Button>
        <div>
        <Button>Add to Cart</Button>
        </div>
    </div>
  )
}

export default ItemCount