import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ItemCount.css";

const ItemCount = ({ stock, addToCart, setCounter, counter }) => {
  function decrement() {
    setCounter(counter - 1);
    if (counter <= 1) {
      setCounter(1);
    }
  }

  function increase() {
    counter < stock && setCounter(counter + 1);
  }

  if (counter === 0) {
    return <h3 className="count-number">Theres no stock</h3>;
  }

  return (
    <div className="container-count">
      <div className="container-count-btns">
        {stock === 0 ? (
          <div>
            <h3 className="count-number"> There`s no stock</h3>
            <Link to="/">
              <Button className="no-stock-btn"> Go back </Button>
            </Link>
          </div>
        ) : (
          <div className="container-count-btns">
            <Button className="btn-inad" onClick={() => decrement()}>
              {" "}
              -{" "}
            </Button>
            <h3 className="count-number">{counter}</h3>
            <Button className="btn-inad" onClick={() => increase()}>
              {" "}
              +{" "}
            </Button>
            <br />
            <div>
              <Button onClick={addToCart} className="btn-add-cart">
                Add to Cart
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemCount;
