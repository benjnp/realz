import React, {useState} from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler/build/OutsideClickHandler'

export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  function getMenuStyles(isOpen) {
    if(document.documentElement.clientWidth <= 768) 
      return {right: !isOpen && "-100%"}
  }

  return (
    <div className="h-wrapper">
        <div className="h-container flexCenter fullWidth">
            <img src="./realzTP.png" alt="logo" width="100" />
            <OutsideClickHandler onOutsideClick={() => setIsOpenMenu(false)}>
            <div className="flexCenter h-menu" style={getMenuStyles(isOpenMenu)}>
                <a href="">Residences</a>
                <a href="">Our Values</a>
                <a href="">Contact Us</a>
                <a href="">Get Started</a>
                <button className="button">
                    Contact Us
                </button>
            </div>
            <div className="menu-icon" onClick={() => setIsOpenMenu(prev => !prev)}>
              <BiMenuAltRight size={30} />
            </div>
            </OutsideClickHandler>
            
        </div>
        
    </div>
  )
}
