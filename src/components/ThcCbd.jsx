'use client'

import React, { useState } from 'react'
import RangeSlider from './Reactslider';

const ThcCbd = ({name}) => {
    const [range, setRange] = useState(50);
  return (
    <div className=' flex flex-col justify-center items-center mt-4'>
        <h1>{name}</h1>
         <div className='slidecontainer mt-5 flex flex-col justify-center items-center'>
        <RangeSlider/>
         <div className=' mt-3 h-1 border bg-blue-400 m-2'>

         </div>
    </div>
    </div>
  )
}


export default ThcCbd