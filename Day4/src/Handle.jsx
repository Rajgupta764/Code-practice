import React, { useState } from 'react'

const Handle = () => {
    const ban=(name)=>{
        alert(name)
    }
    const man=()=>{
        alert("Mango")
    }

    const handlemove=()=>{
      alert("Mouse moving")
    }

    const [name,setName]=useState('');
  return (
    <div>
      <h1>simple handling the event</h1>
      <button onClick={()=>{ban("Orange")}}>Banana</button>
      <button onClick={man}>Mango</button>
      <p onMouseMove={handlemove}>Mouse move</p>

      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter your name..'/>
      <p>{name}</p>
      <button onClick={()=>{setName('')}}>clear</button>
      
    </div>
  )
}
export default Handle
