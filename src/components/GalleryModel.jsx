'use client'
import Image from 'next/image'
import { useState } from 'react'
import { HiArrowNarrowLeft } from "react-icons/hi";
import { HiArrowNarrowRight } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
const GalleryModel = ({galleryImages}) => {

  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
  }

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0 
    ? setSlideNumber( galleryImages.length -1 ) 
    : setSlideNumber( slideNumber - 1 )
    console.log(slideNumber)
  }

  // Next Image  
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length 
    ? setSlideNumber(0) 
    : setSlideNumber(slideNumber + 1)
    console.log(slideNumber)
  }

  return (
    <div>

      {openModal && 
        <div className='sliderWrap bg-white/50 backdrop-blur-3xl inset-0'>
          <span  className='btnClose text-4xl p-2 bg-red-600 rounded-full' onClick={handleCloseModal}><IoCloseSharp className="fill-black"/></span>
          <span  className='btnPrev text-4xl bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition-colors duration-100 border-white border-[1px]' onClick={prevSlide} ><HiArrowNarrowLeft className="fill-black" /></span>
          <span  className='btnNext text-4xl bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition-colors duration-100 border-white border-[1px]' onClick={nextSlide} ><HiArrowNarrowRight className="fill-black"  /></span>
         
          <div className='fullScreenImage'>
            <Image className="select-none" src={galleryImages[slideNumber].galleryImg.secure_url} width={700} height={700} alt='' />
          </div>
        </div>}
       

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-3 p-6 sm:p-4 xl:p-0 place-items-center'>
        {galleryImages?.map((item,ind)=>(
            <div key={ind} className={`${galleryImages.length==0?'animate-pulse':""} hover:border-2 hover:border-blue-300
            w-[290px] sm:w-[330px] lg:w-[350px]  aspect-[3/2] bg-gray-50 rounded-xl  overflow-hidden`}> 

                   <Image src={item.galleryImg.secure_url} height={700} width={765}  onClick={ () => handleOpenModal(ind) } alt='galleryImg' className=' object-contain w-full h-full overflow-hidden rounded-xl ' />
                </div>
            ))}

    </div>
    </div>
  )
}

export default GalleryModel