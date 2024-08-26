 "use client"; // This is a client component 👈🏽

// import { useState } from "react";
 
// import Link from 'next/link';
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { PiLeafFill } from "react-icons/pi";
import Togglebutton from './Togglebutton';
import { useState } from 'react';
const Righrside = () => {
  const [up,setUp]=useState(true)
  return (
    <nav className=" text-black p-4">
    <div className="container mx-auto flex justify-between items-center">
      
      <div  className=' flex justify-center items-center ml-6'>
        <div className=' flex justify-center items-center'>
             

        <PiLeafFill className=' text-2xl  text-cardborder'/>
            
       <h1 className=' ml-5 text-3xl font-bold text-green-400'>Bluten</h1>
        </div>
      </div>
      
      <div className=" mr-8 flex justify-center space-x-6 items-center">
       <div>
        <input type="text" placeholder='Search...' className='  px-3 p-2  bg-slate-200 rounded-full' />

       </div>
       <div className='rounded-sm capitalize bg-company flex justify-center items-center'> 
        <p className=' p-2  '>Sortieren nach</p>
        {
          up ? <MdKeyboardArrowDown onClick={()=>setUp(!up)} className=' text-2xl cursor-pointer'/> :
       <MdKeyboardArrowUp onClick={()=>setUp(!up)} className=' text-2xl cursor-pointer'/>
        }
       </div>
       <div className=' flex justify-center items-center bg-company'>
         <p className=' rounded-sm p-2 capitalize bg-lue-500'>Verfügbarkeit</p>
          
         <Togglebutton />

       
       </div>
       <div className=''>
       <AiOutlineMenuUnfold className=' bg-company text-4xl' />
       </div>
      </div>
    </div>
  </nav>
  )
}

export default Righrside