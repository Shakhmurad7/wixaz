import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
        <>
        <Link to={"/"} >
            <h2>homer</h2>
        </Link>
        <Link to={"/about"} >
            <h2>about</h2>
        </Link>
        </>
  )
}

export default Navbar