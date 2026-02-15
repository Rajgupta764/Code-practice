import React, { useState } from 'react'
import '../list/style.css'

const Password = () => {

    const [show,setShow]=useState(false);
    const handle=()=>{
        setShow(!show)
    }

  return (
    <div className='container'>
       <input type={show?'text':'password'} placeholder='Enter your password'/>
       <button onClick={handle}>{show?"hide":"show"}</button>
    </div>
  )
}

export default Password
