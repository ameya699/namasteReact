import React from 'react'
import footerlogo from "../images/footer-logo.png"

const Footer=()=>{
  return(
    <div className="footer-container">
      <ul>
        <li style={{display:"flex",alignItems:"center"}}><img className="footer-logo"
          alt="App Logo"
          src={footerlogo}
          />FoodZies</li>
        <li>Company</li>
        <li>Policy</li>
      </ul>
      <ul>
        <li>Our branches</li>
        <li>Company</li>
        <li>Policy</li>
      </ul>
      <ul>
        <li>Our branches</li>
        <li>Company</li>
        <li>Policy</li>
      </ul>
    </div>
  )
}

export default Footer