"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import FancyModal from "../AnimatedModal/AnimatedModal";

interface dummyData {
  id: number;
  country: string;
  description: string;
  image: string;
  flag: string;
  alt: string;
  univercities?: {name: string; image: string}[]; // Optional property for university
}

const dummyData: dummyData[] = [
  {
    id: 1,
    country: "United States of America",
    univercities: [{name:"Harvard University",image:"/TopCountries/university/51.png"},{name:"Harvard University",image:"/TopCountries/university/52.png"},{name:"Stanford University",image:"/TopCountries/university/53.png"},{name:"University of California, Berkeley (UCB)",image:"/TopCountries/university/54.png"},{name:"California Institute of Technology (Caltech)",image:"/TopCountries/university/55.png"}],
    description: "World's largest economy, diverse job opportunities, and renowned universities with extensive research facilities.",
    image: "/TopCountries/countryImages/1.webp",
    flag: "/TopCountries/flagLogos/1.png",
    alt: "Statue of Liberty",
  },
  {
    id: 6,
    country: "United Kingdom",
    description: "Qualifications recognized worldwide, scholarships, and fee waivers for international students.",
    image: "/TopCountries/countryImages/6.webp",
    flag: "/TopCountries/flagLogos/6.png",
    alt: "Golden Gate Bridge",
    univercities: [{name:"University of Glasgow",image:"/TopCountries/university/41.png"},{name:"University of Birmingham",image:"/TopCountries/university/42.png"},{name:" Kings College London ",image:"/TopCountries/university/43.png"},{name:"The University of Manchester 1824",image:"/TopCountries/university/44.png"},{name:"The University of Edinburgh",image:"/TopCountries/university/45.png"}]
  },
  {
    id: 3,
    country: "Australia",
    description: "Globally recognized qualifications, scholarships, and strong industry connections.",
    image: "/TopCountries/countryImages/3.webp",
    flag: "/TopCountries/flagLogos/3.png",
    alt: "New York Skyline",
    univercities: [{name:"University of Sydney",image:"/TopCountries/university/36.png"},{name:"UNSW Sydney",image:"/TopCountries/university/37.png"},{name:"The university of melbourne",image:"/TopCountries/university/38.png"},{name:"The University of Queensland Australia",image:"/TopCountries/university/39.png"},{name:"Monash University",image:"/TopCountries/university/40.png"}]
  },
  
   {
     id: 7,
     country: "Ireland",
     description: "High standard of education, vibrant cultural scene, and post-study work opportunities.",
     image: "/TopCountries/countryImages/7.webp",
     flag: "/TopCountries/flagLogos/7.png",
     alt: "New York Skyline",
     univercities: [{name:"University of Southern Maine",image:"/TopCountries/university/1.png"},{name:" DCU Dublin City University",image:"/TopCountries/university/2.png"},{name:"Trinity College Dublin",image:"/TopCountries/university/3.png"},{name:"University College Cork",image:"/TopCountries/university/4.png"},{name:"UCD Dublin",image:"/TopCountries/university/5.png"}]
   },
  {
    id: 2,
    country: "Canada",
    description: "Immigration-friendly policies, job-focused courses, and post-study work permits.",
    image: "/TopCountries/countryImages/2.webp",
    flag: "/TopCountries/flagLogos/2.png",
    alt: "Golden Gate Bridge",
    univercities: [{name:"University of Alberta",image:"/TopCountries/university/31.png"},{name:"McGill",image:"/TopCountries/university/32.png"},{name:"University of Toronto",image:"/TopCountries/university/33.png"},{name:"The University of British Columbia",image:"/TopCountries/university/34.png"},{name:"Youk U",image:"/TopCountries/university/35.png"}]
  },
  {
    id: 10,
    country: "Germany",
    description: "Strong economy, free or low-cost education, and opportunities in engineering, technology, and research.",
    image: "/TopCountries/countryImages/10.webp",
    flag: "/TopCountries/flagLogos/10.png",
    alt: "Golden Gate Bridge",
    univercities: [{name:"Frankfurt School of Finance & Management",image:"/TopCountries/university/11.png"},{name:"University of Mannheim",image:"/TopCountries/university/12.png"},{name:"Rwthaachen University",image:"/TopCountries/university/13.png"},{name:"Technical university of Munich",image:"/TopCountries/university/14.png"},{name:"Georg august university",image:"/TopCountries/university/15.png"}]
  },
  {
    id: 4,
    country: "New Zealand",
    description: "High-quality education system, stunning landscapes, and work opportunities for international students.",
    image: "/TopCountries/countryImages/4.webp",
    flag: "/TopCountries/flagLogos/4.png",
    alt: "Grand Canyon",
    univercities: [{name:"University of Otago",image:"/TopCountries/university/6.png"},{name:"Massey University",image:"/TopCountries/university/7.png"},{name:" University of Auckland",image:"/TopCountries/university/8.png"},{name:"University of Canterbury",image:"/TopCountries/university/9.png"},{name:"Victoria university of Wellington",image:"/TopCountries/university/10.png"},]
  },
  {
    id: 5,
    country: "Italy",
    description: "Rich cultural heritage, prestigious universities, and opportunities in arts, fashion, and humanities.",
    image: "/TopCountries/countryImages/5.webp",
    flag: "/TopCountries/flagLogos/5.png",
    alt: "Statue of Liberty",
    univercities: [{name:"Politecnico di Milano",image:"/TopCountries/university/56.png"},{name:"Sapienza University of Rome",image:"/TopCountries/university/57.png"},{name:"University of Bologna",image:"/TopCountries/university/58.png"},{name:"University of Padua",image:"/TopCountries/university/59.png"},{name:"University of Milan",image:"/TopCountries/university/60.png"}]
  },
  {
    id: 8,
    country: "France",
    description: "Renowned for arts and culture, prestigious institutions, and opportunities in fashion, culinary arts, and business.",
    image: "/TopCountries/countryImages/8.webp",
    flag: "/TopCountries/flagLogos/8.png",
    alt: "Grand Canyon",
    univercities: [{name:"University Paris Saclay",image:"/TopCountries/university/21.png"},{name:"Republique Francaise",image:"/TopCountries/university/22.png"},{name:"Sorbonne University",image:"/TopCountries/university/23.png"},{name:"University De Lyon",image:"/TopCountries/university/24.png"},{name:"University de Bordeaux",image:"/TopCountries/university/25.png"}]
  },
  {
    id: 9,
    country: "Indonesia",
    description: "Growing economy, diverse cultural experiences, and affordable education options.",
    image: "/TopCountries/countryImages/9.webp",
    flag: "/TopCountries/flagLogos/9.png",
    alt: "Statue of Liberty",
    univercities: [{name:"University of Indonesia",image:"/TopCountries/university/61.png"},{name:"Gadjah Mada University",image:"/TopCountries/university/62.png"},{name:"Bandung Institute of Technology",image:"/TopCountries/university/63.png"},{name:"Diponegoro University",image:"/TopCountries/university/64.png"},{name:"Padjadjaran University",image:"/TopCountries/university/65.png"}]
  },
  {
    id: 11,
    country: "Japan",
    description: "Advanced technology, high-quality education, and unique cultural experiences.",
    image: "/TopCountries/countryImages/11.webp",
    flag: "/TopCountries/flagLogos/11.png",
    alt: "New York Skyline",
    univercities: [{name:"University of Tokyo",image:"/TopCountries/university/66.png"},{name:"Kyoto University",image:"/TopCountries/university/67.png"},{name:"Osaka University",image:"/TopCountries/university/68.png"},{name:"Tohoku University",image:"/TopCountries/university/69.png"},{name:"Keio University",image:"/TopCountries/university/70.png"}]
  },
  {
    id: 12,
    country: "Sweden",
    description: "Innovative education system, focus on sustainability, and opportunities in technology and design.",
    image: "/TopCountries/countryImages/12.webp",
    flag: "/TopCountries/flagLogos/12.png",
    alt: "Grand Canyon",
    univercities: [{name:"KTH Royal Institute of Technology",image:"/TopCountries/university/71.png"},{name:"Lund University",image:"/TopCountries/university/72.png"},{name:"Uppsala University",image:"/TopCountries/university/73.png"},{name:"Stockholm University",image:"/TopCountries/university/74.png"},{name:"Chalmers University of Technology",image:"/TopCountries/university/75.png"}]
  },
  {
    id: 13,
    country: "Netherland",
    description: "High-quality education, English-taught programs, and strong international focus.",
    image: "/TopCountries/countryImages/13.webp",
    flag: "/TopCountries/flagLogos/13.png",
    alt: "Statue of Liberty",
    univercities: [{name:"Delft University of Technology",image:"/TopCountries/university/76.png"},{name:"University of Amsterdam",image:"/TopCountries/university/77.png"},{name:"Utrecht University",image:"/TopCountries/university/78.png"},{name:"Eindhoven University of Technology",image:"/TopCountries/university/79.png"},{name:"Leiden University",image:"/TopCountries/university/80.png"}]
  },
  {
    id: 14,
    country: "Malaysia",
    description: "A dynamic education system, breathtaking landscapes, and abundant work opportunities make it an attractive destination for international students.",
    image: "/TopCountries/countryImages/14.webp",
    flag: "/TopCountries/flagLogos/14.png",
    alt: "Golden Gate Bridge",
    univercities: [{name:"University Putra Malaysia",image:"/TopCountries/university/16.png"},{name:"University Kebangsaan Malaysia",image:"/TopCountries/university/17.png"},{name:"University Teknologi Malaysia",image:"/TopCountries/university/18.png"},{name:"University Sains Malaysia",image:"/TopCountries/university/19.png"},{name:"University Malaya",image:"/TopCountries/university/20.png"}]
  },
  {
    id: 15,
    country: "United Arab Emirates",
    description: "Rapidly growing economy, luxurious lifestyle, and opportunities in business and technology.",
    image: "/TopCountries/countryImages/15.webp",
    flag: "/TopCountries/flagLogos/15.png",
    alt: "New York Skyline",
    univercities: [{name:"University of Birmingham",image:"/TopCountries/university/46.png"},{name:"University of Dubai",image:"/TopCountries/university/47.png"},{name:"Bits Pilani Dubai Campus",image:"/TopCountries/university/48.png"},{name:"University of Wollongong",image:"/TopCountries/university/49.png"},{name:"Amity University Dubai",image:"/TopCountries/university/50.png"}]
  },
  {
    id: 16,
    country: "Malta",
    description: "Advanced technology, high-quality education, and a vibrant cultural scene.",
    image: "/TopCountries/countryImages/16.webp",
    flag: "/TopCountries/flagLogos/16.png",
    alt: "Grand Canyon",
    univercities: [{name:"GBSB Global business school",image:"/TopCountries/university/26.png"},{name:"L- University Malta",image:"/TopCountries/university/27.png"},{name:"American University of Malta",image:"/TopCountries/university/28.png"},{name:"GBS Malta",image:"/TopCountries/university/29.png"},{name:"Malta college of Arts and Science Technology",image:"/TopCountries/university/30.png"}]
  },
  {
    id: 17,
    country: "South Korea",
    description: "Choose the best university, country & course with expert guidance, ensuring a clear academic & career",
    image: "/TopCountries/countryImages/17.webp",
    flag: "/TopCountries/flagLogos/17.png",
    alt: "Statue of Liberty",
    univercities: [{name:"Seoul National University",image:"/TopCountries/university/81.png"},{name:"Yonsei University",image:"/TopCountries/university/82.png"},{name:"KAIST (Korea Advanced Institute of Science and Technology)",image:"/TopCountries/university/83.png"},{name:"Korea University",image:"/TopCountries/university/84.png"},{name:"Pohang University of Science and Technology (POSTECH)",image:"/TopCountries/university/85.png"}]
  },
];

