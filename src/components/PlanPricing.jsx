import React, { useState } from 'react'
import offerPlan from "../assets/freeText.svg"
const PlanPricing = () => {
  const [planChosen, setPlanChosen] = useState(true)
  //false for month and true for year
  return (
    <div className='flex mx-2 sm:mx-7 justify-between  flex-col sm:flex-row mt-10'>
      <h1 className='text-[40px] text-start sm:text-center' >Plans & Pricing</h1>
      <div className='flex justify-between sm:items-center  sm:ml-10 mt-7 sm:mt-0'>
        <div className={`sm:mx-3 text-[1.5rem] `+`${planChosen?'opacity-75':null}`}>MONTHLY</div>
        <div className='z-[1]  relative w-16 p-1 h-10 bg-[#00b289] rounded-full flex !cursor-pointer' onClick={() => { setPlanChosen((val) => !val);console.log("me") }} >
          <div className={`w-1/2 h-3/4 bg-white rounded-full absolute bottom-1 mx-1 `+`${planChosen?'left-0':'right-0'}`}></div>
          {/* <input  className='w-full' type={'range'} value={planChosen ? 1 : 0} min={0} max={1} ></input> */}
        </div>
        <div className={`sm:mx-3 text-[1.5rem] `+`${!planChosen?'opacity-75':null}`}>YEARLY</div>

        <img src={offerPlan} alt="offer" className='relative bottom-7 right-[6rem]' />

      </div>
    </div>
  )
}

export default PlanPricing