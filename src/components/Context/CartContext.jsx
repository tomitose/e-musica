import React from "react";
import { createContext, useContext } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
       
      return (
        <CartContext.Provider >
          {children}
        </CartContext.Provider>
      );
    };


export default CartContextProvider;
