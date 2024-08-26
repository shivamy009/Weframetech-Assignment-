'use client'

import Hershteller from "./Hershteller"
import LastCommon from "./LastCommon"
import Multislider from "./Multislider"

 Multislider
const Filter = () => {
  return (
    <div className=' border-2 border-blue-800   flex flex-col '>
        <div className=' flex justify-center items-center  bg-slate-200'>
         <h1 className=' text-company  text-2xl'>Filter</h1>

        </div>
        <div className=' mt-6 flex flex-col justify-center items-center'>
            <h1>Presis</h1>
            <Multislider/>
        </div>
        <div>
         <Hershteller/>
         <LastCommon/>
        </div>
    </div>
  )
}

export default Filter