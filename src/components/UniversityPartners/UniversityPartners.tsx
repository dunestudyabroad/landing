"use client";

import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export default function UniversityPartners() {
  const images = Array.from({ length: 50 }, (_, i) => ({
    imgsrc: `/partnersLogo/${i + 1}.png`,
  }));

  return (
    <div className="rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden ">
      <h2 className="text-center text-2xl md:text-[44px] font-semibold my-12">
        Our Partnering <span className="text-purple-400">Universities</span>
      </h2>
      {/* Row 1: left to right */}
      <InfiniteMovingCards
        items={images}
        direction="right"
        speed="slow"
        className="mb-4"
      />
      {/* Row 2: right to left */}
      <InfiniteMovingCards
        items={images}
        direction="left"
        speed="slow"
        className="mt-4"
      />
    </div>
  );
}
