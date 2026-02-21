import React, { useState } from 'react'
import './todo.css'

const Todo = () => {

  const [inpupt,setInput]=useState('');
  const [list,setList]=useState([]);

  const add=()=>{
    setList([...list,inpupt]);
    setInput('');
  }

  return (
    <div className="todo">
      <h1 className="todo__title">This is my simple todo list here</h1>
      <div className="todo__controls">
        <input
          className="todo__input"
          type="text"
          value={inpupt}
          onChange={(e)=>{setInput(e.target.value)}}
          placeholder='Enter your todo here'
        />
        <button className="todo__add" onClick={add}>+Add</button>
      </div>

      <ul className="todo__list">
        {list.map((list,index)=>{
               return <li className="todo__item" key={index}>{list}</li>
        })}
      </ul>
    </div>
  )
}

export default Todo
