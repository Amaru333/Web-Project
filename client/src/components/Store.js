import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "../style/store.css";
import StorePageProducts from "./StorePageProducts";

function Store() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/store").then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  }, []);

  return (
    <div className="store">
      <div className="StorePageProduct">
        {data.map((item) => (
          <StorePageProducts
            image={item.image}
            title={item.title}
            price={item.price}
            url={item._id}
          />
        ))}
      </div>
    </div>
  );
}

export default Store;
