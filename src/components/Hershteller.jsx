'use client'

import React, { useState } from 'react'
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
const Hershteller = () => {
    const [isopen,setopen]=useState(true)
  return (
    <div className=' flex flex-col justify-center items-center mt-5'>
        <div className='  w-3/4 flex justify-between items-center space-x-2'>
        <h1 className=' text-curvebtext'>Hersteller</h1> 
        {
          isopen ? <MdKeyboardArrowDown onClick={()=>setopen(!isopen)} className=' mr-0 text-2xl cursor-pointer'/>:
        <MdKeyboardArrowUp onClick={()=>setopen(!isopen)} className=' mr-0 text-2xl cursor-pointer'  />
        }
        </div>
        <div className=' mt-5 flex w-full flex-col justify-center items-center'>
            {
                isopen ? 
        <form action="" className=' flex flex-col mr-5 justify-start'>
            <div>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className=' border-company'/>
        <label htmlFor="vehicle1"> ADREXpharma</label>

            </div>
            <div>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
        <label htmlFor="vehicle1"> Aurora</label>

            </div>
            <div>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
        <label htmlFor="vehicle1"> Avaay</label>

            </div>
            <div>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
        <label htmlFor="vehicle1"> Bedrocan</label>

            </div>
            <div>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
        <label htmlFor="vehicle1"> Cannamedical</label>

            </div>
        </form>
        :" "
            }
        <div className=' w-full mt-4'>
        <button className=" w-full text-blue-400 border-2  border-curve px-5  squre py-2  rounded-t-sm shadow-md hover:shadow-lg transition-shadow duration-300">
        mehr anzeigen
    </button>

        <div className='mt-3 h-1 border bg-blue-200'>
       
        </div>
        </div>
        
        </div>
        
    </div>
  )
}

export default Hershteller