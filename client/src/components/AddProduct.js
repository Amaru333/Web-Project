import React, { useState } from "react";
import Axios from 'axios';
import '../style/addProduct.css';

function AddProduct() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState();
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [successfulMessage, setSuccessfulMessage] = useState("")

    // const { setUserInfo } = useContext(LoginContext);
    const addProduct = (props) => {
        Axios.post('http://localhost:3001/addProduct', {
            title: title,
            price: price,
            quantity: quantity,
            image: image,
            description: description
        }).then((response) => {
            console.log(response.data)
            setSuccessfulMessage(response.data);
            }).catch(err => {
                console.log(err)
            })
        };

    return (
        <div className="addAddress">
            <div className="innerElements">
                    <h1>Add a product</h1>
                    <p>Title:</p>
                    <input type="field" className="loginInput" onChange={(e) => {
                        setTitle(e.target.value);
                    }} />
                    <p>Price:</p>
                    <input type="field" className="loginInput" onChange={(e) => {
                        setPrice(e.target.value);
                    }} />
                    <p>Quantity:</p>
                    <input type="field" className="loginInput" onChange={(e) => {
                        setQuantity(e.target.value);
                    }} />
                    <p>Image:</p>
                    <input type="field" className="loginInput" onChange={(e) => {
                        setImage(e.target.value);
                    }} />
                    <p>Product Description:</p>
                    <input type="field" className="loginInput" onChange={(e) => {
                        setDescription(e.target.value);
                    }} />
                    <button className="loginButton" onClick={addProduct}>Add product</button>
                    <h4 className="successfulMessage">{successfulMessage}</h4>
                </div>
        </div>
    )
}

export default AddProduct;
