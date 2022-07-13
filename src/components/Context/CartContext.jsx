import React from "react";
import { useState } from "react";
import { createContext, useContext } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart([...cart, item]);
  };

  const isInCart = (id) => {
    return cart.some((product) => product.id === id);
  };

  const totalPrice = () => {
    return cart.reduce((acc, prod) => (acc += prod.price * prod.count), 0);
  };

  const deleteItem = (id) => {
    let newCart = cart.filter((e) => e.id !== id);
    setCart(newCart);
  };

  const emptyCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        isInCart,
        totalPrice,
        deleteItem,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
