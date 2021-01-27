import React, { useState, useEffect } from 'react';
import Router from 'react-router-dom';
import '../style/itemPage.css';
import Axios from 'axios';

function ItemPage({ match }) {
    const [data, setData] = useState([]);
    console.log(match);
    useEffect(() => {
        Axios.get(`http://localhost:3001/store/${match.params.id}`).then((response) => {
          console.log(response.data);
          setData(response.data)
        });
      }, [match.params.id]);
    return (
        <div className="itemPage">
            <div className="items">
                <h3 className="title">{data.title}</h3>
                <img className="productImage" src={data.image} alt={data.title}/>
                <h6 className="price">Price: ₹{data.price}</h6>
                <h6 className="price">Quantity: {data.quantity}</h6>
                <p className="description">{data.description}</p>
            </div>
        </div>
    )
}

export default ItemPage
