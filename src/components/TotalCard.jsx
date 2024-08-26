'use client'
import React, { useState } from 'react'
import { Medicine } from './Data'
import Card from './Card'
import PriceSlider from './PriceRange'
import RangeSlider from './Reactslider'
import { IoArrowBackOutline } from "react-icons/io5";
import { IoMdArrowRoundForward } from "react-icons/io";

const TotalCard = () => {
    console.log(Medicine)
  return (
    <div className=' ml-10 w-full grid grid-cols-3   '>
   {
    Medicine.map((data,key)=>{
      return(
       <Card key={key} uppertag={data.uppertag} image={data.image} company={data.company} contiontration1={data.contiontration1} contiontration2={data.contiontration2} price={data.price} programm={data.programm} description={data.description} kutvivar={data.kutvivar} curvebutton={data.curvebutton}/>
      )
    })
   }
<div className=' flex justify-start space-x-5 items-center mb-5 cursor-pointer'>
    <IoArrowBackOutline/>
    <h1 className=''>1</h1>
    <h1>2</h1>
    <h1>3</h1>
    <h1>...</h1>
    <h1>12</h1>
    <IoMdArrowRoundForward/>
   </div>
      
    </div>
  )
}

export default TotalCard
