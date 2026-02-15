import React from 'react'


const Register = () => {
  return (
    <div  className='container'>
      <h1>This is the register page</h1>
      <input type="text" placeholder='Enter your name..' />
      <input type="text" placeholder='Enter your email..'/>
      <input type="password" placeholder='Enter your password..'/>
      <button>Register</button>
    </div>
  )
}

export default Register
