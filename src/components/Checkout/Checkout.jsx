import React from "react";
import { useState } from "react";
import { useCartContext } from "../Context/CartContext";
import { Navigate } from "react-router-dom";
import "./Checkout.css";
import { db } from "../../firebase/config";
import {
  collection,
  getDocs,
  addDoc,
  writeBatch,
  query,
  where,
  documentId,
} from "firebase/firestore";
import CheckoutLastCard from "./CheckoutLastCard/CheckoutLastCard";
import { Formik } from "formik";
import * as Yup from "yup";

const Checkout = () => {
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(25, "Too Long!")
      .required("Required"),
    lastname: Yup.string()
      .min(2, "Too Short!")
      .max(25, "Too Long!")
      .required("Required"),
    cel: Yup.number().required("Required"),
    adress: Yup.string()
      .min(2, "Too Short!")
      .max(20, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  const { cart, totalPrice, emptyCart } = useCartContext();

  const [orderId, setOrderId] = useState(null);

  const generateOrder = async (values) => {
    const order = {
      buyer: values,
      items: cart.map(({ id, name, count }) => ({ id, name, count })),
      total: totalPrice(),
    };

    const batch = writeBatch(db);
    const ordersRef = collection(db, "orders");
    const productsRef = collection(db, "products");
    const q = query(
      productsRef,
      where(
        documentId(),
        "in",
        cart.map((item) => item.id)
      )
    );

    const outOfStock = [];

    const products = await getDocs(q);

    products.docs.forEach((doc) => {
      const itemToUpdate = cart.find((prod) => prod.id === doc.id);

      if (doc.data().stock - itemToUpdate.count >= 0) {
        batch.update(doc.ref, {
          stock: doc.data().stock - itemToUpdate.count,
        });
      } else {
        outOfStock.push(itemToUpdate);
      }
    });

    if (outOfStock.length === 0) {
      addDoc(ordersRef, order).then((doc) => {
        batch.commit();
        setOrderId(doc.id);
        emptyCart();
      });
    } else {
      alert("There are Items without Stock");
      emptyCart();
    }
  };

  if (orderId) {
    return <CheckoutLastCard orderId={orderId} />;
  }

  if (cart.length === 0) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container-checkout">
      <h1 className="title-checkout">Checkout</h1>
      <hr style={{ width: "100%" }} />
      <Formik
        initialValues={{
          name: "",
          lastname: "",
          cel: "",
          adress: "",
          email: "",
        }}
        onSubmit={generateOrder}
        validationSchema={SignupSchema}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit} className="form">
            <div>
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                id="name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
            </div>
            {formik.errors.name && (
              <p className="required-text">*{formik.errors.name}</p>
            )}
            <div>
              <label htmlFor="lastname">Lastname: </label>
              <input
                type="text"
                name="lastname"
                placeholder="Lastname"
                id="lastname"
                value={formik.values.lastname}
                onChange={formik.handleChange}
              />
            </div>
            {formik.errors.lastname && (
              <p className="required-text">{formik.errors.lastname}</p>
            )}
            <div>
              <label htmlFor="cel">Cel: </label>
              <input
                type="number"
                name="cel"
                placeholder="Cel"
                id="cel"
                value={formik.values.cel}
                onChange={formik.handleChange}
              />
            </div>
            {formik.errors.cel && (
              <p className="required-text">{formik.errors.cel}</p>
            )}
            <div>
              <label htmlFor="adress">Adress: </label>
              <input
                type="text"
                name="adress"
                placeholder="Adress"
                id="adress"
                value={formik.values.adress}
                onChange={formik.handleChange}
              />
            </div>
            {formik.errors.adress && (
              <p className="required-text">{formik.errors.adress}</p>
            )}
            <div>
              <label htmlFor="email">E-mail: </label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </div>
            {formik.errors.email && (
              <p className="required-text">{formik.errors.email}</p>
            )}
            <button type="submit">Buy</button>
          </form>
        )}
      </Formik>
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

// const [values,setValues] = useState({
//   name:"",
//   lastname: "",
//   cel: "",
//   adress: "",
//   email: ""
// })

// const handleInputChange  = async (e) => {
//   setValues({
//     ...values,
//     [e.target.name]: e.target.value
//   })

// }
