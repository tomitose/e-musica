import React from 'react'
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
        <header className='header-container'>
            <h1 className='logo'>Proyecto</h1>
            <ul className='nav-items'>
                <li className='nav-items-li'>About us</li>
                <li className='nav-items-li'>Last Items</li>
                <li className='nav-items-li'>Log in</li>
            </ul>
        </header>
    </div>
  )
}

export default Navbar