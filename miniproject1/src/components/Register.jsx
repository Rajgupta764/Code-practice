import React from 'react'

const Register = () => {
  return (
    <div className='login'>
      <h1>Welcome to Register page</h1>
      <input type="text" value={name} placeholder='Enter your name..' />
      <input type="text" placeholder='Enter your email..'/>
      <input type="password"  placeholder='Enter your password..'/>
      <br />
      <button>Register</button>
    </div>
  )
}

export default Register
