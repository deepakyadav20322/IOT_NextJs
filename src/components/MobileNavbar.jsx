// 'use client'
// import Link from 'next/link';
// import { useState, useEffect } from 'react';

// const MobileNavbar = () => {

//     const navItems = [
//         {name:'Home',link:'/'},
//         {name:'About',link:'/about'},
//         {name:'Project',link:'/projects'},
//         {name:'Service',link:'/service'},
//     ]

//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     const handleOutsideClick = (e) => {
//       // Check if the clicked element is outside the component
//       if (isVisible && !e.target.closest('.max-w-72')) {
//         setIsVisible(false);
//       }
//     };

//     // Add a click event listener to the document
//     document.addEventListener('click', handleOutsideClick);

//     // Clean up the event listener on component unmount
//     return () => {
//       document.removeEventListener('click', handleOutsideClick);
//     };
//   }, [isVisible]);

//   return (
//     <div className={`absolute top-0 left-0 bg-red-500 min-h-screen ${isVisible ? '' : 'hidden'}`}>
//       <div className='min-w-72 w-full bg-slate-400 min-h-screen' onClick={(e) => e.stopPropagation()}>
//         {/* Navigation Links */}
//         <div className="flex flex-col justify-center items-center gap-y-8 py-6">
//             {navItems.map((item,ind)=>(
//                 <Link key={ind} href={item.link}>{item.name}</Link>
//             ))}
//       </div>
//       </div>
//     </div>
//   );
// };

// export default MobileNavbar;




