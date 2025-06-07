import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";

import { IoMdStar } from "react-icons/io";


export default function AccessoriesCard({
  name,
  actualPrice,
  discountedPrice,
  image,
}) {
  return (
    <div className="card-trending flex relative flex-col w-[180px] h-[276] text-[12px]">
      <div className="heart-icon absolute z-10 pt-2 ml-37 bg-white p-1.5 mt-1 ">
        <FaRegHeart />
      </div>

      <div className="card-image">
        <Image src={image} width={180.24} height={195} alt="accessories" />
      </div>

      <div className="discount-marker absolute z-10 top-43 ml-2 text-[10px] bg-[#F78125] text-white p-0.5 px-1 rounded ">
        42% OFF
      </div>
      <div className="card-details">
        <span className="text-gray-600 text-[10px] mt-1">BRAND/ TYPE</span>
        <h3>{name}</h3>

        <div className="flex">
          <p className="font-bold">€ {discountedPrice}</p>
          <p className="pl-3 font-bold text-gray-600 line-through italic">
            € {actualPrice}
          </p>
        </div>
        <div className="ratings items-center flex pt-1">
          <IoMdStar className="text-[#23263B]" />
          <IoMdStar className="text-[#23263B]" />
          <IoMdStar className="text-[#23263B]" />
          <IoMdStar className="text-[#23263B]" />
          <IoMdStar className="text-[#23263B]" />
          <p>(45)</p>
        </div>
      </div>
    </div>
  );
}
