import Image from 'next/image'
import React from 'react'

const Team = () => {

 const teamMembers = Array.from({length:8})

  return (
    <>
    
      <section>
      <div className='max-w-7xl w-full border-2 min-h-[80vh] mt-6 '>
    <h1 className=' font-bold text-2xl text-center py-4'>Our Team</h1>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 place-items-center'>
      {teamMembers.map(()=>(
        // <Image className='' src={'/Images/visionImg.png'} width={220} height={220} alt='teamImg'/>
        <div className="w-[300px] flex justify-center ">

<div className="w-full h-[250px] relative group overflow-hidden">
      <div className="h-1/2 p-6 flex flex-col justify-center bg-black">
        <h3 className="text-xl mb-2 font-semibold text-white">Manager</h3>
        <p className="text-sm font-light text-slate-300">Deepak Yadav</p>
      </div>

      <div className="absolute inset-0 z-10 group-hover:top-[50%] group-hover:right-[50%] transition-all duration-500">
        <div
          style={{
            backgroundImage: 'url("Images/visionImg.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            top: '0%',
            right: '0%',
            width: '100%', // Adjust the width to cover only a quarter of the box
            height: '100%', // Adjust the height to cover only a quarter of the box
            transform: 'translate(0%, 0%)', // Center the overlay
            opacity: 1,
            backgroundColor:`rgb(226,232,240)`,
            transition: 'transform 0.4s ease-in-out', // Increase the transition duration
          }}
        ></div>
      </div>

      <a
        href="#"
        rel="nofollow"
        className="w-1/2 h-1/2 absolute bottom-0 right-0 z-0 grid place-content-center bg-white text-black group-hover:text-indigo-500 transition-colors"
      >
        <div className="flex items-center flex-col">
          <span className="text-xs">MORE</span>
          <p>GitHub</p>
          <p>Instagarm</p>
          <p>Linkedin</p>
        </div>
      </a>
    </div>

</div>
      ))}
    </div>
   </div>
      </section>

    </>
  )
}

export default Team