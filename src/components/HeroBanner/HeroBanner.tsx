"use client";

import Image from "next/image";
import React from "react";
import image from "../../../public/herobanner/homebanner.webp";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
function HeroBanner() {
  return (
    <>
      <div className="bg-[#F8F1FF]">
        <div className="w-full flex justify-center items-center relative">
          <Image
            src={image}
            alt="Hero banner image"
            priority
            width={1920} // Keep as the intrinsic width of the source image
            height={1080} // Keep as the intrinsic height of the source image
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
            className="object-cover w-full lg:h-[100vh] h-[80vh] md:object-center sm:object-[30%_center] object-[63%_center]"
            style={{ aspectRatio: "16/9" }}
            quality={75} // Adjust compression (default is 75, lower for more savings)
          />
          <div className="absolute top-[15%] left-[10%]">
            <h1 className="w-[70%] md:w-[60%] lg:w-[50%] font-helvetica text-[27px] font-extrabold lg:text-[80px] leading-[1] lg:leading-24 text-[#AF9FFF]">
            Planning to Study Abroad, Get Admission for Intakes 2025
            </h1>
            <ScrollLink
              to="form-section"
              smooth={true}
              duration={3000}
              offset={-10} // adjust if you have fixed headers
              aria-label="Start the process"
              className="cursor-pointer lg:px-6 lg:mt-7 mt-5 bg-black rounded-[60px] py-2 px-4 text-xl lg:text-[26px] lg:py-3 text-white inline-block"
            >
              Let&apos;s Get Started
            </ScrollLink>
            <div className="mt-5 md:hidden">
              <p className="text-[16px] w-[70%] text-[#29357299] md:text-[18px]">
                For Free <br /> Counselling Contact
              </p>
              <Link href="tel:+918792358999">
                <p className="text-[20px] font-bold text-[#293572] md:text-[18px]">+91 879 235 8999</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroBanner;
