"use client";

// import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";

import TrendingList from "./Trending/trending-list";

export default function Trending() {
 

  return (
    <div className="container trending-main px-10 w-full pb-[64px] pt-[64px]">

      <p className="section-header  pb-3 text-[32px] font-semibold">
        TRENDING NOW
      </p>

     
        <div className="flex hide-scrollbar scroll-smooth">
          <TrendingList />
        </div>
      </div>

  
  );
}
