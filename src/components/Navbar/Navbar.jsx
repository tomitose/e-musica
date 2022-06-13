import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
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
            <Link to={"/"}><img className='guitar-logo' src='/guitar_logo.png' alt='logo'/></Link>
            <ul className='nav-items'>
                <Link to={"/"} className='nav-items-li'>Home</Link>
                <Link to={"/aboutus"} className='nav-items-li'>About us</Link>
                <Link to={"/category/merchandise"} className='nav-items-li'>Merchandise</Link>
            </ul>
        <CartWidget/> 
        </nav> 
    </div>
    
  )
}

export default Navbar