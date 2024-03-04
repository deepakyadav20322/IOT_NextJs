"use client";

import { useState } from "react";
import Team from "./Team";
import Vision from "./Vision";
import Mission from "./Mission";

const aboutItems = [{ name: "Vision" }, { name: "Mission" }, { name: "Team" }];

const VTMtabs = () => {
  const [tab, setTab] = useState("Mission");
  return (
    <div className=" max-w-7xl m-auto my-6 md:my-8">
      {/* navigation menu for vision, mission and team aection */}
      <div className="max-w-6xl border-[1px] border-[#a4e401] rounded-lg h-10 m-auto">
        <ul className="flex flex-row justify-around items-center h-full bg-[#a4e401] rounded-lg ">
          {aboutItems.map((item) => (
            <li
              onClick={() => setTab(item.name)}
              key={item.name}
              className="rounded-s-lg w-full flex justify-center items-center h-full hover:bg-gray-100 transition-all duration-200 cursor-pointer border-r-2"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      <div className=" transition-all duration-500 ease-linear">
        {aboutItems && tab == "Mission" && <Mission />}
        {aboutItems && tab == "Team" && <Team />}
        {aboutItems && tab == "Vision" && <Vision />}
      </div>
    </div>
  );
};

export default VTMtabs;
