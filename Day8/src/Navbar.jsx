import React from 'react'
import { Link } from 'react-router-dom'
import Theme from './theme/Theme'

const Navbar = () => {
  return (
    <div className='nav'>
      <Theme/>
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <Link to={'/contact'}>Contact</Link>
    </div>
  )
}

export default Navbar
