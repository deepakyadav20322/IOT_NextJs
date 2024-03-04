import React from "react";
import Image from "next/image";
function HeroSection() {
  return (
    <div className="max-w-7xl w-full mx-auto flex px-5 lg:px-2 pb-16 pt-8 lg:flex-row flex-col min-h-[60vh] lg:gap-y-0 sm:gap-y-10">
      <div className=" hero_left lg:w-1/2 lg:pr-14 md:pr-16 flex flex-col lg:items-start md:text-left mb-16 md:mb-0 items-center text-center lg:justify-center">
        <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-foreground ">
         Where innovation is
          <br className="hidden lg:inline-block" />
         <span className="text-[#a4e401]">conventional</span>
        </h1>
        <div className="mb-8 leading-relaxed text-secondary-foreground w-full ">
          Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
          plant cold-pressed tacos poke beard tote bag. Heirloom echo park
          mlkshk tote bag selvage.
          <div className="bg-[#a4e401] p-1 rounded-lg mt-2">
          <em>“Risk comes from not knowing what you're doing.”</em>
          <span> - Warren Buffett</span>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-[#020856e1] border-0 py-2 px-6 focus:outline-none hover:bg-[#020856] rounded text-lg">
            Button
          </button>
          <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
            Button
          </button>
        </div>
      </div>

      <div className="hero_right flex justify-center items-center flex-row  overflow-hidden lg:w-1/2">
        <div className="flex justify-center items-center flex-col transition-transform duration-200">
          <div className="p-2 border-black border-2 rounded-lg  mb-1 mr-1">
            <Image
              width={200}
              height={200}
              className="hover:scale-105 transition-transform "
              src={"/Images/ImageThree.png"}
            />
          </div>
          <div className="p-2 border-black border-2 rounded-lg mr-1">
            <Image
              width={200}
              height={200}
              className="hover:scale-105 transition-transform"
              src={"/Images/ImageOne.png"}
            />
          </div>
        </div>
        <div className="">
          <Image
            width={200}
            height={400}
            className=" p-2 border-2 border-black rounded-lg "
            src={"/Images/ImageTwo.png"}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
