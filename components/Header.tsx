import React from 'react'
import logo from "../public/logo2.png";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";
import { FaBell } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <header className='flex flex-row justify-between w-full h-[100px] items-center gap-11'>
        <div className='flex flex-row items-center gap-8 mx-auto lg:ml-[40px] pl-1'>
        <img src={logo.src} alt="Logo image" className='w-[70px] h-[70px] bg-white rounded-full p-1 ' />
        <input type="text" placeholder='#Explore' className='h-[40px] w-[250px] rounded-xl pl-0 md:pl-4 bg-[#222222] text-white' />
        </div>
        <div className='hidden md:flex flex-row justify-center gap-11  mx-auto  pl-4'>
            <a href=""><AiFillHome className='text-blue-500 w-[30px] h-[30px]'/> </a>
            <a href=""><AiOutlineMessage className='text-white w-[30px] h-[30px]'/></a>
            <a href=""><FaBell className='text-white w-[30px] h-[30px]'/></a>
            <a href=""><FaHeart className='text-white w-[30px] h-[30px]'/></a>
        </div>
        <div className='flex flex-row justify-between mx-auto lg:mr-[40px] lg:w-[200px] bg-[#222222] rounded-xl text-white items-center p-2 mr-2'>
            <IoPerson className=' w-8 h-8 mr-2 md:mr-0 lg:mr-0 lg:ml-1 text-blue-500'/>
            <p className='hidden lg:block p-1'>Anonymous</p>
            <IoIosArrowDown className='text-white w-5 h-5 mr-1 hidden lg:block'/>
            <RxHamburgerMenu className='w-8 h-8 text-white block md:hidden'/>
        </div>
        
    </header>
  )
}

export default Header