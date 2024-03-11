import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
const NavBar = () => {
  return (
    <div>
<header>
    <div className="container">
        <div className="logo"><NavLink to='/'  activeClassName="activeLink" className="navLink">VisitIndia</NavLink></div>
        <nav>
            <ul>
            <li><NavLink to="/Home1"  activeClassName="activeLink" className="navLink">Home</NavLink></li>
            <li><NavLink to='/about'  activeClassName="activeLink" className="navLink">About</NavLink></li>
            <li><NavLink to='/contact'  activeClassName="activeLink" className="navLink">ContactUs</NavLink></li>
            <li><NavLink to='/login'  activeClassName="activeLink" className="navLink">Login</NavLink></li>
            <li><NavLink to='/Register'  activeClassName="activeLink" className="navLink">Register</NavLink></li>
            </ul>
        </nav>
    </div>
</header>

    </div>
  )
}

export default NavBar