import React from 'react'
import SecondaryButton from './SecondaryButton'

const Card = ({ title, text, price = 10, optionChosen = true, features }) => {
    const Features = () => {
        return (
            <div className='flex flex-col justify-start mt-16   '>
                {features?.map((feature, index) => {
                    return (
                        <span key={index} className={"p-2 text-start"}>{feature}</span>
                    )
                })}
            </div>
        )
    }
    return (
        <div className='bg-[#fbfcff00] p-3 sm:p-10 relative flex flex-col items-start border-2 rounded-md  opacity-75'>
            <h2 className='font-semibold text-xl'>{title}</h2>
            <p className='text-start'>{text}</p>
            <div className='flex w-full'>
                <span className='text-[20px] font-semibold px-2'>$</span>
                <span className='text-[40px]'>{price}</span>
                <span className='text-[20px] font-normal sm:relative top-7 pt-3 px-2'>/MONTH</span>
                <div className='flex relative top-7 pt-3 px-2 w-full'>

                    {optionChosen ? <div className='relative top-7 right-10 sm:right-3 pt-2 max-w-full'>Billed Yearly</div> : null}
                </div>
            </div>
            <div className='bg-[#00b289]  w-full  h-1 relative -bottom-[3rem] '></div>
            <Features />
            <div className='flex justify-center items-center w-full'>

                <SecondaryButton className={"mt-10 w-full"} />
            </div>
        </div>
    )
}

export default Card