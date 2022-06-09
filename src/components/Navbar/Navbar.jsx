import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className='nav-container-up'>
        <div className='logos-nav-up'>
          <img src="./img/Logos/Gibson_Guitar_logo.svg.png" alt="gibson" />
          <img src="./img/Logos/kramer-logo-color-black-bg-transparent.png" alt="kramer" />
          <img src="./img/Logos/krk_temp_footer_logo.png" alt="krk" />
          <img src="./img/Logos/Maestro_primary_black_v1.png" alt="maestro" />
        </div>
      </nav>
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