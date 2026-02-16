import React from 'react'
import './nav.css'
import {Link} from 'react-router-dom'
import Theme from '../theme/Theme'

const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className="name">
        <h1>Mini Project</h1>
      </div>
      <div className="contents">
        <Link to={"/"}>Login</Link>
        <Link to={"/register"}>Register</Link>
        <Link to={"/todo"}>Todo</Link>
        <Link to={"/language"}>Language</Link>
        <Theme compact />
      </div>
    </div>
  )
}

export default Navbar
