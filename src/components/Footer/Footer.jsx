import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className="f-wrapper">
        <div className="paddings fullWidth flexCenter f-container">
            <div className="flexColStart f-left">
                <img src="./realz-white.jpg" alt="logo" width={120}/>
                <span className="secondaryText">
                    Our vision is to make all people <br/> 
                    the best place to live for them.
                </span>
            </div>
            <div className="flexColStart f-right">
                <span className="primaryText">Information</span>
                <span className='secondaryText'>Marikina, Philippines</span>
                <div className="flexCenter f-menu">
                    <span>Property</span>
                    <span>Services</span>
                    <span>Products</span>
                    <span>About Us</span>
                </div>
            </div>
        </div>
    </div>
  )
}
