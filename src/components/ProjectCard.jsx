import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectCard = ({item}) => {
 return(

  <>
    <div className='flex flex-col lg:flex-row justify-evenly items-center gap-x-10 px-2 md:px-8 py-7'>
        <Image width={388} height={560} src="/Images/pro1.webp" className='' alt="jkjk" />
    
    <div className='flex justify-center items-start flex-col px-6 bg-[#f4f4fa] py-12 mt-6 lg:mt-0  min-w-72 w-full'>
       <h1 className='text-[#a4e401] text-2xl font-medium'>{item.title}</h1>
       <p className='py-2'>Our first and largest office is right on the water in San Francisco’s Mission Bay neighborhood, next to the ballpark.</p>
       
       <div className='flex justify-between items-center w-full pr-6 pt-4'>
        <button className=' relative overflow-hidden project-button rounded-sm outline-none px-4 py-2'>
           <span>Explore</span> 
        </button>
        <Link href={'#'} className='text-[#020856]'>Links allow</Link>
       </div>
    </div>
    </div>

  </>

 )
}

export default ProjectCard






// return (
//   <div className='max-w-72 w-full hover:scale-105 transition-all aspect-[16/9] duration-300 min-h-60 flex flex-col justify-center items-center m-4'>
//      <div className='w-full overflow-hidden object-cover '>
//       <Image src={'/Images/ImageOne.png'} className='m-auto ' width={288} height={300}/>
//      </div>
//      <div className=''>
//       <div className='flex justify-between items-center flex-row p'>
//           <span>Hardware</span>
//           <span>01/01/2024</span>
//       </div>
//       <p className='text-xl font-semibold'>Training as a Critical Factor of IPT Success</p>
//       <p>Hi my name is deepak yadav hjhj</p> 
       
//      </div>
//   </div>
// )