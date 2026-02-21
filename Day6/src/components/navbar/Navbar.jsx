import React from 'react'
import './Nav.css'

const Navbar = () => {
  return (
    <div className='container'>
        <div className="heading">
            <h1>My App</h1>
        </div>

        <div className="contents">
            <li>Login</li>
            <li>Register</li>
            <li>Todo</li>
            <li>Contact</li>
        </div>
      
    </div>
  )
}

export default Navbar
