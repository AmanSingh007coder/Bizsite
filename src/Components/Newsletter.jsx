import React from 'react'

export const Newsletter = () => {
  return (
    <div id="contacts" className='text-white px-5 w-full py-4 scroll-mt-20'>
        <div className='mx-auto grid md:grid-cols-2'>
        <div className='flex flex-col justify-center'>
            <h1 className='font-bold text-3xl py-2'>Want Tips & Tricks To Optimize Your Flow?</h1>
            <p>Sign up to our Newsletter and Stay up to Date.</p>
        </div>
        <div className='my-10'>
          <div className='flex flex-col items-center justify-between w-full'>
            <input className='p-3 flex text-black bg-white w-full rounded-md' type='e-mail' placeholder='Enter your Email Id'/>
            <button className='bg-[#00df9a] w-[200px] py-3 my-6 rounded-md text-black mx-auto cursor-pointer'>Notify Me</button>
          </div>
          <p>We care about your data and privacy so we have provided various security issues solved and making a smooth and friendly interface by including our <span className='text-[#00df9a]'>Privacy Policy</span></p>
        </div>
        </div>
       </div>
  )
}

export default Newsletter;
