import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const App = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [userinfo, setUserinfo] = useState();
  
  const onSubmit = (data) => {
    setUserinfo(data);
  }

  return (
    <div className='container'>
      <pre>{JSON.stringify(userinfo, undefined, 2)}</pre>
      <h1>Register Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="ui-form">
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            id="username"
            placeholder='Enter your username'
            {...register('username', { required: true })}
          />
          {errors.username && <span className="error">Username is required</span>}
        </div>

        <div className="ui-form">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email"
            placeholder='Enter your email'
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && <span className="error">Valid email is required</span>}
        </div>

        <div className="ui-form">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password"
            placeholder='Enter your password'
            {...register('password', { required: true, minLength: 6 })}
          />
          {errors.password && <span className="error">Password must be at least 6 characters</span>}
        </div>

        <button type="submit" className="submit-btn">Register</button>
      </form>
    </div>
  )
}

export default App
