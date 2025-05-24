"use client";

import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";

import TrendingList from "./trending-list";

export default function Trending() {
  const scrollRef = useRef();

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <div className="container relative w-full pb-[64px] pt-[64px]">
      <p className=" px-10 pb-3 text-[32px] font-semibold">
        TRENDING NOW
      </p>

      <div className="hide-scrollbar overflow-x-scroll  scroll-smooth" ref={scrollRef}>
        <div className="flex">
          <TrendingList />
        </div>
      </div>

      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white pointer-events-none" />

      {/* Scroll Button */}
      <button
        onClick={scrollRight}
        className="absolute mt-5 right-2 top-1/2 -translate-y-1/2 bg-white p-3 rounded p-2 shadow z-10"
      >
        <FaArrowRight />
      </button>
    </div>
  );
}
