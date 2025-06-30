import Image from "next/image";
import React from "react";

const CertifiedExelence = () => {
  const rowOne = ["/CertifiedExelence/1.svg", "/CertifiedExelence/2.svg", "/CertifiedExelence/3.svg"];
  const rowTwo = ["/CertifiedExelence/4.svg", "/CertifiedExelence/5.svg", "/CertifiedExelence/6.svg"];
  return (
    <section className="bg-white overflow-hidden">
      <div className="mx-10 lg:mx-32">
        <h1 className="lg:text-[45px] text-[23px] font-bold my-10 text-center">
          <span className="text-[#CEB3FE]">Certified</span> for Excellence
        </h1>
        <div className="hidden xl:flex justify-between">
          <Image src="/CertifiedExelence/1.svg" alt="/CertifiedExelence/1.svg" width={100} height={100} className="w-[15%] lg:h-[30vh]" />
          <Image src="/CertifiedExelence/2.svg" alt="/CertifiedExelence/1.svg" width={100} height={100} className="w-[15%] lg:h-[30vh]" />
          <Image src="/CertifiedExelence/3.svg" alt="/CertifiedExelence/1.svg" width={100} height={100} className="w-[15%] lg:h-[30vh]" />
          <Image src="/CertifiedExelence/4.svg" alt="/CertifiedExelence/1.svg" width={100} height={100} className="w-[20%] lg:h-[30vh]" />
          <Image src="/CertifiedExelence/5.svg" alt="/CertifiedExelence/1.svg" width={100} height={100} className="w-[15%] lg:h-[30vh]" />
          <Image src="/CertifiedExelence/6.svg" alt="/CertifiedExelence/1.svg" width={100} height={100} className="w-[15%] lg:h-[30vh]" />
        </div>
        <div className="hidden lg:flex">
          <div className="flex justify-center gap-24 xl:hidden">
            <Image src="/CertifiedExelence/1.svg" alt="/CertifiedExelence/1.svg" width={100} height={100} className="w-[18%] lg:h-[30vh]" />
            <Image src="/CertifiedExelence/2.svg" alt="/CertifiedExelence/1.svg" width={100} height={100} className="w-[18%] lg:h-[30vh]" />
            <Image src="/CertifiedExelence/3.svg" alt="/CertifiedExelence/1.svg" width={100} height={100} className="w-[18%] lg:h-[30vh]" />
          </div>
          <div className="flex justify-center  xl:hidden">
            <Image src="/CertifiedExelence/4.svg" alt="/CertifiedExelence/1.svg" width={100} height={100} className="w-[40%] lg:h-[30vh]" />
            <Image src="/CertifiedExelence/5.svg" alt="/CertifiedExelence/1.svg" width={100} height={100} className="w-[15%] mr-2 lg:h-[30vh]" />
            <Image src="/CertifiedExelence/6.svg" alt="/CertifiedExelence/1.svg" width={100} height={100} className="w-[15%] lg:h-[30vh]" />
          </div>
        </div>
        <div className="flex flex-col gap-6 lg:hidden ">
          <div className="flex justify-center gap-6">
            <Image src="/CertifiedExelence/1.svg" alt="/CertifiedExelence/1.svg" width={100} height={100} className="w-[30%] lg:h-[30vh]" />
            <Image src="/CertifiedExelence/2.svg" alt="/CertifiedExelence/1.svg" width={100} height={100} className="w-[30%] lg:h-[30vh]" />
          </div>
          <div className="flex  justify-center gap-6">
          <Image src="/CertifiedExelence/3.svg" alt="/CertifiedExelence/1.svg" width={100} height={100} className="w-[30%] lg:h-[30vh]" />
          <Image src="/CertifiedExelence/4.svg" alt="/CertifiedExelence/1.svg" width={100} height={100} className="w-[30%] lg:h-[30vh]" />
          </div>
          <div className="flex  justify-center gap-6">
          <Image src="/CertifiedExelence/5.svg" alt="/CertifiedExelence/1.svg" width={100} height={100} className="w-[30%] mr-2 lg:h-[30vh]" />
          <Image src="/CertifiedExelence/6.svg" alt="/CertifiedExelence/1.svg" width={100} height={100} className="w-[30%] lg:h-[30vh]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertifiedExelence;
