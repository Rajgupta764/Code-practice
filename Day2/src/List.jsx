import React, { useState } from 'react'
import './List.css'

const List = () => {

    const [input,setInput]=useState('');
    const [list,setList]=useState([]);

    let add=()=>{
        setList([...list,input])
        setInput('');
    }

  return (
    <div className='lists'>
      <h1>Simple todo list</h1>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Enter your todo here...' />
      <button onClick={add}>Add</button>

       <ul>
        {list.map((list,index)=>{
           return <li key={index}>{list}</li>
        })}
       </ul>
    </div>
  )
}

export default List
