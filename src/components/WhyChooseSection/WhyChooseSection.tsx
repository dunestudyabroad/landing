import React from "react";
import Image from "next/image";

export function WhyChooseSection() {
  return (
    <div className="mx-auto px-4 py-8 sm:px-6 lg:px-24 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-28 bg-[#FDFAFE]">
      {/* Left Column - Text Content */}
      <div className="space-y-6 lg:space-y-8">
        <div>
          <h2 className="text-2xl md:text-[44px] font-bold text-gray-900">
            Why Choose
            <span className="block text-[#CEB3FE]">to Study Abroad</span>
          </h2>
        </div>

        <p className="text-[#86868B] text-base sm:text-lg lg:text-xl leading-relaxed">
        The right destination can shape your future, and at Dune, we ensure this journey is seamless. With expert guidance, personalized university selection, and end-to-end support, we help you make the best choice for your aspirations.
        </p>

        <div className="space-y-4 mt-8 lg:mt-20 w-full sm:w-[28rem] ml-0 sm:ml-5">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-transparent rounded-lg">
              <Image
                src="/whyChooseSectionImages/global.svg"
                width={40}
                height={40}
                alt="Graduate celebrating"
                className="rounded-lg w-10 h-10 sm:w-14 sm:h-14 "
              />
            </div>
            <div>
              <h3 className="text-[#86868B] text-lg sm:text-xl font-extrabold">Global Admissions</h3>
              <p className="text-[#86868B] text-base sm:text-xl">400+ global admissions – turning students’ dreams of studying abroad into reality.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 bg-transparent rounded-lg">
              <Image
                src="/whyChooseSectionImages/univercity.svg"
                width={40}
                height={40}
                alt="Graduate celebrating"
                className="rounded-lg w-10 h-10 sm:w-14 sm:h-14 "
              />
            </div>
            <div>
              <h3 className="text-[#86868B] text-lg sm:text-xl font-extrabold">University Representation</h3>
              <p className="text-[#86868B] text-base sm:text-xl">Representing 200 + universities across more than 30 countries.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="p-2 bg-transparent rounded-lg">
              <Image
                src="/whyChooseSectionImages/hand.svg"
                width={40}
                height={40}
                alt="Graduate celebrating"
                className="rounded-lg w-10 h-10 sm:w-14 sm:h-14 "
              />
            </div>
            <div>
              <h3 className="text-[#86868B] text-lg sm:text-xl font-extrabold">Personalized Support</h3>
              <p className="text-[#86868B] text-base sm:text-xl">Tailored guidance from university selection to visa approval.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="p-2 bg-transparent rounded-lg">
              <Image
                src="/whyChooseSectionImages/hassle.svg"
                width={40}
                height={40}
                alt="Graduate celebrating"
                className="rounded-lg w-10 h-10 sm:w-14 sm:h-14 "
              />
            </div>
            <div>
              <h3 className="text-[#86868B] text-lg sm:text-xl font-extrabold">Hassle-Free Process</h3>
              <p className="text-[#86868B] text-base sm:text-xl">Expert handling of applications, scholarships, & visas.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Image Grid */}
      <div className="relative hidden md:grid grid-cols-2 gap-2 sm:gap-4 lg:grid-cols-2">
        <Image
          src="/whyChooseSectionImages/image1.png"
          width={150}
          height={300}
          quality={100}
          alt="Graduate celebrating"
          className="rounded-lg w-full h-auto object-contain"
        />
        <Image
          src="/whyChooseSectionImages/image2.png"
          alt="Student studying in library"
          width={150}
          height={150}
          quality={100}
          className="rounded-lg w-full h-auto  mt-0 lg:mt-26"
        />
        <Image
          src="/whyChooseSectionImages/image3.png"
          alt="Student exploring city"
          width={150}
          height={300}
          quality={100}
          className="rounded-lg w-full h-auto object-contain"
        />
        <Image
          src="/whyChooseSectionImages/image4.png"
          alt="Student in cafe"
          width={150}
          height={300}
          quality={100}
          className="rounded-lg w-full h-auto  mt-0 lg2:mt-[-4rem] xl:mt-[-7rem] "
        />
      </div>
    </div>
  );
}
