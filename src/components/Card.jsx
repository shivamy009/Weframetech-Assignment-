import React from 'react'

const Card = ({uppertag,image,company,contiontration1,contiontration2,description,price,programm,kutvivar,curvebutton}) => {
  return (
    <div className=' flex flex-col justify-center items-center border border-cardborder w-80 squrecard mb-5'>
          <h1 className=' text-start text-uppertag bg-red-200 rounded-full mt-3 px-3'>{uppertag}</h1>
         <div className=' w-full flex  justify-center items-center p-3'>
          <img src={image} className=' w-50 h-32' alt="" />
         </div>
          

         <div className=' flex flex-col  boxshadow bg-cardbg w-full halfsqure'>
         <div className=' ml-10 mt-2'>
          <button className=' bg-company px-4 rounded-sm'>
           {company}
          </button>
         </div>

         <div className=' flex justify-center items-center mb-3 mt-3'>
         <button className=' mr-5 bg-white px-5 rounded-sm'>
         THC {contiontration1}%
          </button>
          <button className=' ml-5 bg-cbd px-5 rounded-sm'>
          CBD  {contiontration2}%
          </button>
         </div>
         <div className=' flex ml-10 items-center mt-1'>
          <p className=' text-desc'>{description}</p>
         </div> 
         <div className=' flex ml-10 mt-2 items-center '>
          <p className=' mr-7'>{kutvivar}</p>
          <p className=' ml-7'>{curvebutton}</p>
         </div>
         <div className=' flex mt-4 ml-10 items-center mb-3'>
          <div className=' flex flex-col'>

          <p className=' text-desc font-bold text-2xl'>€  {price}</p>
          <p className=' text-sm'>Programm</p>
          </div>
          <div>
          <button className=" ml-2 mx-2 text-curvebtext bg-curve  px-4  squre py-2  rounded-t-sm shadow-md hover:shadow-lg transition-shadow duration-300">
      in den Werenkob
    </button>
          </div>
         </div>
         </div>
    </div>
    // <div className=' flex flex-col justify-center items-center border border-red-700 w-80 squrecard mb-5'>
    //       <h1 className=' text-start mt-0'>upper tag</h1>
    //      <div className=' w-full flex  justify-center items-center p-3'>
    //       <img src="https://pics.walgreens.com/prodimg/654132/450.jpg" className=' w-50 h-32' alt="" />
    //      </div>
          
    //      <div className=' flex flex-col bg-cardbg w-full halfsqure'>
    //      <div className=' ml-10 mt-2'>
    //       <button className=' bg-company px-4 rounded-sm'>
    //         Canify
    //       </button>
    //      </div>
    //      <div className=' flex justify-center items-center mb-3 mt-3'>
    //      <button className=' mr-5 bg-white px-5 rounded-sm'>
    //       button1
    //       </button>
    //       <button className=' ml-5 bg-blue-400 px-5 rounded-sm'>
    //      button2
    //       </button>
    //      </div>
    //      <div className=' flex ml-10 items-center mt-1'>
    //       <p>hello i am shivam yadav</p>
    //      </div> 
    //      <div className=' flex ml-10 mt-2 items-center '>
    //       <p className=' mr-7'>Mango</p>
    //       <p className=' ml-7'>Banana</p>
    //      </div>
    //      <div className=' flex mt-4 ml-10 items-center mb-3'>
    //       <p>$123</p>
    //       <div>
    //       <button className=" ml-12 mx-2 text-blue-400 bg-custom-yellow  px-4  squre py-2  rounded-t-sm shadow-md hover:shadow-lg transition-shadow duration-300">
    //   in den Werenkob
    // </button>
    //       </div>
    //      </div>
    //      </div>
    // </div>
  )
}

export default Card