

import React from 'react'
import { Button } from 'react-bootstrap'

const Item = ({item}) => {
  return (
    <div>
        <img src={item.img} alt="img"/>
        <h2>{item.name}</h2>
        <p>Price: ${item.price}</p>
        <Button variant="outline-success">View Product</Button>
        <hr />
    </div>
  )
}

export default Item