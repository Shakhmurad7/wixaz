import React from 'react'
import Navbar from '../NavBar/navbar'

function Header() {
  return (
    <>
    <div className="hader-container">
      <div className="header-right">
        <img src='./imgs/Cobify 3.jpg' />
        <Navbar/>
      </div>
    </div>
    </>
  )
}

export default Header