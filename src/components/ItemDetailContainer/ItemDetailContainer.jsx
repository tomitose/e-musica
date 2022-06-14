import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getData } from "../services/getData";
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();
  console.log(itemId);
  console.log(item);

  useEffect(() => {
    setLoading(true);

    getData()
      .then((resp) => {
        setItem(resp.find((item) => item.id === Number(itemId)));
      })
      .catch((error) => {
        console.log("Error", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="container-detail">
      {loading ? (
        <Spinner animation="border" role="status">
          <div>Loading...</div>
        </Spinner>
      ) : (
        <ItemDetail item={item} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
