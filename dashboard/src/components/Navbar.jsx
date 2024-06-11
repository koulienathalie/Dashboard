import React from 'react'
import { TiUserOutline } from "react-icons/ti";
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div>
        <button className='navbar-login-btn'>
        <TiUserOutline />
        </button>
    </div>
  )
}

export default Navbar