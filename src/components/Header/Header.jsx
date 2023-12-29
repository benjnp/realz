import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div className="h-wrapper">
        <div className="h-container flexCenter fullWidth">
            <img src="./realzTP.png" alt="logo" width="100" />
            <div className="flexCenter h-menu">
                <a href="">Residences</a>
                <a href="">Our Values</a>
                <a href="">Contact Us</a>
                <a href="">Get Started</a>
                <button className="button">
                    Contact Us
                </button>
            </div>
        </div>
    </div>
  )
}
