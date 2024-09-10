import React from 'react'
import footerlogo from "../images/footer-logo.png"
import { FaLocationDot } from "react-icons/fa6";


const Footer=()=>{
  return(
    <div className="bg-[#02060C] text-white h-[300px] py-4 flex justify-center gap-[10rem]">
      <ul  className='list-none flex flex-col gap-8 w-20'>
        <li className='flex items-center'><img className="w-20"
          alt="App Logo"
          src={footerlogo}
          /><b>FoodZies</b></li>
        <li>© 2024 FoodZies by Ameya Awatade</li>
      </ul>
      <ul className='pt-5'>
        <li><b>Company</b></li>
        <li>About</li>
        <li>Team</li>
      </ul>
      <ul className='pt-5'>
        <li className='flex'><FaLocationDot className='text-center text-orange-500 self-center'/>&nbsp;Delivery across
        </li>
        <li>Solapur</li>
        <li>Pune</li>
        <li>Hyderabad</li>
      </ul>
    </div>
  )
}

export default Footer