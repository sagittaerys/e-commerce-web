"use client";

import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";
import AccessoriesList from "./Accessories/accessories-list";
import React from "react";
// import Slider from "react-slick";
import accessories from "./Accessories/accessories";


export default function NewAccessories() {
 

  return (
    <div id="new-arrivals" className="container new-container px-10 w-full pb-[64px] pt-[64px]">
      <p className="section-header  pb-4 text-[32px] font-semibold">NEW ARRIVALS</p>

      <div className="flex hide-scrollbar  scroll-smooth">
        <AccessoriesList accessories ={accessories} />
      </div>

      
     </div>
    
  );
}

