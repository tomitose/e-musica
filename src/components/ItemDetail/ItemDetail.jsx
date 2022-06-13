import React from 'react'

const ItemDetail = ({item}) => {
  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item.img} alt={item.name} />
      <p>{item.desc}</p>
      <h3>Price: ${item.price}</h3>
    </div>
  )
}

export default ItemDetail