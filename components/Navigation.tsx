import React from 'react'
import { MdDynamicFeed } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";

const Navigation = () => {
  return (
    <div className='w-[350px] h-[400px] bg-[#282828] rounded-xl flex flex-col items-center justify-center gap-4'>
        <div className='w-[85%] h-[60px] bg-blue-600 rounded-xl flex justify-start items-center shadow-md'>
            <MdDynamicFeed className='w-8 h-8 text-[#222222] ml-3'/>
            <p className='text-xl text-white  ml-4'>Feed</p>
            <p className='text-xl text-white bg-[#323131] w-8 h-8 rounded-xl text-center ml-[140px]'>+4</p>
        </div>
        <div className='w-[85%] h-[60px]  rounded-xl flex justify-start items-center'>
            <FaUserFriends className='w-8 h-8 text-[#4d4d4d] ml-3'/>
            <p className='text-xl text-white ml-4 '>Friends</p>
        </div>
        <div className='w-[85%] h-[60px] rounded-xl flex justify-start items-center'>
            <FaVideo className='w-8 h-8 text-[#4d4d4d] ml-3'/>
            <p className='text-xl text-white ml-4 '>Watch Videos</p>
        </div>
        <div className='w-[85%] h-[60px]  rounded-xl flex justify-start items-center'>
            <IoMdPhotos className='w-8 h-8 text-[#4d4d4d] ml-3'/>
            <p className='text-xl text-white  ml-4'>Photos</p>
            <p className='text-xl text-white bg-blue-900 w-8 h-8 rounded-xl text-center ml-[140px]'>+2</p>
        </div>
        <div className='w-[85%] h-[60px]  rounded-xl flex justify-start items-center'>
            <FaShoppingBag className='w-8 h-8 text-[#4d4d4d] ml-3'/>
            <p className='text-xl text-white ml-4 '>Marketplace</p>
        </div>
        
    </div>
  )
}

export default Navigation