import React from 'react'
import { NavLink } from 'react-router-dom'
import '../NavBar.css'
const NavBar = () => {
  return (
    <div>
<header>
    <div className="container">
        <div className="logo"><NavLink to='/UserDashBoard'  activeClassName="activeLink" className="navLink">VisitIndia</NavLink></div>
        <nav>
            <ul>
            <li><NavLink to="/UserDashboard"  activeClassName="activeLink" className="navLink">Home</NavLink></li>
            <li><NavLink to='/'  activeClassName="activeLink" className="navLink">Logout</NavLink></li>
            
            </ul>
        </nav>
    </div>
</header>

    </div>
  )
}

export default NavBar