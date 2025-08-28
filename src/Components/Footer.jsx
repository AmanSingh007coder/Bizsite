import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoHomeSharp } from "react-icons/io5";
import { FaGithubSquare } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";


export const Footer = () => {
  return (
    <div id="company"className='px-4 py-16 grid grid-col-3 gap-8 text-gray-300 mx-auto lg:grid-cols-3'>
      <div>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
      <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eaque ullam dignissimos rerum doloribus explicabo nemo at, soluta perferendis dolorem quas quasi voluptatum, repellendus iste obcaecati iure dicta? Quisquam, alias!</p>
      <div className='flex justify-between my-6 cursor-pointer'>
      <IoHomeSharp size={30} />  
      <FaXTwitter size={30} />
      <FaInstagram size={30} />
      <FaGithubSquare size={30}/>
      <BsWhatsapp size={30} />
      </div>
      </div>

       <div className='col-span-3 flex justify-between'>
      <div>
        <h6 className='font-medium text-gray-400'>Solutions</h6>
        <ul>
          <li className='py-2 text-sm'>Analytics</li>
          <li className='py-2 text-sm'>Marketing</li>
          <li className='py-2 text-sm'>Commerce</li>
          <li className='py-2 text-sm'>Analysis</li>
          <li className='py-2 text-sm'>Insights</li>
        </ul>
      </div>

      <div>
        <h6 className='font-medium text-gray-400'>Support</h6>
        <ul>
          <li className='py-2 text-sm'>Pricing</li>
          <li className='py-2 text-sm'>Documentation</li>
          <li className='py-2 text-sm'>Guide</li>
          <li className='py-2 text-sm'>Info</li>
          <li className='py-2 text-sm'>API Status</li>
        </ul>
      </div>

      <div>
        <h6 className='font-medium text-gray-400'>Company</h6>
        <ul>
          <li className='py-2 text-sm'>About</li>
          <li className='py-2 text-sm'>Blog</li>
          <li className='py-2 text-sm'>Jobs</li>
          <li className='py-2 text-sm'>Press</li>
          <li className='py-2 text-sm'>Careers</li>
        </ul>
       </div>

       <div>
        <h6 className='font-medium text-gray-400'>About Us</h6>
        <ul>
          <li className='py-2 text-sm'>FAQ'S</li>
          <li className='py-2 text-sm'>Help</li>
          <li className='py-2 text-sm'>Contact</li>
          <li className='py-2 text-sm'>Sign-up</li>
          <li className='py-2 text-sm'>Know About us</li>
        </ul>
       </div>

      </div>
      </div> 
    
  )
}

export default Footer;