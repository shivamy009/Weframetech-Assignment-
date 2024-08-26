import React from 'react'
import ThcCbd from './ThcCbd'
import { MdKeyboardArrowUp } from "react-icons/md";

const LastCommon = () => {
  return (
    <div>
        <ThcCbd name="THC Gehalt"/>
        <ThcCbd name="CBD Gehalt "/>
        <div className=' w-full flex flex-col justify-center items-center'>
            <h1 className='text-curvebtext font-semibold'>Genetik</h1>
            <div className=' w-full flex justify-center items-center space-x-4 mt-3'>
                <button className=' rounded-sm px-2 py-1 bg-company'>Indica</button>
                <button className=' rounded-sm px-2 py-1 bg-blue-300'>Sativa</button>
                <button className=' rounded-sm px-2 py-1 bg-blue-300'>Hybrid</button>
                
            </div>
            <div className=' w-full mb-3 mt-3 h-1 border bg-blue-200'>
       
           </div>

            <h1 className=' text-curvebtext font-semibold'>Bestrahltung</h1>
            <div className=' w-full flex justify-center items-center space-x-4 mt-3'>
                <button className=' rounded-sm px-2 py-1 bg-company'>bestrahit</button>
                <button className=' rounded-sm px-2 py-1 bg-blue-300'>nicht bestrahit</button>
                {/* <button className=' rounded-sm px-2 py-1 bg-blue-200'>Indica</button> */}
                
            </div>
            <div className=' w-full mb-3 mt-3 h-1 border bg-blue-200'>
           
           </div>
            <div className=' flex justify-between items-center'>
                <h1 className='mt-5 mb-5 text-curvebtext font-semibold'>Terpine</h1>
                 <MdKeyboardArrowUp className=' ml-20'/>
            </div>
        </div>
    </div>
  )
}

export default LastCommon