export default function UsaCard() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<any>(null); // Ref to store Swiper instance
  const [open, setOpen] = useState(false); // State to manage modal visibility
  const [selectedCountry, setSelectedCountry] = useState<dummyData | undefined>();
  

  return (
    <section className="bg-white">
      <div className="container  mx-auto py-20 relative text-center">
        <div className="lg:mb-14 mb-8 mx-7 space-y-5 lg:space-y-3">
          <h1 className="font-bold text-2xl lg:text-[45px]">
            Choose from the <span className="text-[#CEB3FE]">Top Countries to Study Abroad</span>
          </h1>
          <h3 className="lg:text-[23px] text-lg text-[#1D1D1F] font-medium">
            Explore world-class education & career opportunities in the best study destinations.
          </h3>
        </div>
        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={{
            delay: 1000, // Time in ms between slides (3 seconds)
            disableOnInteraction: false, // Keeps autoplay running even when user interacts
          }}
          spaceBetween={20}
          slidesPerView={4}
          onSwiper={(swiper) => {
            swiperRef.current = swiper; 
          }}
          speed={1000}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 15 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
            1200: { slidesPerView: 3, spaceBetween: 20 },
            1580: { slidesPerView: 4, spaceBetween: 20 },
          }}
          className="mySwiper"
        >
          {dummyData.map((card, index) => (
            <SwiperSlide key={index}>
              <div className=" lg:max-w-sm bg-[#FDFAFE] h-[530px] rounded-2xl p-4 text-center flex flex-col justify-between">
                <div className="relative">
                  <div className="w-full h-48 relative rounded-xl overflow-hidden">
                    <Image src={card.image} alt={card.alt} fill className="rounded-xl object-cover" priority />
                  </div>
                  <div className="absolute -bottom-9 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-20 h-20 relative rounded-full border-4 border-white shadow-md overflow-hidden">
                      <Image src={card.flag} alt={`${card.country} Flag`} fill className="object-cover" priority />
                    </div>
                  </div>
                </div>
                <div className="mt-16 flex flex-col justify-between h-[calc(100%-12rem)]">
                  <div className="flex-1 overflow-y-auto">
                    <h2 className="text-[28px] font-extrabold text-gray-900">{card.country}</h2>
                    <p className="text-[#86868B] text-xl mt-2 px-2">{card.description}</p>
                  </div>
                  <button aria-label="Learn More" onClick={()=>{setOpen(true);setSelectedCountry(card)}} className="text-[#5D5FDC] cursor-pointer text-xl font-extrabold mt-4 inline-block hover:underline">
                    Learn More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex gap-3 justify-end mt-4">
          <button
          
            ref={prevRef}
            aria-label="Previous slide"
            className="cursor-pointer bg-[#D2D2D7] text-gray-800 p-2 rounded-full shadow-md transition duration-300"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            ref={nextRef}
            aria-label="Next slide"
            className="cursor-pointer bg-[#D2D2D7] text-gray-800 p-2 rounded-full shadow-md transition duration-300"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      <FancyModal open={open} handleClose={setOpen} data={selectedCountry ? selectedCountry : undefined} />
    </section>
  );
}
