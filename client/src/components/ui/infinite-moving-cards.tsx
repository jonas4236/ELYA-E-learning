import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetListCourseProps } from "@/Types";

interface CardsProps {
  items: GetListCourseProps[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: CardsProps) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.map((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  // console.log(items.map((val) => val.category_name))
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full bg-[#F5F5F5] py-8 overflow-hidden",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <div key={idx}>
            <Link to={`/category-course/${item.category_slug}`}>
              <li className="LinkText w-[250px] h-[173px] bg-white hover:bg-[#0e5ddd] shadow-lg shadow-blue-500/50 hover:-translate-y-4 transition-all duration-200 flex justify-center items-center flex-col relative rounded-2xl flex-shrink-0 px-8 py-6">
                <div>
                  <img src={item.category_icon} alt={item.category_slug} className="w-[50px] h-[50px] object-contain" />
                </div>
                <h1 className="text-[18px] font-medium mt-2 text-black">
                  {item.category_name}
                </h1>
              </li>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
};
