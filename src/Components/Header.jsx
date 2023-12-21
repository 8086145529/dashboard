import React from 'react'
import logo from '../assests/logo2.png'
import discicon from '../assests/Discicon.png'
function Header() {
  return (
    <div className='header'>
        <div className='logo'>
        <img width={'80px'} src={logo} alt="logo" />
        </div>
        <div className='menu-icon'>
        <i class="fa-solid fa-bars fa-2xl"></i>
        </div>
        <div className='head'>
          <img src={discicon}/>
          <h3>XYZ Enterprises Pvt.Ltd</h3>
            <select className='dropdown'>
            <option></option>
            <option>About</option>
            <option>Contact us</option>
          </select>
        </div>
    </div>
  )
}

export default Header