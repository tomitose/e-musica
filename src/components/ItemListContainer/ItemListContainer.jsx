import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import {getData} from "../services/getData"

const ItemListContainer = () => {

  const [items, setItems] = useState([])


  useEffect (() => {
    getData() 
      .then((resp) => {
        setItems(resp)
      })
      .catch((error) => {
        console.log("Error", error)
      })
  })


  return (
    <div className='container my-5'>
      <ItemList items={items}/>
    </div>
  )
}

export default ItemListContainer