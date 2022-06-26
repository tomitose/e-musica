import React from "react";
import { useState } from "react";
import { createContext, useContext } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cart,setCart] = useState([])

  const addItem = (item) => {
    setCart ([...cart, item])
  }

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id)
  }

  const totalPrice = () => {
    return cart.reduce ((acc,prod) => acc += (prod.price * prod.count), 0)
  }

  return (
  <CartContext.Provider 
  value={{
    addItem,
    isInCart,
    totalPrice
  }}>
  {children}
  </CartContext.Provider>)
};

export default CartContextProvider;
