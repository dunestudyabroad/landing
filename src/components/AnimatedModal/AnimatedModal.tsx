"use client";
import { IconEyeClosed } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React from "react";
interface DummyData {
  id: number;
  country: string;
  description: string;
  image: string;
  flag: string;
  alt: string;
  univercities?: { name: string; image: string }[];
}

interface FancyModalProps {
  open: boolean;
  handleClose: (open: boolean) => void;
  data?: DummyData;
}
interface FancyModalProps {
  open: boolean;
  handleClose: (open: boolean) => void;
}

export default function FancyModal({ open, handleClose, data }: FancyModalProps) {
  const containerRef = React.useRef(null);

  const dummyContent = (
    <div className="lg:p-6 space-y-4  text-neutral-800">
      <h2 className="text-3xl  font-bold">{data?.country}</h2>
      <ul className="space-y-4">
        {data?.univercities?.map((item, index) => {
          return (
            <li key={index} className="flex items-center justify-between gap-2">
              <h2 className="text-2xl font-semibold text-black">{item?.name}</h2>
              <Image src={item?.image} alt={data?.alt} width={150} height={100} className=" object-cover" />
            </li>
          );
        })}
      </ul>
    </div>
  );

  // Handle click outside
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      handleClose(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0  flex justify-center items-center z-[120289343] overflow-auto" data-lenis-prevent>
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              className="fixed inset-0  backdrop-blur-md bg-black/30"
              onClick={handleBackdropClick} // Add click handler
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateX: -10 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotateX: 0,
                transition: {
                  type: "spring",
                  damping: 20,
                  stiffness: 250,
                  duration: 0.5,
                },
              }}
              exit={{
                opacity: 0,
                y: -50,
                scale: 0.9,
                transition: { duration: 0.3 },
              }}
              ref={containerRef}
              className="max-w-5xl my-20 w-full mx-4 bg-white/80 backdrop-blur-xl shadow-xl rounded-2xl p-6 relative z-[60] border border-white/30"
            >
              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { delay: 0.2, type: "spring", stiffness: 300 },
                }}
                whileHover={{ rotate: 90, scale: 1.1 }}
                onClick={() => handleClose(false)}
                className="absolute top-4 right-4 h-10 w-10 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50"
              >
                <IconEyeClosed className="h-6 w-6 text-black" />
              </motion.button>

              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.3, duration: 0.5 },
                }}
              >
                {dummyContent}
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
