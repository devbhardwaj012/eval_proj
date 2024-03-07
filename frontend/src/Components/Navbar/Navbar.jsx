import React from 'react'
import './Navbar.css'
import  {Link}  from "react-router-dom";


const Navbar = () => {

  return (
    <nav class="navbar">
      <div class="container">
        <Link href="#" class="logo">REVUE</Link>
        <ul class="nav-links">
          <li><Link to ="/">         Home</Link></li>
          <li><Link to ="/products"> Products</Link></li>
        </ul>
      </div>
    </nav>
)
}


export default Navbar ;