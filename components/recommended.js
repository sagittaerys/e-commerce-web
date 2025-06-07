"use client";

import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";
import RecommendedList from "./recommended-list";

export default function Recommended() {
  // const scrollRef = useRef();

  // const scrollRight = () => {
  //   scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
  // };

  return (
    <div className="container px-10 relative w-full pb-[64px] pt-[64px]">

      <p className="section-header  pb-3 text-[32px] font-semibold">
        RECOMMENDED FOR YOU
      </p>

     
        <div className="flex hide-scrollbar scroll-smooth">

          <RecommendedList />
        </div>
      </div>

  );
}
