import React from 'react'
import { useState } from 'react'
import Register from './components/Register';
import Login from './components/Login';

const App = () => {

  const [loged,setLoged]=useState(false);
  const handle=()=>{
    setLoged(!loged)
  }

  return (
    <div>
      <button onClick={handle}>{loged?<Register/>:<Login/>}</button>
    </div>
  )
}

export default App
