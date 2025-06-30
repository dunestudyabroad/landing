import Link from "next/link";
import React from "react";
import { NavIcon2,NavIcon1 } from "../../../public/icons/icon";


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between overflow-hidden  p-4 lg:p-12 bg-[#faf2fe] md:px-24">
      {/* Left Section: Icon and Title */}
      <Link href="/" aria-label="Go to homepage">
        <div className="flex cursor-pointer items-center  md:mx-0 space-x-2 lg:space-x-3 ">
          {/* Icon Placeholder */}
          <div className="max-w-[244px]">

          <NavIcon1/>
          </div>
          <div className="border-l-2 border-[#00000033] pl-3"><NavIcon2/></div>
          
        </div>
      </Link>

      {/* Right Section: Contact Info */}
      <div className="text-right hidden md:block me-10">
        <p className="text-[14px] text-[#29357299] md:text-[18px]">For Free Counselling Contact</p>
        <Link href="tel:+918792358999" ><p className="text-[14px] font-semibold text-[#293572] md:text-[18px]">+91 879 235 8999</p></Link>      </div>
       
    </nav>
  );
};

export default Navbar;
