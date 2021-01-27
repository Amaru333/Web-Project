import React from "react";
import "../style/StorePageProducts.css";
import { Link } from "react-router-dom";

function StorePageProducts({ image, title, price, url }) {
  return (
    <div className="StorePageProducts">
      {/* <div className="StorePageProductLine"> */}
      <img src={image} alt={title} className="storeProductImage" />
      <div className="storeProductInfo">
        <p className="storeProductTitle">{title}</p>
        <div className="storeProductPrice">
          <small>₹ </small>
          <strong>{price}</strong>
        </div>
      </div>
      <Link to={`/store/${url}`}>
        <button className="storeAddToCart">View Product</button>
      </Link>
      {/* </div> */}
    </div>
  );
}

export default StorePageProducts;
