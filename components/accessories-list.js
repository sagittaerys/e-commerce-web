import AccessoriesCard from "./accessories-card";
import { FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import { FaArrowLeft } from "react-icons/fa";

import accessories from "./accessories";

export default function AccessoriesList({accessories}){

  //This button dey disturb me.... I block him papa😂

  function PrevArrow(props) {
  const { onClick, currentSlide, slideCount, ...rest } = props; // extract known props and discard rest
  return (
    <button
      className="absolute w-[40px] h-[40px] p-2 left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white shadow-md items-center justify-center z-30"
            onClick={onClick}
      {...rest} 
    >
      <FaArrowLeft className="text-[14px]" fill={"black"} />
    </button>
  );
}


function NextArrow(props) {
    const { onClick, currentSlide, slideCount, ...rest } = props;
    return (
        <button
            className="absolute p-2 border-0  bg-[#ffffff] shadow-xl z-30 text-white"
            onClick={onClick}
            {...rest} 
        >
            <FaArrowRight className="text-[14px]" fill={"black"} />
        </button>
    );
}


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
    // nextArrow: <NextArrow />, // pass in the functions created above... Na wa oo
    // prevArrow: <PrevArrow />

  };




  return(
     <Slider {...settings}>

       {accessories.map((accessory, accessories) => (
         <AccessoriesCard key={accessories.id} {...accessory} />
       ))
       }

     </Slider>



    
  );
}