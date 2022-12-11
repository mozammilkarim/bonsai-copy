import React, { useState } from 'react'
import offerPlan from "../assets/freeText.svg"
import Card from './Card'
const cardArray = [
  {
    title: "Starter",
    description: "Ideal for freelancers and contractors just starting out.",
    monthPrice: 24,
    yearlyPrice: 17,
    features: [
      "All Templates",
      "Unlimited Clients & Projects",
      "Invoicing & Payments",
      "Proposals & Contracts",
      "Tasks & Time Tracking",
      "Client CRM",
      "Expense Tracking",
      "Up to 5 Project Collaborators"
    ]
  },
  {
    title: "Professional",
    description: "Everything a growing independent business needs to thrive.",
    monthPrice: 39,
    yearlyPrice: 32,
    features: [
      "Everything in Starter plus...",
      "Custom Branding",
      "Forms & Questionnaires",
      "Workflow Automations",
      "Client Portal",
      "Calendly Integration",
      "Zapier Integration",
      "Up to 15 Project Collaborators"
    ]
  },
  {
    title: "Business",
    description: "The perfect package for small businesses and agencies.",
    monthPrice: 79,
    yearlyPrice: 52,
    features: [
      "Everything in Starter and Professional plus...",
      "Subcontractor Management",
      "Hiring Agreement Templates (1099 contracts)",
      "Subcontractor Onboarding",
      "Talent Pool",
      "3 Team Seats (additional seats $9/month)",
      "Accountant Access",
      "Connect Multiple Bank Accounts",
      "Unlimited Subcontractors",
      "Unlimited Project Collaborators"
    ]
  }
]
const PlanPricing = () => {
  const [planChosen, setPlanChosen] = useState(true)
  //false for month and true for year
  return (
    <>
      <div className='flex mx-2 sm:mx-7 justify-between  flex-col sm:flex-row mt-10'>
        <h1 className='text-[40px] text-start sm:text-center' >Plans & Pricing</h1>
        <div className='flex justify-between gap-3 items-center  sm:ml-10 mt-7 sm:mt-0'>
          <div className={`sm:mx-3 text-[1rem] text-center sm:text-[1.5rem] ` + `${planChosen ? 'opacity-50' : null}`}>MONTHLY</div>
          <div className='z-[1]  relative w-16 p-5 sm:p-1 h-10 bg-[#00b289] rounded-full flex !cursor-pointer' onClick={() => { setPlanChosen((val) => !val); console.log("me") }} >
            <div className={`w-1/2 h-3/4 bg-white rounded-full absolute bottom-1 mx-1 ` + `${planChosen ? 'left-0' : 'right-0'}`}></div>
            {/* <input  className='w-full' type={'range'} value={planChosen ? 1 : 0} min={0} max={1} ></input> */}
          </div>
          <div className={`sm:mx-3 text-[1rem] text-center sm:text-[1.5rem] ` + `${!planChosen ? 'opacity-50' : null}`}>YEARLY</div>

          <img src={offerPlan} alt="offer" className='relative bottom-7 right-[6rem]' />

        </div>
      </div>
      <div className='flex p-3 sm:p-10 gap-3 flex-wrap'>
        {cardArray.map((cardItem, index) => {
          return (

            <Card title={cardItem.title} text={cardItem.description} features={cardItem.features} />
          )
        })}
      </div>
    </>

  )
}

export default PlanPricing