import React from 'react'
import './style.css'

const Login = () => {
  return (
    <div className="page">
      <div className='auth-card'>
          <h2>Welcome back</h2>
          <p className="auth-subtitle">Sign in to continue</p>
          <input type="text"  placeholder='Enter your email..'/>
          <input type="password" placeholder='Enter your password..'/>
          <button>Login</button>
      </div>
    </div>
  )
}

export default Login
