'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import TestimonialCard from '@/TestimonialsCard/TestimonialsCard';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// Utility function to combine class names
const cn = (...classes: (string | undefined | false)[]) => {
  return classes.filter(Boolean).join(' ');
};

interface Testimonial {
  id: number;
  name: string;
  text: string;
  country: string;
  avatarUrl: string;
  dataSpeed?: string;
}

interface TestimonialGridProps {
  testimonials: Testimonial[];
  title?: {
    firstPart: string;
    highlightedPart: string;
  };
}

const TestimonialGrid: React.FC<TestimonialGridProps> = ({
  testimonials,
  title = { firstPart: 'Real People, Real', highlightedPart: 'Results' },
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [start, setStart] = useState(false);

  // Detect mobile screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Tailwind's `sm` breakpoint
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // GSAP animation for grid layout (only applied on desktop)
  useEffect(() => {
    if (!isMobile) {
      const elements = containerRef.current?.querySelectorAll('[data-speed]');
      elements?.forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-speed') || '1');
        const offset = speed * 500;
        gsap.fromTo(
          el,
          { y: offset },
          {
            y: 0,
            ease: 'power2.out',
            duration: 0.5,
            scrollTrigger: {
              trigger: el,
              start: 'top bottom',
              scrub: 0.5,
            },
          }
        );
      });
    }
  }, [isMobile]);

  // Carousel animation setup (only applied on mobile)
  useEffect(() => {
    if (isMobile && containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      // Set animation direction and speed
      containerRef.current.style.setProperty('--animation-direction', 'forwards');
      containerRef.current.style.setProperty('--animation-duration', '40s'); // Normal speed
      setStart(true);
    }
  }, [isMobile]);

  return (
    <>
      <style jsx>{`
        .animate-scroll {
          animation: scroll var(--animation-duration, 40s) linear infinite;
          animation-direction: var(--animation-direction, forwards);
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <div
        ref={containerRef}
        className="bg-[#FEFEFE] mx-auto px-4 sm:px-6 lg:px-8 py-20 transition-opacity duration-1000"
      >
        <h2 className="text-2xl md:text-[44px] font-bold text-center mb-16 lg:mb-36 xl:mb-48">
          {title.firstPart}{' '}
          <span className="text-purple-400">{title.highlightedPart}</span>
        </h2>

        {isMobile ? (
          <div
            className={cn(
              'scroller relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
              'w-full'
            )}
          >
            <ul
              ref={scrollerRef}
              className={cn(
                'flex w-max min-w-full shrink-0 flex-nowrap gap-4',
                start && 'animate-scroll',
                'hover:[animation-play-state:paused]'
              )}
            >
              {testimonials.map((item) => (
                <li
                  className="relative flex h-[450px] max-w-[300px] items-center justify-center"
                  key={item.id}
                >
                  <TestimonialCard
                    name={item.name}
                    text={item.text}
                    avatarUrl={item.avatarUrl}
                    country={item.country}
                  />
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex"
                data-speed={testimonial.dataSpeed || '1'}
              >
                <TestimonialCard
                  name={testimonial.name}
                  text={testimonial.text}
                  avatarUrl={testimonial.avatarUrl}
                  country={testimonial.country }
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default TestimonialGrid;