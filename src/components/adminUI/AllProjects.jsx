"use client";

import { toastProperties } from "@/utils/toastClass";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";


const AllProjects = () => {
  const [allProjectData, setAllProjectData] = useState(null); 
  
      useEffect(()=>{
        const fetchData = async () => {
            try {
                
              const response = await axios.get(`${process.env.NEXT_PUBLIC_baseURL}/api/admin/upload-project`);
              if (response.status==200) {
                setAllProjectData(response.data.allData);
              }
             
            } catch (error) {
         toast.error(error.response?.message?error.response.message:"Server Error",toastProperties);
            } 
          };
      
          fetchData();
  },[]);
 
  return (
    <>
    <h1 className="text-2xl font-bold py-2 px-1">All uploaded projects:</h1>
    {!allProjectData? <div className="h-[70vh] w-full flex justify-center items-center">
  <div
  className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-blue-500 motion-reduce:animate-[spin_1.5s_linear_infinite]">
    </div> 
  </div>:
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        
          <thead className="text-xs text-white uppercase bg-blue-500 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">Serial</div>
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Sub-Title
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Year
              </th>
              <th scope="col" className="px-6 py-3">
                Image link
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody className=" ">
            {allProjectData && allProjectData.map((items,ind) => (
              <tr key={ind} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                  <div className="flex items-center">{ind+1}</div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                 {items?.title}
                </th>
                <td className="px-6 py-4">{items?.subTitle}</td>
                <td className="px-6 py-4">{items?.category}</td>
                <td className="px-6 py-4">{items?.uploadYear}</td>
                <td className="px-6 py-4">
                  {" "}
                  <Link
                    href={items.mainImg.secure_url}
                    target="_blanck"
                  >
                    Link
                  </Link>
                </td>
                <td className="flex items-center px-6 py-4">
                  <Link
                    href={`${process.env.NEXT_PUBLIC_baseURL}/admin/uploadProject/${items._id}`}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                  >
                    Remove
                  </a>
                </td>
              </tr>
            )) }
             
            
          </tbody>
        </table>
      </div>
}
    </>
  );
};

export default AllProjects;
