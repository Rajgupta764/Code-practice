import React from 'react'
import './style.css'

const Register = () => {
  return (
    <div className="page">
      <div className='auth-card'>
        <h2>Create account</h2>
        <p className="auth-subtitle">Join the mini project</p>
        <input type="text" placeholder='Enter your name..'/>
        <input type="text" placeholder='Enter your email..'/>
        <input type="password" placeholder='Enter your password'/>
        <button>Register</button>
      </div>
    </div>
  )
}

export default Register
