import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { getData } from "../services/getData";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const {categoryId} = useParams();


  useEffect(() => {
    setLoading(true);

    getData()
      .then((resp) => {
        if (!categoryId) {setItems(resp)}
        else {setItems(resp.filter((item)=>item.category === categoryId))}
      })
      .catch((error) => {
        console.log("Error", error);
      })
      .finally(() => {
        setLoading(false)
      })
  },[categoryId]);

  return (
    <div className="container-item-list-co">
      {loading ? (
        <Spinner animation="border" role="status">
          <div>Loading...</div>
        </Spinner>
      ) : (
        <ItemList items= {items} />
      )}
    </div>
  );
};

export default ItemListContainer;
