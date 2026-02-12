import React, { useState } from 'react'

const App = () => {

  const [count,setCount]=useState(0);

  let incr=()=>{
    if(count>0){
      setCount(count-1);
    }
  }

  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>incr()}>Decrement</button>
    </div>
  )
}

export default App
