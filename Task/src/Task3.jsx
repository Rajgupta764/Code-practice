import React from 'react'
import { useState } from 'react'

const Task3 = () => {

    const [show,setShow]=useState(false);
   
    const handletoggle=()=>{
        setShow(!show)
    }

  return (
    <div>
      <h1>Simple password toggle</h1>
      <input type={show?"text":"password"} placeholder='Enter your password'/>

      <button onClick={handletoggle}>{show?"Hide":"show"}</button>
    </div>
  )
}

export default Task3
