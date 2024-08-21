import React from 'react'
import footerlogo from "../images/footer-logo.png"
import { FaLocationDot } from "react-icons/fa6";


const Footer=()=>{
  return(
    <div className="footer-container">
      <ul style={{display:'flex',rowGap:"1rem"}}>
        <li style={{display:"flex",alignItems:"center"}}><img className="footer-logo"
          alt="App Logo"
          src={footerlogo}
          /><b>FoodZies</b></li>
        <li>© 2024 FoodZies by Ameya Awatade</li>
      </ul>
      <ul style={{paddingTop:"1.2rem"}}>
        <li><b>Company</b></li>
        <li>About</li>
        <li>Team</li>
      </ul>
      <ul style={{paddingTop:"1.2rem"}}>
        <li><b>Delivery across&nbsp;<FaLocationDot style={{textAlign:'center',color:'orange'}}/>
        </b></li>
        <li>Solapur</li>
        <li>Pune</li>
        <li>Hyderabad</li>
      </ul>
    </div>
  )
}

export default Footer