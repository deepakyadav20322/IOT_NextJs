'use client'
import React from 'react'
import { FaBars } from 'react-icons/fa6'

const MobileNavBtn = () => {
  return (
   <>
    <FaBars onClick={()=>alert('mobile nav click')} className='md:hidden'/>
   </>
  )
}

export default MobileNavBtn