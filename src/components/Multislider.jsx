'use client'
import React, { useState } from 'react';
import Slider from 'react-slider';
import RangeSlider from './Reactslider';

const Multislider = () => {
  const [range, setRange] = useState(50);
  const [values, setValues] = useState([0, 100]);
  const handleChange = (newValues) => setValues(newValues);

  return (
    // <div className='slidecontainer mt-5 flex flex-col justify-center items-center'>
    //      <input className=' w-52' type="range" min="0" max="100" onChange={(e)=>setRange(e.target.value)}></input>
    //      <p className=' ml-3'>{range}</p>
    //      <div className=' mt-3 h-1 border bg-blue-400 m-2'>

    //      </div>
    // </div>
    <div className=' w-16 mt-5 flex flex-col justify-center items-center'>
 <RangeSlider/>
    </div>
  );
};

export default Multislider;
