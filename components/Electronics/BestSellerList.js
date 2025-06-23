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
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    dotsClass: "slick-dots custom-dots",
    lazyLoad: "ondemand",
    cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
   };


  return(
    <Slider {...settings}>

        
          
          {BestSellers.map((product) => ( <BestSellCard key={product.id} {...product} /> ))}
    
    </ Slider>
  )
}


{/* // <div className="flex > */}