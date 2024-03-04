import Image from 'next/image'
import React from 'react'

const Vision = () => {
  return (
    <div className='max-w-7xl w-full border-2 min-h-[80vh] mt-6 '>
    <h1 className=' font-bold text-2xl text-center py-4'>Our Vision</h1>
    <div className=' flex justify-evenly items-center gapx-x-4 mt-4 px-2 flex-col md:flex-row'>
        <div className=''>
        <Image src={'/Images/visionImg.png'} width={400} height={500} className=' rounded-xl max-w-md'/>
        </div>
        <div className='flex flex-col justify-start items-start max-w-xl w-full px-2 sm:ml-8 gap-y-6 pb-8 '>
          <h1 className='text-3xl font-semibold text-[#020856e1]'>Inspiring Collaborative Exploration, and IoT Innovation</h1>
               <p className='first-letter:text-3xl'> <span className='text-xl text-[#a4e401]'>Empowering</span> innovation, our IoT Club pioneers cutting-edge technologies, forging a future where connectivity fuels progress. With relentless passion, we bridge the digital and physical realms, cultivating a community driven by curiosity, collaboration, and the pursuit of transformative solutions.</p>
               <p>Join us on this journey of empowerment, where ideas converge into impactful IoT advancements.</p>
               <div className='flex flex-row justify-end items-center w-full '>
               <button className=' relative overflow-hidden project-button rounded-sm outline-none px-4 py-2'>
           <span>Explore</span> 
        </button>
           </div>
        </div>
    </div>
   </div>
  )
}

export default Vision