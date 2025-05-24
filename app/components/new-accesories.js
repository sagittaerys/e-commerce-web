"use client";

import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";
import AccessoriesList from "./accessories-list";

export default function NewAccessories() {
  const scrollRef = useRef();

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <div className="container px-10 relative w-full pb-[64px] pt-[64px]">
      <p className="  pb-4 text-[32px] font-semibold">
        NEW IN... ACCESORIES
      </p>

      <div className="hide-scrollbar overflow-x-scroll  scroll-smooth" ref={scrollRef}>
        <div className="flex">
           <AccessoriesList />
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
