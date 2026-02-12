import React, { useState } from 'react'
import './Controlinput.css'

const Controlinput = () => {

  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  return (
    <div>
        <h1>Input Control</h1>
      <form >
          <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder='Enter your name'/>
          <br /><br />
          <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder='Enter your email'/>
          <br /><br />
          <input type="text" value={password} onChange={(event)=>setPassword(event.target.value)} placeholder='Enter your password'/>
          <br /><br />
          <h3>{name}</h3>
          <h3>{email}</h3>
          <h3>{password}</h3>
          <button >submit</button>
          <button onClick={()=>{setName(''); setEmail('');setPassword('')}}>Clear</button>
      </form>
    </div>
  )
}

export default Controlinput
