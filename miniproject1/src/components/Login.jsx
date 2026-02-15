import React from 'react'
import './login.css'

const Login = () => {
  return (
    <div className='login'>
      <h1>Welcome to login page</h1>
      <input type="text" placeholder='Enter your email..'/>
      <input type="password" placeholder='Enter your password..'/>
      <br />
      <button>Login</button>
    </div>
  )
}

export default Login
