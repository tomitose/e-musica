import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
        <nav className='nav-container'>
            <h1 className='logo'>Proyecto</h1>
            <ul className='nav-items'>
                <li className='nav-items-li'>About us</li>
                <li className='nav-items-li'>Last Items</li>
                <li className='nav-items-li'>Log in</li>
            </ul>
        <CartWidget/> 
        </nav> 
    </div>
    
  )
}

export default Navbar