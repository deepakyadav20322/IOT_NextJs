'use client'
import { toastProperties } from '@/utils/toastClass'
import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import LoadingSpinner from '../LoadingSpinner'

const ShowGalleyImages = () => {
const [AllImages,setAllImages] = useState([]);
const [loading,setLoading] = useState(false);
const [count,setCount] = useState(1)
const dummyLoadArry = Array.from({length:12});

const handleDelete  =async (pub_id,imgId)=>{
try {
  const res= await axios.delete(`${process.env.NEXT_PUBLIC_baseURL}/api/admin/galleryPhotos`, {data:{ publicId: pub_id,imgId }},{
    headers:{
    }
  });
  if(res.status===200){
    toast.success(res.data.message,toastProperties);
  }
} catch (error) {
  toast.error('Server Error',toastProperties);
  console.log(error)
}
}

useEffect(()=>{
    const fetchImages = async()=>{
      setLoading(true)
   try {
    const res= await axios.get(`${process.env.NEXT_PUBLIC_baseURL}/api/admin/galleryPhotos`,{
        headers:{
            'Content-Type':'application/json'
        }
    })
        if(res.status===200){
         console.log('response come');
         console.log(res.data);
         setAllImages(res.data?.images);
         setCount((pre)=>pre+1);
        }
    
   } catch (error) {
    console.log(error);
    setCount((pre)=>pre+1);
    toast.error('Error while fething images',toastProperties);
    setLoading(false)
   }finally{
    setLoading(false);
   }
   }
   fetchImages()
},[])


  if(loading){
    return(
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-3 p-6 sm:p-4 xl:p-0 place-items-center'>
    {dummyLoadArry?.map((item,ind)=>(
      <div>
        <div key={ind} className={`animate-pulse w-[290px] sm:w-[330px] lg:w-[350px] aspect-[3/2] bg-slate-200 rounded-xl  overflow-hidden`}> 

            </div>
            <button disabled={loading}  className={`px-3 py-2 bg-red-300 rounded-lg outline-none border-none text-white mt-2 ml-1 hover:bg-red-400`}>Delete</button>
            </div>
        ))}
        </div>
    )
  }


  return (
    <div className=''>
        <h1 className='text-xl sm:text-2xl font-semibold sm:font-bold py-2 pl-1'>All Gallery Images</h1>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center'>
     {AllImages?.map((item)=>(
  <div>
    {AllImages.length==0?
     <div className={`min-h-60 w-72  rounded-lg p-1"animate-pulse bg-gray-300" object-contain border-[1px] border-blue-500 `}> 
     </div> 
      :<div className={`h-60 w-72  rounded-lg p-1 bg-gray-50 object-contain border-[1px] border-blue-500 ${AllImages.length==0?"animate-pulse bg-gray-300":""}`}>
   
        <Image src={`${item?.galleryImg.secure_url}`} width={288} height={240} alt='galleryImg' className='object-contain w-full h-full' />
    
        </div>  
}
      <button onClick={(e)=>handleDelete(item.galleryImg.public_id,item._id)} className={`px-3 py-2 bg-red-500 rounded-lg outline-none border-none text-white mt-2 ml-1 hover:bg-red-400`}>Delete</button>
        </div>  
    
     ))}
    </div>
    </div>
  )
}

export default ShowGalleyImages