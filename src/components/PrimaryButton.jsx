import React from 'react'

const PrimaryButton = ({text,textColor,bgColor,className}) => {
  return (
    <a href='https://www.linkedin.com/in/mozammilkarim/' target={"blank"}>
    <div className={`border-2 border-[#00b289] font-semibold bg-white hover:bg-[#00b289] text-[#00b289] hover:text-white px-7 py-2 cursor-pointer rounded-md ${className}`}>{text}</div>
    </a >
  )
}

export default PrimaryButton