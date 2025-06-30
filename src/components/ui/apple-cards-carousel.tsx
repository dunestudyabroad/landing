"use client";
import React, { useEffect, useState, createContext, useContext, JSX } from "react";
import { IconX, IconPlus, IconChevronRight, IconChevronLeft } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Image, { type ImageProps } from "next/image";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
  features?: string[];
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
  activeCardIndex: number | null;
  setActiveCardIndex: (index: number | null) => void;
}>({
  onCardClose: () => {},
  currentIndex: 0,
  activeCardIndex: null,
  setActiveCardIndex: () => {},
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex, activeCardIndex, setActiveCardIndex }}>
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div className={cn("absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l")}></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-4 pl-4",
              "mx-auto md:pl-24" // remove max-w-4xl if you want the carousel to span the full width of its container
            )}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                    once: true,
                  },
                }}
                key={"card" + index}
                className="last:pr-[5%] md:last:pr-[5%] rounded-3xl"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-2 md:mr-24 mr-6">
          <button
            className="relative z-40 h-10 w-10 rounded-full bg-[#D2D2D7A3] flex items-center justify-center disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
          >
            <IconChevronLeft className="h-8 w-6 text-[#0000008F]" />
          </button>
          <button
            className="relative z-40 h-10 w-10 rounded-full bg-[#D2D2D7A3] flex items-center justify-center disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}
            aria-label="Scroll right"
          >
            <IconChevronRight className="h-6 w-6 text-[#0000008F]" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

// Updated Card component to match the design in the screenshot
export const Card = ({ card, index }: { card: Card; index: number; layout?: boolean }) => {
  const {  activeCardIndex, setActiveCardIndex } = useContext(CarouselContext);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const handleFlip = () => {
    if (isMobile) {
      // If this card is already active, close it
      if (activeCardIndex === index) {
        setActiveCardIndex(null);
      } else {
        // Otherwise, set this card as active (closing any previously active card)
        setActiveCardIndex(index);
      }
    }
  };

  // Determine if this card is flipped based on whether it's the active card
  const isFlipped = isMobile ? activeCardIndex === index : false;

  return (
    <div className={`perspective md:h-[680px] md:w-[372px] h-[600px] w-[290px] ${isMobile ? "cursor-pointer" : "group"}`} onClick={handleFlip}>
      <div
        className={`relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] ${
          isMobile ? (isFlipped ? "[transform:rotateY(180deg)]" : "") : "group-hover:[transform:rotateY(180deg)]"
        }`}
      >
        {/* Front of card */}
        <div className="absolute inset-0 rounded-3xl bg-[#B298FE] overflow-hidden justify-between flex flex-col items-start [backface-visibility:hidden]">
          <div className="space-y-4 p-4 md:p-8">
            <h3 className="text-white text-2xl md:text-[36px] font-bold leading-tight font-helvetica">{card.title}</h3>
          </div>

          <div className="w-full flex items-center justify-center">
            <Image src={card.src || "/placeholder.svg"} alt={card.title} width={400} height={100} className="object-cover mb-16" />
          </div>

          <div className="absolute bottom-4 right-4 h-8 w-8 rounded-full bg-white flex items-center justify-center">
            <IconPlus className="h-5 w-5 text-[#b19bff]" />
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 rounded-3xl bg-[#B298FE] md:p-8 p-4 py-auto [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col">
          <div className="space-y-4">
            <h3 className="text-white text-2xl md:text-[36px]  font-bold leading-tight ">{card.title}</h3>
            <p className="text-white text-xl leading-relaxed font-helvetica font-medium">{card.category}</p>
          </div>

          <div className="space-y-4 md:mt-16 mt-4">
            {card.features?.map((feature, i) => (
              <div key={i} className="flex font-medium gap-2 text-white">
                <IconChevronRight className="h-6 w-6 pt-1 flex-shrink-0 font-medium" />
                <span className="text-xl">{feature}</span>
              </div>
            ))}
          </div>

          <div className="absolute bottom-4 right-4 h-8 w-8 rounded-full bg-white flex items-center justify-center">
            <IconX className="h-5 w-5 text-[#b19bff]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const BlurImage = ({ height, width, src, className, alt, ...rest }: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn("transition duration-300", isLoading ? "blur-sm" : "blur-0", className)}
      onLoad={() => setLoading(false)}
      src={src || "/placeholder.svg"}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};
