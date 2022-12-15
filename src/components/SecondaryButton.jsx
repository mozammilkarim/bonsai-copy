import React from 'react'

const SecondaryButton = ({text="Let's Chat!",textColor,bgColor,className}) => {
  const greeting="Hi, Karimji.Tech!. Let's Connect and share our notes."
  return (
    <a href={`https://api.whatsapp.com/send?phone=+917827141330&text=${greeting}`} target={"blank"}>
    <div className={`font-semibold bg-[#00b289] h-full text-center text-white  px-7 py-2 cursor-pointer rounded-md hover:opacity-75 ${className}`}>{text}</div>
    </a>
  )
}

export default SecondaryButton