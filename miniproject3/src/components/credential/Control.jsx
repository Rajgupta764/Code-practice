import React from 'react'
import { useState } from 'react'
import Register from './Register';
import Login from './Login';

const Control = () => {

    const [log,setLog]=useState(false);
    const handle=()=>{
        setLog(!log);
    }

  return (
    <div>
      <button onClick={handle}>{log?<Register/>:<Login/>}</button>
    </div>
  )
}

export default Control
