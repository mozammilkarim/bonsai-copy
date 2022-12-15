import React, { useState } from 'react'
import offerPlan from "../assets/freeText.svg"
import Card from './Card'
const cardArray = [
  {
    title: "Website Audit",
    description: "Ideal for finding how much optimized your digital presence is, Get Complete Report in 3 Days.",
    features: [
      "SSL Verification",
      "Mobile Friendliness",
      "SEO Report",
      "Recommendation To Improve"
    ],
    offerPrice:"Free"
  },
  {
    title: "Maintenance",
    description: "Maintain an existing Website by doing changes as per Client needs and optimizations.",
    features: [
      "Everything in Website Audit plus...",
      "Detailed Discussion",
      "Free Hosting",
      "Free SSL",
    ],
    offerPrice:"Paid"
  },
  {
    title: "Development",
    description: "The perfect package for businesses and agencies looking for digital transformation.",
    features: [
      "Everything in Maintenance plus...",
      "Web Designing",
      "Web Development",
      "SEO optimization",
      "Website Copywriting"

    ],
    offerPrice:"Paid"
  }
]
 {/* <div className={`sm:mx-3 text-[1rem] text-center sm:text-[1.5rem] ` + `${planChosen ? 'opacity-50' : null}`}>MONTHLY</div>
          <div className='z-[1]  relative w-16 p-5 sm:p-1 h-10 bg-[#00b289] rounded-full flex !cursor-pointer' onClick={() => { setPlanChosen((val) => !val); console.log("me") }} >
            <div className={`w-1/2 h-3/4 bg-white rounded-full absolute bottom-1 mx-1 ` + `${planChosen ? 'left-0' : 'right-0'}`}></div>
          </div>
          <div className={`sm:mx-3 text-[1rem] text-center sm:text-[1.5rem] ` + `${!planChosen ? 'opacity-50' : null}`}>YEARLY</div> */}
            {/* <input  className='w-full' type={'range'} value={planChosen ? 1 : 0} min={0} max={1} ></input> */}
          
const PlanPricing = () => {
  const [planChosen, setPlanChosen] = useState(true)
  //false for month and true for year
  return (
    <>
      <div id='services' className='flex sm:px-10 px-3 justify-between  flex-col sm:flex-row pt-10'>
        <h1 className='text-[40px] text-start sm:text-center' >Our Services</h1>
        <div className='flex justify-between gap-3 items-center  sm:ml-10 mt-7 sm:mt-0'>
          <div className={`sm:mx-3 text-[1rem] text-center sm:text-[1.5rem] ` + `${!planChosen ? 'opacity-50' : null}`}>Free Consultation{"*"}</div>
          <img src={offerPlan} alt="offer" className='relative bottom-7 right-[6rem]' />

        </div>
      </div>
      {/* sm:grid-cols-2  */}
      <div className='grid grid-cols-1 lg:grid-cols-3 p-3 sm:p-10 gap-3 '>
        {cardArray.map((cardItem, index) => {
          return (

            <Card title={cardItem.title} offerPrice={cardItem.offerPrice} text={cardItem.description} features={cardItem.features} />
          )
        })}
      </div>
    </>

  )
}

export default PlanPricing