import React, { useContext, useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import CartContext from '../utils/CartContext';
 

const Header = () => {
  const [loggedIn,setLoggedIn]=useState(false)

 const {productList}=useContext(CartContext)
  const handleLogin=()=>{
    setLoggedIn(!loggedIn)
  }

  const onlineStatus=useOnlineStatus()
  const data=useContext(UserContext)

    return (
      <div className="flex justify-between border border-black items-center bg-[rgb(235,224,215)]">
        <div className="w-10">
         <Link to='/'>
         <div  className='flex items-center'>
 <img
            className="w-[100px] mix-blend-darken pl-[20px]"
            alt="App Logo"
            src="https://static.vecteezy.com/system/resources/previews/000/095/292/original/thick-burger-vector.jpg"
            />
 
            <span >FoodZies</span>
            
            </div></Link>
        </div>
        <div className="">
          <ul className='flex p-4 m-4 gap-4 justify-center'>
            <li>{onlineStatus?"🟢 Online":"🔴 Offline"}</li>
          <li><Link to='/'>Home</Link></li>
          <li> <Link to='/about'>About Us</Link></li>
          <li> <Link to='/contact'>Contact Us</Link></li>
          <li><Link to='/grocery'>Grocery</Link></li>
            <li className='self-center'><Link to='/cart' className='flex justify-between gap-1 items-center'><FaShoppingCart/>{productList.length || 0}</Link></li>
            <button className='p-0 px-5 cursor-pointer bg-transparent text-lg rounded-md border-2 border-transparent hover:border-[#F0BC83] transition duration-500 linear"' onClick={handleLogin}>{loggedIn?"Logout":"Login"}</button>
            <li className='px-5 font-bold'>{data.loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
  };

export default Header