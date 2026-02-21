
import React, { useEffect, useState } from 'react'

const Clock = () => {

    const [count,setCount]=useState(0);
    useEffect(()=>{
        const time=setInterval(() => {
            setCount(prev=>prev+1)
        }, 1000);

        return()=>{
            clearInterval(time);
        }
    },[])

  return (
    <div>
      <h1>This is my simple clock</h1>
      <br />
      <h1>Clock:{count}</h1>

    </div>
  )
}

export default Clock
