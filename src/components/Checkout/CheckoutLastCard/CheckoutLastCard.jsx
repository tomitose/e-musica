import React from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

import "./CheckoutLastCard.css";

const CheckoutLastCard = ({ orderId }) => {
  if (orderId) {
    return (
      <div className="container-last-card">
        <h1 className="title-last-card">Order Checkout</h1>
        <hr />
        <h3>Your order has been done succesfully !</h3>
        <h3>
          {" "}
          Your order number is: <b className="order-number">{orderId}</b>
        </h3>
        <div>
          <Link to="/">
            <button className="btn-go-home-last"> Go back home </button>
          </Link>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/" />;
  }
};

export default CheckoutLastCard;
