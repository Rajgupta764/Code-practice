import React, { useEffect, useState } from 'react'

const Createclock = () => {

    const [time,setTime]=useState(0);
    useEffect(()=>{
        const t=setInterval(() => {
            setTime(prev=prev+1)
        }, 1000);

        return (()=>{
            clearInterval(t)
        })
    })

  return (
    <div>
      <h1>This is my simple clock by using the useeffect</h1>
      <h2>Count:{time}</h2>
    </div>
  )
}

export default Createclock
