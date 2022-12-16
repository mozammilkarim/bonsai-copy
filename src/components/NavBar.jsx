import React from 'react'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'
import { useState } from 'react'

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const SmallMenu = () => {
        return (
            <div className='flex flex-col justify-center overflow-hidden pt-10 text-[17px] items-center  px-3 sm:px-5 w-full min-h-screen fixed top-0 right-0 z-[50] bg-white '>
                <div className='w-full max-w-[20rem] flex justify-between items-center py-2'>

                    <a href='#home' className='text-[#00b289] text-3xl ' style={{fontFamily:"La Belle Aurore, cursive"}}>
                        {/* <img src={logo2} alt="bonsai" /> */}
                        Karimji.tech
                    </a>
                    <div onClick={() => { setShowMenu(false) }} className='flex flex-col lg:hidden cursor-pointer p-2'>
                        <div className=' w-[1.75rem] h-[2px] bg-black my-[2px] rounded-sm opacity-75 rotate-[135deg] origin-center translate-y-[5px]  transition-all ' style={{transition:"all ease 0.8s"}} ></div>
                        <div className=' w-[1.75rem] h-[2px] bg-black my-[2px] rounded-sm opacity-75 rotate-[45deg]  origin-center translate-[-0.5px] transition-all ' style={{transition:"all ease 0.8s"}} ></div>
                    </div>
                </div>
                <div className='w-full max-w-[20rem] flex  flex-col  items-start  '>
                    
                    {/* <span className='w-full h-[2px] bg-black opacity-75'></span> */}
                    <a href={"#about"} onClick={() => { setShowMenu(false) }} className='text-[grey] py-3  cursor-pointer w-full text-start'>
                        About Us
                    </a>
                    <span className='w-full h-[2px] bg-black opacity-75'></span>

                    <a href={"#strategy"} onClick={() => { setShowMenu(false) }} className='text-[grey] py-3 cursor-pointer w-full text-start'>
                        Strategy
                    </a>
                    {/* <span className='w-full h-[2px] bg-black opacity-75'></span> */}

                    {/* <a href={"#reviews"} className='text-[grey] py-3  cursor-pointer w-full text-start'>
                        Reviews
                    </a> */}
                    <span className='w-full h-[2px] bg-black opacity-75 '></span>
                    <a href={"#services"} onClick={() => { setShowMenu(false) }} className='text-[grey] py-3 cursor-pointer w-full text-start'>
                        Services
                    </a>
                </div>
                <div className='w-fit flex flex-col  justify-center items-center '>
                    <PrimaryButton text={"Connect"} className={"my-1 w-[100%] px-10 text-center"} />
                    <SecondaryButton text={"What's App"} className={"text-center w-full my-1"} />
                </div>
            </div>
        )
    }
    return (
        <>

            {!showMenu ? <div className='p-3 pt-5 sm:p-[2rem] flex flex-wrap justify-between items-center'>
                <a href='#home' className='text-[#00b289] text-3xl ' style={{fontFamily:"La Belle Aurore, cursive"}} >
                    {/* <img src={logo} alt="bonsai" /> */}
                    Karimji.tech

                </a>
                <div className='hidden lg:flex justify-center items-center text-center '>
                    <a href='#about' className='text-[#4C4D5F] mr-[40px] cursor-pointer hover:text-[#00b289] text-3xl sm:text-2xl'>
                        About Us
                    </a>
                    <a href='#strategy' className='text-[#4C4D5F] mr-[40px] cursor-pointer  hover:text-[#00b289] text-3xl sm:text-2xl'>
                        Strategy
                    </a>
                    <a href='#services' className='text-[#4C4D5F] mr-[40px] cursor-pointer hover:text-[#00b289] text-3xl sm:text-2xl'>
                        Services
                    </a>
                    {/* <a href='#' className='text-[#4C4D5F] mr-[40px] cursor-pointer hover:text-[#00b289] text-3xl sm:text-2xl'>
                        Reviews
                    </a> */}
                </div>
                <div className='hidden lg:flex justify-between'>
                    <PrimaryButton text={"Connect"} className={"mx-2"} />
                    <SecondaryButton text={"What's App"} className={"text-center"} />
                </div>
                <div onClick={() => { setShowMenu(true) }} className='flex flex-col lg:hidden cursor-pointer p-2'>
                    <div className=' w-[1.75rem] h-[2px] bg-black my-[2px] rounded-sm opacity-75'></div>
                    <div className=' w-[1.75rem] h-[2px] bg-black my-[2px] rounded-sm opacity-75'></div>
                    <div className=' w-[1.75rem] h-[2px] bg-black my-[2px] rounded-sm opacity-75'></div>
                </div>
            </div> : <SmallMenu />}
        </>
    )
}

export default NavBar