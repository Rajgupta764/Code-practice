import React, { useEffect, useState } from 'react'

const Useeffects = () => {

    const [change,setChange]=useState(0);

    const handlechange=()=>{
        setChange(change+1);
    }

    // variation number 1
    // useEffect(()=>{
    //     alert("Hello i will render on every render")
    // },[])

    // variation number 2
    //   useEffect(()=>{
    //     alert("I will update when the value change")
    //   },[change])


    // variation number 3
    useEffect(()=>{
        alert("Count is updated")
        return()=>{
            alert("Removed from the ui")
        }
    })
  return ( 
    <div>
      
      <button onClick={handlechange}>click me</button>
      <br />
      Count is:{change}

    </div>
  )
}

export default Useeffects
