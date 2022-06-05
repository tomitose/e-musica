import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./ItemCount.css";

const ItemCount = () => {
  const [count, setCount] = useState(1);

  function decrement() {
    setCount(count - 1);
    if (count <= 1) {
      setCount(1);
    }
  }

  function increase() {
    setCount(count + 1);
  }

  return (
    <div>
      <div className="container-count">
        <Button onClick={() => increase()}> + </Button>
        <h3 className="count-number">{count}</h3>
        <Button onClick={() => decrement()}> - </Button>
      </div>
      <div>
        <Button className="btn-add-cart">Add to Cart</Button>
      </div>
    </div>
  );
};

export default ItemCount;
