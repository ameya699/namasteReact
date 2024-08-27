import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
 

const Header = () => {
  const [loggedIn,setLoggedIn]=useState(false)

  const handleLogin=()=>{
    setLoggedIn(!loggedIn)
  }
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
          <li><Link to='/'>Home</Link></li>
          <li> <Link to='/about'>About Us</Link></li>
          <li> <Link to='/contact'>Contact Us</Link></li>
            <li><FaShoppingCart/></li>
            <button className='login' onClick={handleLogin}>{loggedIn?"Logout":"Login"}</button>
          </ul>
        </div>
      </div>
    );
  };

export default Header