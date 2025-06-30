"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: {
  items: { imgsrc: string }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const duration =
    speed === "fast" ? "20s" : speed === "slow" ? "80s" : "40s";
  const directionValue = direction === "left" ? "normal" : "reverse";

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        "mask-image-linear-gradient",
        className
      )}
      style={
        {
          "--animation-duration": duration,
          animationDirection: directionValue,
        } as React.CSSProperties
      }
    >
      <div
        className={cn(
          "flex w-max animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{ animationDirection: directionValue }}
      >
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center justify-center px-4">
            <Image
              src={item.imgsrc}
              alt={`partner-${idx}`}
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
