import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <div style={{display:"flex",alignItems:"center"}}>
          <img
            className="logo"
            alt="App Logo"
            src="https://static.vecteezy.com/system/resources/previews/000/095/292/original/thick-burger-vector.jpg"
            />
            <span >FoodZies</span>
          </div>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li><FaShoppingCart/></li>
          </ul>
        </div>
      </div>
    );
  };

export default Header