import React from "react";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div className="container-checkout">
      <h1 className="title-checkout">Login</h1>
      <form action="" className="form">
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            id="name"
            // value={inputName}
            // onChange={handleInputName}
          />
        </div>

        <div>
          <label htmlFor="lastname">Lastname: </label>
          <input
            type="text"
            name="lastname"
            placeholder="Lastname"
            id="lastname"
            // value={inputLastname}
            // onChange={handleInputLastname}
          />
        </div>

        <div>
          <label htmlFor="cel">Cel: </label>
          <input
            type="number"
            name="cel"
            placeholder="Cel"
            id="cel"
            // value={inputCel}
            // onChange={handleInputCel}
          />
        </div>

        <div>
          <label htmlFor="adress">Adress: </label>
          <input
            type="text"
            name="adress"
            placeholder="Adress"
            id="adress"
            // value={inputAdress}
            // onChange={handleInputAdress}
          />
        </div>

        <div>
          <label htmlFor="email">E-mail: </label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            id="email"
            // value={inputEmail}
            // onChange={handleInputEmail}
          />
        </div>

        <button type="submit">Buy</button>
      </form>
    </div>
  );
};

export default Checkout;
