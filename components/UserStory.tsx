import React from 'react'
import { IoPerson } from "react-icons/io5";

const UserStory = () => {
  return (
    <div className='w-[800px] h-[150px] flex flex-row gap-7'>
        <div className='flex flex-col items-center justify-center gap-2'>
            <IoPerson className='w-[75px] h-[75px] text-blue-600 bg-[#1a1a1a] p-2 rounded-xl border-4 border-green-500 ' />
            <p className='text-md text-white font-bold'>User1</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-2'>
            <IoPerson className='w-[75px] h-[75px] text-blue-600 bg-[#1a1a1a] p-2 rounded-xl border-4 border-[#282828] ' />
            <p className='text-md text-white '>User2</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-2'>
            <IoPerson className='w-[75px] h-[75px] text-blue-600 bg-[#1a1a1a] p-2 rounded-xl border-4 border-[#282828] ' />
            <p className='text-md text-white '>User3</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-2'>
            <IoPerson className='w-[75px] h-[75px] text-blue-600 bg-[#1a1a1a] p-2 rounded-xl border-4 border-[#282828] ' />
            <p className='text-md text-white '>User4</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-2'>
            <IoPerson className='w-[75px] h-[75px] text-blue-600 bg-[#1a1a1a] p-2 rounded-xl border-4 border-green-500 ' />
            <p className='text-md text-white font-bold'>User5</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-2'>
            <IoPerson className='w-[75px] h-[75px] text-blue-600 bg-[#1a1a1a] p-2 rounded-xl border-4 border-[#282828] ' />
            <p className='text-md text-white '>User6</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-2'>
            <IoPerson className='w-[75px] h-[75px] text-blue-600 bg-[#1a1a1a] p-2 rounded-xl border-4 border-[#282828] ' />
            <p className='text-md text-white '>User7</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-2'>
            <IoPerson className='w-[75px] h-[75px] text-blue-600 bg-[#1a1a1a] p-2 rounded-xl border-4 border-[#282828] ' />
            <p className='text-md text-white '>User1</p>
        </div>
        
    </div>
  )
}

export default UserStory