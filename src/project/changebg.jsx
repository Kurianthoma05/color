import { View, Text  } from 'react-native'
import React, { useState } from 'react'

export default function Changebg() {
    const [color , setColor]=useState("BAFA01")

  return (
    <>
      <h2>BackgroungColor Change</h2>
      <div style={{width:"100%",height:"100vh", backgroundColor:color}}></div>
      <button className='btn btn1' onClick={()=>setColor("red")}>red</button>
      <button className='btn btn2' onClick={()=>setColor("blue")}>blue</button>
      <button className='btn btn2' onClick={()=>setColor("yellow")}>yellow</button>

    </>

   
  )
}