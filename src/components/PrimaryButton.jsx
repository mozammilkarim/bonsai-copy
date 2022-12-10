import React from 'react'

const PrimaryButton = ({text,textColor,bgColor,className}) => {
  return (
    <>
    <div className={`border-2 border-[#00b289] font-semibold bg-white hover:bg-[#00b289] text-[#00b289] hover:text-white px-7 py-2 cursor-pointer rounded-md ${className}`}>{text}</div>
    </>
  )
}

export default PrimaryButton