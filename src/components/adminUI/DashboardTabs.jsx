'use client'

import Link from 'next/link';
import React from 'react'

const DashboardTabs = ({setCurrTab,currTab}) => {

    const dashboardItems = [
        { name: "Profile" },
        { name: "All-Projects" },
        { name: "Gallery Images" },
        { name: "abcdef" },
        { name: "Simple" },
      ];

      const dashboardLinksItems =[
        { name: "Upload project",link:`${process.env.NEXT_PUBLIC_baseURL}/admin/uploadProject` },
        { name: "Upload Gallery Image",link:`${process.env.NEXT_PUBLIC_baseURL}/admin/galleryPhotos` },
      ]

  return (
    <div className="xl:w-[20%]">
    <div className="dashboard-side-nav hidden xl:block  h-[90%] mx-4 fixed top-16 border-2 left-0 rounded-xl ">
      <div className=" flex flex-col justify-start items-center h-full">
        <div className="py-3 w-[16rem] text-center font-semibold text-white  rounded-t-xl h-[8%] bg-black">
          Admin
        </div>
        <div className="flex justify-start items-start flex-col w-full bg-[#1f2937] h-[86%] ">
        {dashboardItems.map((items) => (
       
                <li  onClick={()=>setCurrTab(items.name)} key={items.name} className={`${currTab==items.name?'bg-[#2563eb] border-[1px] border-black':""} text-[#D1D5DB] hover:text-white z-40 w-full ps-4 list-none py-4 hover:bg-[#2563eb] hover:font-extrabold transition-colors duration-200 cursor-pointer`}>
                  {items.name}
                </li>
                
              ))}
        {dashboardLinksItems.map((items) => (
       
                <Link href={items.link} key={items.name} className={`${currTab==items.name?'bg-[#2563eb] border-[1px] border-black':""} text-[#D1D5DB] hover:text-white z-40 w-full ps-4 list-none py-4 hover:bg-[#2563eb] hover:font-extrabold transition-colors duration-200 cursor-pointer`}>
                  {items.name}
                </Link>
                
              ))}
    </div>
          
          <button className="text-center font-semibold py-2 w-full bg-red-500 text-white rounded-b-xl">
            Signout
          </button>
        
      </div>
    </div>
    </div>

  )
}

export default DashboardTabs