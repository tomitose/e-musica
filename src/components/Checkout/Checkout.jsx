import React from "react";
import { useState } from "react";
import { useCartContext } from "../Context/CartContext";
import {Navigate} from "react-router-dom"
import "./Checkout.css";
import { db } from "../../firebase/config";
import { collection, getDocs, addDoc, writeBatch,query,where, documentId } from "firebase/firestore";
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

  const handleInputChange  = async (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
    
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const order = {
      buyer: values,
      items: cart.map(({id,name,count}) => ({id,name,count})),
      total: totalPrice()
    }

    const batch = writeBatch(db)
    const ordersRef = collection(db,"orders")
    const productsRef = collection(db,"products")
    const q = query(productsRef, where(documentId(),'in',cart.map(item => item.id)))
    
    const outOfStock = []

    const products = await getDocs(q)

    products.docs.forEach((doc) => {
      const itemToUpdate = cart.find(prod => prod.id === doc.id)

      if ((doc.data().stock - itemToUpdate.count) >= 0) {
        batch.update(doc.ref, {
         stock: doc.data().stock - itemToUpdate.count         
        })
      } else {
        outOfStock.push(itemToUpdate)
      }

    })

    if (outOfStock.length === 0) {
      addDoc(ordersRef,order)
        .then((doc)=>{
          batch.commit()
          setOrderId(doc.id)
          emptyCart()
        })
    }
    else{
      alert("There are Items without Stock")
      emptyCart()

    }

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


    // cart.forEach((item) =>{
    //   const docRef = doc(db,"products",item.id)
    //   getDoc(docRef)
    //     .then((doc)=>{
    //       if((doc.data().stock - item.count) >= 0){
    //           updateDoc(docRef,{
    //           stock: doc.data().stock - item.count
    //         })
    //       }
    //       else {alert("There`s no stock of the product:" + item.name)}
    //     })
    // })