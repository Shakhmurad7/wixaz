import React from 'react'
import Navbar from '../NavBar/navbar'
import { IoIosGlobe } from "react-icons/io";


function Header() {
  return (
    <>
    <div className="hader-container">
      <div className="header-left">
        <img src='./imgs/Cobify 3.jpg' />
        <Navbar/>
      </div>

      <div className="header-right">
        <div className="header-left-row">
          <div className="IoIosGlobe ">
            <IoIosGlobe />
          </div>
            <p className='li-after' >log ln</p>
        </div>
          <p className='p-element'> Get Started</p>
      </div>

    </div>
    </>
  )
}

export default Header