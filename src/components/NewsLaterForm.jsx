
    "use client"
import React, { useState } from 'react'

const NewsLaterForm = () => {
    const [formData, setFormData] = useState({ newsEmail:"" });
  const handelChange = (e)=>{
    const {name,value} = e.target ;
    setFormData((prv)=>({
        ...prv,
        [name]: value,
    }))


    }
  const handelSubmit = (e)=>{
   e.preventDefault();
   if(!formData.newsEmail){
    alert('Email is required');
    return;
   }
   console.log(formData);
  }

  return (
   <>
  <form onSubmit={handelSubmit} className='flex gap-x-5'>
    <input type="email" name="newsEmail" id="" className='text-black py-2 px-4 rounded border-0 focus:outline-none' placeholder='Enter your email' autoComplete='off' onChange={handelChange} />
    
    <button type='submit'  className="inline-flex font-semibold text-[#020856] bg-[#c9fe43] border-0 py-2 px-6 focus:outline-none hover:bg-[#c9fe43e6] rounded text-lg">Subscribe</button>
    </form> 
   </>
  )
}

export default NewsLaterForm