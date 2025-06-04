import RecommendedCard from "./recommended-card";
import recommendedProducts from "./recommemded-products";
import { FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import { FaArrowLeft } from "react-icons/fa";


export default function RecommendedList(){

  

   const settings = {
    pauseOnHover: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    dotsClass: "slick-dots custom-dots",
    lazyLoad: "ondemand",
    cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
   };




  return(
     <Slider {...settings}>

       {recommendedProducts.map((recommended, index) => (
         <RecommendedCard key={index.id} {...recommended} />
       ))
       }

     </Slider>



    
  );
}