'use client'
import AdminProfile from "@/components/adminUI/AdminProfile";
import AllProjects from "@/components/adminUI/AllProjects";
import DashboardTabs from "@/components/adminUI/DashboardTabs";
import ShowGalleyImages from "@/components/adminUI/ShowGalleyImages";
import { useRouter,useSearchParams } from "next/navigation";

import React, { useState } from "react";

const page = () => {
  // Access the router instance
  const searchParams = useSearchParams();

  // Access the query parameters for specific component render by changing the value of currTab
 const componentParam = searchParams.getAll('comp')[0]
 
 const [currTab,setCurrTab] = useState(`${!componentParam?'Profile':componentParam}`);
  return (
    <>
      <section className=" w-full">
         <DashboardTabs setCurrTab={setCurrTab} currTab={currTab} />
        <div className="border-2 border-black w-full xl:w-[80%] min-h-screen flex flex-col xl:ml-72 p-2 sm:p-6">
        <div className="dashboard-top-nav ">
        {/* It is used letter for make admin top navigation bar */}
        </div>
       <div className="main-content w-full min-h-[100vh] ">
       {currTab==='Profile' &&  <AdminProfile  />}
       {currTab==='All-Projects' &&  <AllProjects  />}
       {currTab==='Gallery Images' &&  <ShowGalleyImages />}
       
       </div>
        </div>
      </section>
    </>
  );
};

export default page;
