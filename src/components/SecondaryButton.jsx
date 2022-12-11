import React from 'react'

const SecondaryButton = ({text="START FREE",textColor,bgColor,className}) => {
  return (
    <>
    <div className={`font-semibold bg-[#00b289]  text-white  px-7 py-2 cursor-pointer rounded-md hover:opacity-75 ${className}`}>{text}</div>
    </>
  )
}

export default SecondaryButton