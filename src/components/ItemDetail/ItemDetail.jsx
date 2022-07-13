import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
  const { addItem, isInCart } = useCartContext();

  const [count, setCount] = useState(1);

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const addToCart = () => {
    const itemToCart = {
      ...item,
      count,
    };

    addItem(itemToCart);
  };

  return (
    <div className="container-item-detail">
      <h1>{item.name}</h1>
      <img src={item.img} alt={item.name} />
      <p className="text-desc">{item.desc}</p>
      <h3 className="price-detail">Price: ${item.price}</h3>

      {isInCart(item.id) ? (
        <div className="btns-go-add">
          <Link to="/cart" className="btn-go-to-cart">
            Go to Cart
          </Link>
          <Link to="/" onClick={goBack} className="btn-back">
            Add More +{" "}
          </Link>
        </div>
      ) : (
        <ItemCount
          stock={item.stock}
          addToCart={addToCart}
          setCounter={setCount}
          counter={count}
        />
      )}
    </div>
  );
};

export default ItemDetail;
