import React from 'react'
import './form.css'
import { useState } from 'react'

const Form = () => {

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');

    const handlesubmit=()=>{
        alert("form submitted succefully")
    }

    const handle=(e)=>{
        e.preventDefault();
    }

  return (
    <form onSubmit={handle}  className='form'>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}  placeholder='Enter your name'/>
        <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter your email'/>
        <input type="password" placeholder='Enter your password '/>
        <button onClick={handlesubmit}>submit</button>

    </form>
  )
}

export default Form
