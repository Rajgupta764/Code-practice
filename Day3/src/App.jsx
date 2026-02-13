import React from 'react'
import { useState } from 'react'

const App = () => {

  const [input,setInput]=useState();
  const [items,setItems]=useState([]);

  const add=()=>{
    setItems([...items,input]);
    setInput('');
  }
  return (
    <div>
      <h1>Simple todo list </h1>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Enter your todo here..' />
      <button onClick={add}>add</button>

      <ul>
        {items.map((items,index)=>{
          return <h1 key={index}>{items}</h1>
        })}
      </ul>
    </div>
  )
}

export default App
