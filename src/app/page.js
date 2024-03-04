'use client'
import CountSection from "@/components/CountSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";



export default function Home() {
   console.log("home pages")
  return (
    <div className='min-h-screen '>
   <div className="max-w-7xl  m-auto px-3 sm:px-4 lg:px-0">
  <HeroSection/>
  <CountSection/>
  <div className="flex flex-row justify-evenly  items-center gap-y-4 flex-wrap my-6">
  <ServiceCard/>
  <ServiceCard/>
  <ServiceCard/>
  <ServiceCard/>
  
  </div>
  {/* ------------------------------------ */}
  <div className="max-w-md w-full  mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-7xl p-2 my-10 border-[1px]">
  <div className="md:flex">
    <div className="md:shrink-0">
      <img className="h-48 w-full object-cover md:h-full md:w-2/3 aspect-[2/1]" src={`https://images.unsplash.com/photo-1637734433731-621aca1c8cb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=404&q=80`} alt="Modern building architecture"/>
    </div>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold ">Company retreats</div>
      <Link href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</Link>
      <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
    </div>
  </div>
</div>

    {/* ---------------------------------- */}
    </div>
   {/* <button onClick={
    ()=>(toast.error('error occure', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
}))
} className="text-xl border-2 bg-green-400 text-black">Toast</button> */}
    <Footer/>
    
    </div>
    
  )
}
