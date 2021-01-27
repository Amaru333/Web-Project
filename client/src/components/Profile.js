import React from 'react';
import '../style/Profile.css';
import moment from 'moment';

function Profile(props) {
    let amazoneUserData = JSON.parse(window.localStorage.getItem('amazoneUser'));
    let userName = amazoneUserData.name;
    let mailID = amazoneUserData.mail;
    let mobile = amazoneUserData.mobile;
    let regDate = amazoneUserData.date;
    let regDateFormat = moment(regDate).format("DD-MM-YYYY, h:mm:ss a")
    let regSince = moment(regDate, "YYYYMMDD").fromNow();
    let address1 = amazoneUserData.addressLine1;
    let address2 = amazoneUserData.addressLine2;
    let city = amazoneUserData.city;
    let state = amazoneUserData.state;
    let pincode = amazoneUserData.pincode;
    let button;

    if (address1==='') {
        button = (<a href="/profile/address"><button className="address">Add address</button></a>)
    } else {
        button = (
            <>
                <h4 className="profileTitle">Address:</h4>
                <h4 className="profileTitle">{address1}</h4>
                <h4 className="profileTitle">{address2}</h4>
                <h4 className="profileTitle">{city}- {pincode}</h4>
                <h4 className="profileTitle">{state}</h4>
                <a href="/profile/address"><button className="address">Update address</button></a>
            </>
        )
    }

    return (
        <div className="profile">
            <div className="profileBox">
                <div className="profileBox1">
                    <h4 className="profileTitle">Your Name: {userName}</h4>
                    <h4 className="profileTitle">Your Mail ID: {mailID}</h4>
                    <h4 className="profileTitle">Your Mobile: {mobile}</h4>
                    <h4 className="profileTitle">User Since: {regDateFormat} ({regSince})</h4>
                </div>
                <div className="profileBox2">
                    {button}
                </div>
            </div>
        </div>
    )
}

export default Profile
