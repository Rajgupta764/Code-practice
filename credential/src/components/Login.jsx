import React from 'react'
import './style.css'

const Login = () => {
  return (
    <div className='container'>
      <h1>This is the login page</h1>
      <input type="text" placeholder='Enter your email..'/>
      <input type="password" placeholder='Enter your password..'/>
      <button>Login</button>
    </div>
  )
}

export default Login
