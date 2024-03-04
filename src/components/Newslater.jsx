import React from 'react'
import NewsLaterForm from './NewsLaterForm';

const Newslater = () => {
  return (
    <section className='hidden lg:block absolute bottom-full md:bottom-3/4 left-0 w-full '>
     <div className='relative max-w-7xl m-auto rounded-2xl newsLater-bg-color h-72 overflow-hidden '>
            <div className='newsLater-content flex justify-center flex-col items-center h-full '>
            <h2 className='text-3xl font-bold leading-2'>Subscribe to our <span className=" text-[#c9fe43]">newsletter</span></h2>
            <p className='py-6'>Keep your life fresh! Receive updates about releases, new features and new events.</p>
            <NewsLaterForm/>
            </div>
            <img src="/Images/designOne.svg" className='absolute top-[7.5rem] -left-[9rem] rotate-45' alt="svg" />
            <img src="/Images/designOne.svg" className='absolute  -top-[6rem] -right-[9rem] rotate-[220deg]' alt="svg" />
     </div>
    </section>
  )
}

export default Newslater;