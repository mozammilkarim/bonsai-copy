import React from 'react'
import logo from "../assets/bonsai-logo.svg"
import logo2 from "../assets/bonsaiLogo2.svg"
import { Link } from "react-router-dom"
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'
import { useState } from 'react'

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const SmallMenu = () => {
        return (
            <div className='z-[2] flex flex-col justify-start mt-10 text-[17px] items-center  px-3 sm:px-5 w-full h-full'>
                <div className='w-full flex justify-between items-center py-2'>

                    <a href='/'>
                        <img src={logo2} alt="bonsai" />
                    </a>
                    <div onClick={() => { setShowMenu(false) }} className='flex flex-col lg:hidden cursor-pointer p-2'>
                        <div className=' w-[1.75rem] h-[2px] bg-black my-[2px] rounded-sm opacity-75 rotate-[135deg] origin-center translate-y-[5px]  transition-all ' style={{transition:"all ease 0.8s"}} ></div>
                        <div className=' w-[1.75rem] h-[2px] bg-black my-[2px] rounded-sm opacity-75 rotate-[45deg]  origin-center translate-[-0.5px] transition-all ' style={{transition:"all ease 0.8s"}} ></div>
                    </div>
                </div>
                <div className='w-full flex  flex-col  items-start  '>
                    <a href={"#products"} className='text-[grey] py-3 cursor-pointer w-full text-start'>

                        Products
                    </a>
                    <span className='w-full h-[2px] bg-black opacity-75'></span>
                    <a href={"#templates"} className='text-[grey] py-3  cursor-pointer w-full text-start'>
                        Templates
                    </a>
                    <span className='w-full h-[2px] bg-black opacity-75'></span>

                    <a href={"#pricing"} className='text-[grey] py-3 cursor-pointer w-full text-start'>
                        Pricing
                    </a>
                    <span className='w-full h-[2px] bg-black opacity-75'></span>

                    <a href={"#reviews"} className='text-[grey] py-3  cursor-pointer w-full text-start'>
                        Reviews
                    </a>
                    <span className='w-full h-[2px] bg-black opacity-75 '></span>
                </div>
                <div className='w-full flex flex-col  justify-center items-center '>
                    <PrimaryButton text={"LOG IN"} className={"my-2 w-full"} />
                    <SecondaryButton text={"START FREE"} className={"text-center w-full my-1"} />
                </div>
            </div>
        )
    }
    return (
        <>

            {!showMenu ? <div className='p-1 sm:p-[2rem] flex flex-wrap justify-between items-center'>
                <a href='/'>
                    <img src={logo} alt="bonsai" />
                </a>
                <div className='hidden lg:flex justify-center items-center text-center '>
                    <a href='#' className='text-[grey] mr-[40px] cursor-pointer'>

                        Products
                    </a>
                    <a href='#' className='text-[grey] mr-[40px] cursor-pointer'>
                        Templates
                    </a>
                    <a href='#' className='text-[grey] mr-[40px] cursor-pointer'>
                        Pricing
                    </a>
                    <a href='#' className='text-[grey] mr-[40px] cursor-pointer'>
                        Reviews
                    </a>
                </div>
                <div className='hidden lg:flex justify-between'>
                    <PrimaryButton text={"LOG IN"} className={"mx-2"} />
                    <SecondaryButton text={"START FREE"} className={"text-center"} />
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