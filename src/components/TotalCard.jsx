'use client'
import React, { useState } from 'react'
import { Medicine } from './Data'
import Card from './Card'
import PriceSlider from './PriceRange'
import RangeSlider from './Reactslider'

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

      
    </div>
  )
}

export default TotalCard
