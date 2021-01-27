import React from 'react';
import '../style/Header.css';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Header() {
	let userName = `Sign In/Register`;
	let link = `/login`;
	// console.log(props.userData.name);
	if(window.localStorage.getItem('amazoneUser')) {
	  let amazoneUserData = JSON.parse(window.localStorage.getItem('amazoneUser'));
	  userName = amazoneUserData.name;
	  link = `/profile`;
	}
    return (
        <div className="header">
            <div className="logo">
			    <h4 className="logoname">Shop</h4>
		    </div>
		    <nav>
			    <ul className="nav-link">
				    <li><a className="navlink" href="/">Home</a></li>
				    <li><a className="navlink" href="/store">Store</a></li>
				    <li><a className="navlink" href={link}>{userName}</a></li>
			    </ul>
		    </nav>
		    <div className="cartcontainer">
                <ShoppingCartIcon className="cart"/>
		    </div>
        </div>
    )
}

export default Header;
