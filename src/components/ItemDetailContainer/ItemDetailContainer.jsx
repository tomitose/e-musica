import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getData } from "../services/getData";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);

    const {itemId} = useParams();

    console.log(item)


  useEffect(() => {
    getData()
      .then((resp) => {
          setItem( resp.find((item) => item.id === Number(itemId)))
      })
      .catch((error) => {
        console.log("Error", error);
      })
      
  });


  return (
    <div className="container my-5">
        <ItemDetail item={item}/>
    </div>
  );
};

export default ItemDetailContainer;
