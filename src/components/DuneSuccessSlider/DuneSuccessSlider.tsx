"use client";
import React from "react";
import { YouTubeEmbed } from "@next/third-parties/google";
import Link from "next/link";

const DuneSuccessSlider: React.FC = () => {
  return (
    <div className="w-full mx-auto py-20 md:py-24 bg-white">
      <div className="text-center mb-8 lg:mb-14">
        <h1 className="text-2xl md:text-[44px] font-bold mb-5">
          Dune's Secret to <span className="text-purple-400">Success</span>
        </h1>
        <h3 className="lg:text-[23px] text-lg text-[#1D1D1F] font-medium">
          Real students, real experiences - see how Dune made studying abroad possible
        </h3>
      </div>

      <div className="relative">
        <div className="relative rounded-3xl w-full px-2  max-w-7xl md:mx-auto overflow-hidden aspect-video">
          <YouTubeEmbed
            videoid="tYLYYSIarjk"
            params="modestbranding=1&rel=0"
            
          />
        </div>

      
      </div>
    </div>
  );
};

export default DuneSuccessSlider;
