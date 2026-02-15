import React, { useState } from 'react'
import './style.css'

const Todo = () => {

    const [input,setInput]=useState('');
    const [list,setList]=useState([]);

    const handle=()=>{
        setList([...list,input]);
        setInput('');
    }

    const del=()=>{
        setList([''])
    }

  return (
    <div className='container'>
      <h1>Write your toddo list</h1>
      <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} placeholder='Enter your todo here...' />
      <button onClick={handle}>+add</button>
      

      <ul>
         {list.map((list,index)=>{
           return  <p key={index}>{list}</p>
         })}
      </ul>
      <button className='del' onClick={del}>delete</button>
    </div>
  )
}

export default Todo
