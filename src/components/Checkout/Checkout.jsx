import React from "react";
import { useState } from "react";
import { useCartContext } from "../Context/CartContext";
import {Navigate} from "react-router-dom"
import "./Checkout.css";
import { db } from "../../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import CheckoutLastCard from "./CheckoutLastCard/CheckoutLastCard";

const Checkout = () => {
  
  
  const { cart,totalPrice,emptyCart } = useCartContext()

  const [orderId,setOrderId] = useState(null)

  const [values,setValues] = useState({
    name:"",
    lastname: "",
    cel: "",
    adress: "",
    email: ""
  })

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
    
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const order = {
      buyer: values,
      items: cart.map(({id,name,count}) => ({id,name,count})),
      total: totalPrice()
    }

    const ordersRef = collection(db,"orders")
    addDoc(ordersRef,order)
      .then((doc)=>{
        setOrderId(doc.id)
        emptyCart()
      })
  }

  if (orderId) {
    return <CheckoutLastCard orderId={orderId} />
  }

  if (cart.length === 0) {
    return <Navigate to="/"/>
  }

  return (
    <div className="container-checkout">
      <h1 className="title-checkout">Login</h1>
      <form onSubmit={handleSubmit} action="" className="form">
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            id="name"
            value={values.name}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="lastname">Lastname: </label>
          <input
            type="text"
            name="lastname"
            placeholder="Lastname"
            id="lastname"
            value={values.lastname}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="cel">Cel: </label>
          <input
            type="number"
            name="cel"
            placeholder="Cel"
            id="cel"
            value={values.cel}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="adress">Adress: </label>
          <input
            type="text"
            name="adress"
            placeholder="Adress"
            id="adress"
            value={values.adress}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="email">E-mail: </label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            id="email"
            value={values.email}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit">Buy</button>
      </form>
    </div>
  );
};

export default Checkout;
