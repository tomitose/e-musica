import { Button } from "react-bootstrap";
import "./ItemCount.css";

const ItemCount = ({stock,addToCart,setCounter,counter}) => {

  function decrement() {
   setCounter(counter - 1);
    if (counter <= 1) {
      setCounter(1);
    }
  }

  function increase() {
    counter < stock && setCounter(counter + 1);
  }

  return (
    <div>
      <div className="container-count">
      <Button className="btn-inad" onClick={() => decrement()}> - </Button>
        <h3 className="count-number">{counter}</h3>
      <Button className="btn-inad" onClick={() => increase()}> + </Button>        
      </div>
      <div>
        <Button onClick={addToCart} className="btn-add-cart">Add to Cart</Button>
      </div>
    </div>
  );
};

export default ItemCount;
