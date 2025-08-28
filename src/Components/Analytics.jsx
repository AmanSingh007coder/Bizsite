import React from 'react'
import Man from './../Assets/Man.png'

const Analytics = () => {
  return (
    <div id='about' className='w-full bg-gray-300 px-4 py-40'>
     <div className='mx-auto grid md:grid-cols-2'>

     <div>
       <img src={Man} className='h-fit object-cover rounded-lg ' alt='/'/> 
       </div>
       <div className='flex flex-col justify-center'>
         <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
        <h2 className='font-bold text-4xl py-2 mb-5'>Manage Data Analytics Centrally</h2>
        <p>dewefjen fvergnreuewuv fdvoregergjefuj fvoergj4ouiogfjeofj rgfegij43jerg egieirg4geoif fvvoiergrger frvjrgrge frgrgjo4rgerii fregreiji egregoi34oerg ergnwfoi34 vregregr jirgjreiurjru breberjbrjubre brojrebjrebjjfbn fbnbreinbirubrun fbnerbintreibntri bjgnergreigrie ebrenbriegbreiur</p>
        <button className="bg-black w-[200px] py-3 my-6 rounded-md text-[#00df9a] mx-auto mt-17 cursor-pointer">
          Get Started
        </button>
        </div>
      </div>
     </div>
  )
}

export default Analytics;