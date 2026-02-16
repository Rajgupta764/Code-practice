import React, { useState } from 'react'
import './style.css'

const Todo = () => {

    const [input,setInput]=useState('');
    const [list,setList]=useState([]);

    const add=()=>{
        setList([...list,input]);
        setInput('');
    }

  return (
    <div className="page">
      <div className='todo-card'>
        <div className="todo-header">
          <h2>Todo studio</h2>
          <span>{list.length} items</span>
        </div>
        <input
          type="text"
          value={input}
          onChange={(e)=>{setInput(e.target.value)}}
          placeholder='Enter your todo here..'
        />
        <button onClick={add}>Add task</button>

        <ul className="todo-list">
          {list.map((list,index)=>{
              return <li key={index}>{list}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default Todo
