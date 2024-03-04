'use client'
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { toast } from 'react-toastify';


const AdminLogin = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [resLoading, setResLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
       
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevLoginData) => ({
      ...prevLoginData,
      [name]: value,
    }));
  };
//   -------------------------------------

const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.email || !formData.password){
      (toast.error('All fields are required', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        }))
        return;
    }
    try {
      setResLoading(true);
      setErrorMessage(null);
      // return console.log(formData);
      const res = await axios.post(`${process.env.NEXT_PUBLIC_baseURL}/api/admin/login`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status == 200) {
        setErrorMessage(null)
        setResLoading(false);
        router.push('/admin/dashboard');
        
      }
      console.log("response: =>", res);
    
    } catch (error) {
      console.log('catch run',error.response)
      setResLoading(false);
      if(error.response.status==401){
      console.log(error.response.data)
      console.log(error.response.status)
      setErrorMessage(error.response.data.message);
      }else{
        setErrorMessage('Internal server error')
        console.log("status 123 => ",error.response.status)

      }
     
    }

  };
   
  return (
    
    <div className="flex flex-col items-center lg:flex-row md:h-screen gap-x-4 py-6 lg:pt-0">
    <div className="flex items-center justify-center w-full md:w-1/2 px-2 md:px-0">
      <Image src={"/Images/adminIOTImg1.jpeg"} alt="Login Image" width={600} height={400} />
    </div>
    <div className="flex flex-col items-center justify-center w-full md:w-1/2 mt-10 lg:mt-0 px-3 md:px-1">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h1 className="text-2xl font-bold">Welcome back Admin!</h1>
          <p className="mt-2 text-gray-600">
            Please sign in to your account.
            
          </p>
          {errorMessage?<p className=' bg-red-500 text-white py-2 border-2 border-red-600 px-4 my-2'>{errorMessage}</p>:""}
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label htmlFor="email" className="block font-bold text-gray-700">
              Email address
            </label>
            <input
              id="email"
              type="email"
              name='email'
              onChange={handleOnChange}
              placeholder="Enter your email"
              className="w-full px-4 py-3 mt-1 border-gray-300 border-[1px] rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block font-bold text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name='password'
              onChange={handleOnChange}
              placeholder="Enter your password"
              className="w-full px-4 py-3 mt-1 border-gray-300 border-[1px]  rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              
            />
          </div>
          <div>
            <button
            disabled={resLoading}
              type="submit"
              className={`${resLoading?'bg-indigo-300 cursor-not-allowed':""} flex items-center justify-center gap-x-5 w-full px-4 py-3 font-bold text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700`}
            >
               {resLoading?   <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>:null}
              
              {resLoading?'Processing...':'Sign In'}
            </button>
            
          </div>
        </form>
      </div>
    </div>
  </div>
);

}

export default AdminLogin