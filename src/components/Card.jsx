import React from 'react'
import SecondaryButton from './SecondaryButton'
import tick from '../assets/greenTick.svg'

const Card = ({ title, text, offerPrice = "Free", optionChosen = true, features }) => {
    const Features = () => {
        return (
            <div className='flex flex-col justify-start mt-16 min-h-[20rem]  max-h-fit '>
                {features?.map((feature, index) => {
                    return (
                        <div className='flex justify-start items-center'>
                            <img src={tick} alt="feature" className='px-2' />
                            <span key={index} className={"py-2 text-start"}>{feature}</span>
                        </div>
                    )
                })}
            </div>
        )
    }
    return (
        <div className='bg-[#fbfcff;] p-3 sm:p-10 relative flex flex-col items-start border-2 rounded-md  opacity-75' style={{boxShadow: "0 0 68px 0 rgb(2 4 69 / 8%)"}}>
            <h2 className='font-semibold sm:text-3xl text-3xl pb-5'>{title}</h2>
            <p className='text-start'>{text}</p>
            <div className='bg-[#00b289]  w-full  h-[1px] my-3  '></div>
            <div className='text-lg '>
                <span className='opacity-50 font-normal'>
                    Service Type:   </span>
                <span className='opacity-100 text-black font-semibold'>
                    {offerPrice}
                </span>
            </div>
            <Features />
            <div className='absolute bottom-1 my-5 flex justify-start items-start w-full'>

                <SecondaryButton className={" w-full"} />
            </div>
        </div>
    )
}

export default Card