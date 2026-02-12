import React, { useState } from 'react'

const Counter = () => {


    const [num,setNum]=useState(0);

    let incre=()=>{
        setNum(num+1);
    }

    let reset=()=>{
        setNum(0);
    }
    let dec=()=>{
        if(num>0){
            setNum(num-1);
        }
    }


  return (
    <div>
      <h1>This is my counter</h1>
      <h2>Numer:{num}</h2>
      <button onClick={incre}>Increment</button>
      <button onClick={reset}>Reset</button>
      <button onClick={dec}>Decrement</button>
    </div>
  )
}

export default Counter
