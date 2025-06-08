"use client";

import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";
import AccessoriesList from "./accessories-list";
import React from "react";
import Slider from "react-slick";
import accessories from "./accessories";


export default function NewAccessories() {
  // const scrollRef = useRef();

  // const scrollRight = () => {
  //   scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
  // };


  return (
    <div id="new-arrivals" className="container px-10 w-full pb-[64px] pt-[64px]">
      <p className="section-header  pb-4 text-[32px] font-semibold">NEW IN... ACCESORIES</p>

      <div className="flex hide-scrollbar  scroll-smooth">
        <AccessoriesList accessories ={accessories} />
      </div>

      
     </div>
    
  );
}

