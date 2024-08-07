import React from 'react'
import '../css/Navbar.css'
function Navbar() {
  return (
    <div className='navbar'>
        <div className='link'>
            <a href='/'>Home</a>
            <a href='/'>About</a>
            <a href='/'>Support</a>
            <a href='/'>Profile</a>
        </div>
    </div>
  )
}

export default Navbar