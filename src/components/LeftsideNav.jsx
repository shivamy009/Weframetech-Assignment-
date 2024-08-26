'use cliennt'
import React from 'react'
// import React from 'react';
import Link from 'next/link';
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
// import LeftsideNav from './LeftsideNav';
// import "./globals.css";

const LeftsideNav = () => {
  return (
    
      <nav className=" text-black p-4">
    <div className="container mx-auto flex justify-between items-center">
      
      <div  className=' flex justify-center items-center ml-6'>
       <div className="hidden md:flex items-center">
       
        <div className=' flex justify-center text-blue-400 items-center'>
        <Link href="/" className="hover:text-gray-300">Home</Link>
        {/* <MdOutlineArrowRightAlt /> */}

        </div>
        <div className=' flex justify-center ml-3 text-blue-400  items-center'>
        {/* <Link href="/" className="hover:text-gray-300">Features</Link> */}
        <MdOutlineArrowRightAlt />

        </div>
        <div className=' flex justify-center ml-3 text-blue-400 items-center'>
        <Link href="/" className="hover:text-gray-300">Live Bestand</Link>
        {/* <MdOutlineArrowRightAlt /> */}

        </div>
        <div className=' flex justify-center ml-3 text-blue-400 items-center'>
        {/* <Link href="/" className="hover:text-gray-300">Features</Link> */}
        <MdOutlineArrowRightAlt />

        </div>
        <div className=' flex justify-center ml-3 text-blue-900 font-bold items-center'>
        {/* <MdOutlineArrowRightAlt /> */}
        <Link href="/" className="hover:text-gray-300">Cannabies Blueten</Link>

        </div>
      
      </div>
      </div>
      
      <div className="space-x-2 mr-8 flex justify-center items-center">
      <div className=' flex flex-col justify-center items-center'>
      <div className=' mb-2'>
        GKV mit Kostenubernahme?
      </div>
      <button className=" text-blue-400 border-[3px] px-20 border-blue-400 squre py-2  rounded-t-sm shadow-md hover:shadow-lg transition-shadow duration-300">
      Preisoptionen
    </button>
      </div>
      </div>
    </div>
  </nav>
    
  )
}

export default LeftsideNav