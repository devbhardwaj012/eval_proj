import React from 'react'
import './Navbar.css'
import cart_icon from '../Assets/cart_icon.png'
import ubus from '../Assets/ubus.png'

 const Navbar = () => {

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={ubus} alt="" />
            <p>UB&US</p>
        </div>

        <ul className ="nav-menu">
            <li>Shop <hr /></li>
            <li>latop</li>
            <li>bicycle</li>
            <li>smartphone</li>
        </ul>

        <div className="nav-login-cart">
            <button>Login</button>
            <img src={cart_icon} alt="" />
        </div>

    </div>
  )
}


export default Navbar ;
