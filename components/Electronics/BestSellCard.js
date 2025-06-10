import Image from "next/image";
// import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
// import { IoMdHeartEmpty } from "react-icons/io";

export default function BestSellCard({
  name,
  actualPrice,
  discountedPrice,
  image,
  brand
}) {

const percentageValue = () => {
    return actualPrice * 0.25;
}


  return (
    <div className="relative rounded-xl  w-[270px] h-[524px] shadow-xl">
      <div className="card-image p-4 bg-[#f8f9fa] rounded-tl-xl rounded-tr-xl w-full">
        <Image
          className="mx-auto w-full mt-3 rounded-3xl  mb-4 transition-transform duration-300 ease-in-out transform hover:scale-105"
          src={image}
          width={210}
          height={190}
          alt="best-selling"
        />

        {/* Heart */}

        <div>
          <button className="discount-marker absolute z-10 top-5   text-[12px] bg-[#F78125] text-white px-3 py-1.5 rounded-2xl transition-transform duration-300 ease-in-out transform hover:scale-105">
            25% OFF
          </button>

          <button className="heart-icon border-2 border-[#23263B] m-2 p-1 rounded-full top-[2%] absolute ml-51 z-10 bg-white transition-transform duration-300 ease-in-out transform hover:scale-105 ">
            <FaHeart className=" hover:text-[red] text-[#23263B] text-[24px]" />
          </button>
        </div>
      </div>

      {/* Description */}
      <div className="p-4">

        <div>
            <span className="text-gray-600 text-[12px] text-[#666] font-semibold">{brand}</span>
        </div>

        <div>
             <p className="text-[#1a1a1a] font-bold text-[16px]">{name}</p>
        </div>

        <div className="flex gap-5 my-2 items-center">
            <p className="font-bold text-[#F78125] text-[16px] unique-text">$ {discountedPrice}</p>

            <p className=" text-[14px] unique-text font-bold text-gray-600 line-through">
            $ {actualPrice}
          </p>

            <button className="p-1 bg-[#dcfce7] text-[#86efac] text-[12px] border border-[#86efac]  rounded-md">Save ${percentageValue()}</button>
        </div>
      </div>

      {/* Btn */}
      <div className="px-4 gap-6 flex">
          <button className="bg-[#F78125] text-white p-2 rounded-md">
              Add To Cart
          </button>
          <button className="text-[#F78125] border border-[#F78125] hover:text-white hover:bg-[#F78125] p-2 rounded-md">
              Quick View
          </button>
      </div>
    </div>
  );
}
{
  /* 

    


      

      
      <div className="card-details w-[195.28px]">
        <div>
        <span className="text-gray-600 text-[10px] mt-2">BRAND/ TYPE</span>

        </div>

        <div className="h-[55.4px]">
        <h3 className="text-[14px] mb-5 font-bold ">{name}</h3>

        </div>

        <div className="flex h-[22px] my-8 items-center">
          <p className="font-bold text-[#F78125] text-[18px] unique-text">$ {discountedPrice}</p>
          <p className="ml-4 text-[16px] unique-text font-bold text-gray-600 line-through italic">
            $ {actualPrice}
          </p>
        </div>

        <div className="btns items-center gap-3 flex pt-1">
            <button className=" w-[97.25px] h-[21px]  bg-[#dcfce7]  text-[10px] border border-[#86efac] rounded">FREE SHIPPING</button>

            <button className=" w-[97.25px] h-[21px]  bg-red-300  text-red-500 text-[10px] border border-red-500 rounded">FREE GIFT</button>
        </div>
      </div>
 */
}
