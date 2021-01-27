import React, { useState } from "react";
import Axios from 'axios';
import '../style/addAddress.css';

function AddAddress() {
    let amazoneUserData = JSON.parse(window.localStorage.getItem('amazoneUser'));
    let _id = amazoneUserData._id;
    const [addressLine1, setAddressLine1] = useState("");
    const [addressLine2, setAddressLine2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [pincode, setPincode] = useState("");

    // const { setUserInfo } = useContext(LoginContext);
    const addAddress = (props) => {
        Axios.post('http://localhost:3001/updateAddress', {
            _id: _id,
            addressLine1: addressLine1,
            addressLine2: addressLine2,
            city: city,
            state: state,
            pincode: pincode
        }).then((response) => {
            console.log(response.data)
            console.log(props);
            console.log(props.isUserLoggedIn);
            // props.isUserLoggedIn(response.data)
            window.localStorage.setItem('amazoneUser', JSON.stringify(response.data));
            }).catch(err => {
                console.log(err)
            })
        };

    return (
        <div className="addAddress">
            <div className="innerElements">
                    <h1>Add your address</h1>
                    <p>Address Line 1:</p>
                    <input type="field" className="loginInput" onChange={(e) => {
                        setAddressLine1(e.target.value);
                    }} />
                    <p>Address Line 2:</p>
                    <input type="field" className="loginInput" onChange={(e) => {
                        setAddressLine2(e.target.value);
                    }} />
                    <p>City:</p>
                    <input type="field" className="loginInput" onChange={(e) => {
                        setCity(e.target.value);
                    }} />
                    <p>State:</p>
                    <input type="field" className="loginInput" onChange={(e) => {
                        setState(e.target.value);
                    }} />
                    <p>Pincode:</p>
                    <input type="field" className="loginInput" onChange={(e) => {
                        setPincode(e.target.value);
                    }} />
                    <button className="loginButton" onClick={addAddress}>Add address</button>
                </div>
        </div>
    )
}

export default AddAddress
