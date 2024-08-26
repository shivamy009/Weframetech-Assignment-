import React from 'react';
'use cliennt'
import Link from 'next/link';
import { PiLeafThin } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { PiLeafFill } from "react-icons/pi";
import { BsCart2 } from "react-icons/bs";
import LeftsideNav from './LeftsideNav';
const Navbar = () => {
    const style = { color: "blue", fontSize: "1.5em" }
  return (
    <>
    <nav className=" bg-purple-500 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      {/* <h1 className="text-xl font-bold">BookAI</h1> */}
      <div  className=' flex justify-center items-center ml-6'>
      <input type="text" placeholder='Search...' className=' h-10 rounded-full  bg-slate-300 text-black px-5'/>
      {/* <CiSearch className=' mr-7' /> */}
      </div>
      <div className="hidden md:flex space-x-8 items-center">
        <div className=' flex justify-center items-center'>
        <PiLeafFill className=' text-cardborder text-2xl' />
        <Link href="/" className="hover:text-gray-300 font-bold text-navbartext">Rezept einlösen</Link>

        </div>
        <div className=' flex justify-center items-center'>
      <PiLeafFill  className='  text-company text-2xl' />
        <Link href="/" className="hover:text-gray-300 text-navbartext">Live Bestand</Link>

        </div>
        <div className=' flex justify-center  items-center'>
      <PiLeafFill  className='  text-company text-2xl' />
        <Link href="/" className="hover:text-gray-300 text-navbartext">Videosprechstunde</Link>

        </div>
        <div className=' flex justify-center items-center'>
      <PiLeafFill  className='  text-company text-2xl   ' />
        <Link href="/" className="hover:text-gray-300 text-navbartext">FAQs</Link>

        </div>
        <div className=' flex justify-center items-center'>
      <PiLeafFill  className='  text-company text-2xl' />
        <Link href="/" className="hover:text-gray-300 text-navbartext">Kontakt</Link>

        </div>
      
      </div>
      <div className="space-x-2 mr-8 flex justify-center items-center">
        {/* <button className="bg-transparent border border-white py-2 px-4 rounded">Login</button> */}
        <BsCart2 className=' text-3xl text-cardborder mr-2 cursor-pointer' />
        <button className=" text-blue-400 bg-curve  px-10  squre py-2  rounded-t-sm shadow-md hover:shadow-lg transition-shadow duration-300">
        Anmelden
    </button>
      </div>
    </div>
  </nav>
{/*     
    <div className=' mt-10 ml-10'>
      <LeftsideNav/>
    </div> */}
    </>
  
  );
};

export default Navbar;
