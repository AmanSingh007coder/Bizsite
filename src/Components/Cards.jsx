import React from 'react'
import { FaUserLarge } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi2";
import { FaUsers } from "react-icons/fa";

export const Cards = () => {
  return (
    <div className='bg-white w-full py-[16rem] px-4'>
      <div className='mx-auto grid grid-cols-3 gap-8'>
        <div className='w-full shadow-xl rounded-lg flex flex-col p-4 my-4 hover:scale-105 duration-300 h-[500px]'>
        
            <div className=' flex justify-center'>
              <FaUserLarge size={60}/>
            </div>
            
             <h2 className='font-bold py-7 text-3xl text-center'>Single User</h2>
             <p className='text-4xl py-2 font-bold text-center'>$149</p>
             <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                <p className='py-2 border-b mx-8'>1 Granted User</p>
                <p className='py-2 border-b mx-8'>Send upto 2GB</p>
             </div>
             <button className='mt-8 bg-[#00df9a] w-[200px] py-3 my-6 rounded-md text-black mx-auto cursor-pointer'>Start Trial</button>
            </div>

            <div className='w-full shadow-xl rounded-lg flex flex-col p-4 my-4 hover:scale-105 duration-300 h-[500px]'>
            <div className='flex justify-center '>
              <HiUsers size={75} />
            </div>
            
             <h2 className='font-bold py-7 text-3xl text-center'>Multi User</h2>
             <p className='text-4xl py-2 font-bold text-center'>$250</p>
             <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>1 TB Storage</p>
                <p className='py-2 border-b mx-8'>4+ Granted User</p>
                <p className='py-2 border-b mx-8'>Send upto 30GB</p>
             </div>
             <button className='mt-8 bg-black w-[200px] py-3 my-6 rounded-md text-[#00df9a] mx-auto cursor-pointer'>Start Trial</button>
            </div>

            <div className='w-full shadow-xl rounded-lg flex flex-col p-4 my-4 hover:scale-105 duration-300 h-[500px]'>
            <div className=' flex justify-center'>
            <FaUsers size={75}/>
            </div>
             <h2 className='font-bold py-7 text-3xl text-center'>Community</h2>
             <p className='text-4xl py-2 font-bold text-center'>$2400</p>
             <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>3 TB Storage</p>
                <p className='py-2 border-b mx-8'>7+ Granted User</p>
                <p className='py-2 border-b mx-8'>Send upto 49GB</p>
             </div>
             <button className='mt-8 bg-[#00df9a] w-[200px] py-3 my-6 rounded-md text-black mx-auto cursor-pointer'>Start Trial</button>
            </div>

      </div>
    </div>
  )
}

export default Cards;