import React, { useState } from 'react'
import Register from './components/Register';
import Login from './components/Login';

const App = () => {

  const [isLogein,setLogedin]=useState(false);

  const handleclick=()=>{
    setLogedin(!isLogein);
  }

  return (
    <div>
      <button onClick={handleclick}>{isLogein?<Register/>:<Login/>}</button>
      
    </div>
  )
}

export default App
