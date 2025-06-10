"use client";

import BestSellCard from "./BestSellCard"
import BestSellers from "./BestSellers"
import Slider from "react-slick";
export default function BestSellerList(){

  const settings = {
    pauseOnHover: true,
    dots: true,
    infinite: true,
    speed: 370,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    dotsClass: "slick-dots custom-dots",
    lazyLoad: "ondemand",
    cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
   };


  return(
    <Slider {...settings}>

        
          
          {BestSellers.map((Sellers, index) => ( <BestSellCard key={index} {...Sellers} /> ))}
    
    </ Slider>
  )
}


{/* // <div className="flex > */}