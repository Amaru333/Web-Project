import React from 'react';
import '../style/featuredProducts.css'
import { Link } from 'react-router-dom';

function FeaturedProducts({ image, title, price, url }) {
    return (
        <div className="featuredProducts">
            <img src={image} alt={title} className="homeProductImage" />
            <div className="homeProductInfo">
                <p className="homeProductTitle">{title}</p>
                <div className="homeProductPrice">
                    <small>₹ </small>
                    <strong>{price}</strong>
                </div>
            </div>
            <Link to={`/store/${url}`}><button className="homeAddToCart">View Product</button></Link>
        </div>
    )
}

export default FeaturedProducts;
