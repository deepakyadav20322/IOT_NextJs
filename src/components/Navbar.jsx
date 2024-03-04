import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";
import MobileNavBtn from "./MobileNavBtn";
import MobileNavbar from "./MobileNavbar";
import { cookies } from 'next/headers';
const Navbar = () => {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Project", link: "/projects" },
    { name: "Gallery", link: "/gallery" },

  ];

  const token = cookies()?.get('token');
  // console.log(token)
 
  return (
    <nav className="border-[#020856] backdrop-blur-lg  sticky top-0 left-0 z-50 navBar-shadow">
      <div className="max-w-7xl px-6 mx-auto flex flex-row justify-between items-center  sticky top-0 left-0 ">
        <div className=" flex gap-x-3 items-center">
          <Image
            src={"/Images/IotLogo.jpg"}
            height={60}
            width={60}
            className="rounded-full"
            alt="sitelogo"
          />
          <span className=" font-bold text-[#020856]">IoTVerse</span>
        </div>
        {/* Navigation Links */}
        <div className="hidden md:flex md:justify-center gap-x-6">
          {navItems.map((item, ind) => (
            <Link
              className="hover:text-[#020856e2] font-semibold relative custumeAnime"
              key={ind}
              href={item.link}
            >
              {item.name}
            </Link>
          ))}
          {token &&
           <Link
              className="hover:text-[#020856e2] font-semibold relative custumeAnime"
              key={"xl"}
              href={'/admin/dashboard'}
            >
              Dashboard
            </Link>
         }
        </div>
        <MobileNavBtn />
      </div>
    </nav>
  );
};

export default Navbar;
