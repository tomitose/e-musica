import React from 'react'

const ItemDetail = ({item}) => {
  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item.img} alt={item.name} />
    </div>
  )
}

export default ItemDetail