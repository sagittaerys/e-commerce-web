import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";

export default function Summer() {
  return (
    <div className="container summer-container px-10 bg-[#F4F4F5] pb-[64px] pt-[64px]">
      <p className="section-header  pt-15  pb-3 text-[32px] font-semibold tracking-wide">
        SPRING/SUMMER 2025
      </p>

      <div className="summer-card gap-[40px] flex text-[12px]">
        {/* Eco */}
        <div className="huge relative">
          <div className="flex flex-col">
            <div className="discount-marker absolute z-10 top-33 ml-2 text-[10px] bg-[#89D9D3] text-white p-0.5 px-1 rounded ">
              ECO
            </div>

            <div className="discount-marker absolute z-10 top-38 ml-2 text-[10px] bg-[#F78125] text-white p-0.5 px-1 rounded ">
              42% OFF
            </div>
          </div>

          <div className="eco-image">
            <Image
              src="/Image VI.png"
              alt="eco-shoes"
              width={400.53}
              height={195}
            />
          </div>
          <div className="eco-content">
            <div className="card-details">
              <span className="text-[#666] text-[10px] mt-1">
                GreenStride / ECO
              </span>
              <h3 className="font-bold text-[13px]">GreenStride Eco Sneakers</h3>

              <div className="colors items-center flex gap-2">
                <button className="w-[15px] h-[15px] hover:border-[#F78125] border-gray-700 rounded-[100%] bg-[#FFA724]"></button>
                <button className="w-[15px] h-[15px] hover:border-[#F78125] border-gray-700 rounded-[100%] bg-[#952AFF]"></button>
                <button className="w-[15px] h-[15px] hover:border-[#F78125] border-gray-700 rounded-[100%] bg-[#FF2A6A]"></button>
                <button className="w-[15px] h-[15px] hover:border-[#F78125] border-gray-700 rounded-[100%] bg-[#003DFF]"></button>
                <button className="w-[15px] h-[15px] hover:border-[#F78125] border-gray-700 rounded-[100%] bg-[#06AF87]"></button>

                {/* text */}
                <p className="text-gray-600 text-[10px]"> +5 MORE </p>
              </div>

              <div className="flex">
                <p className="font-bold text-[13px]">$89.95</p>
                <p className="pl-3 font-bold text-gray-600 line-through italic">
                  $139.00
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
        </div>

        <div className="flex gap-6">

           {/* Next From Here */}
        <div className="card-trending flex relative flex-col w-[180px] h-[276] text-[12px]">
          

          <div className="card-image">
            <Image
              src="/Image VII.png"
              width={180.24}
              height={195}
              alt="trending-product"
            />
          </div>

          <div className="card-details">
            <span className="text-gray-600 text-[10px] mt-1">UrbanVault / Classic Series</span>
            <h3 className="font-bold">UrbanVault Street Flex Sneakers</h3>

            <div className="flex">
              <p className="font-bold">$ 74.95</p>
              <p className="pl-3 font-bold text-gray-600 line-through italic">
                $ 121.00
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

        

        {/* Next From Here */}
        <div className="card-trending flex relative flex-col w-[180px] h-[276] text-[12px]">
          

          <div className="card-image">
            <Image
              src="/Image VIII.png"
              width={180.24}
              height={195}
              alt="trending-product"
            />
          </div>

          <div className="card-details">
            <span className="text-[#666] text-[10px] mt-1">StrideMode / Originals</span>
            <h3 className="font-bold">StrideMode Retro Court Sneakers</h3>

            <div className="flex">
              <p className="font-bold">$ 74.95</p>
              <p className="pl-3 font-bold text-gray-600 line-through italic">
                $ 121.00
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

          
        </div>

       
        {/* Final */}
        <div className="huge relative">
          <div className="flex flex-col">
            <div className="discount-marker absolute z-10 top-33 ml-2 text-[10px] bg-[#89D9D3] text-white p-0.5 px-1 rounded ">
              ECO
            </div>

            <div className="discount-marker absolute z-10 top-38 ml-2 text-[10px] bg-[#F78125] text-white p-0.5 px-1 rounded ">
              42% OFF
            </div>
          </div>

          <div className="eco-image">
            <Image
              src="/Image IX.png"
              alt="eco-shoes"
              width={400.53}
              height={195}
            />
          </div>
          <div className="eco-content">
            <div className="card-details">
              <span className="text-[#666] text-[10px] mt-1">
                EarthRoot / ECO
              </span>
              <h3 className="font-bold text-[13px]">EarthRoot BioWalk Runners</h3>

              <div className="colors items-center flex gap-2">
                <button className="w-[15px] hover:border-[#F78125] h-[15px] border-gray-700 rounded-[100%] bg-[#FFA724]"></button>
                <button className="w-[15px] h-[15px] hover:border-[#F78125] border-gray-700 rounded-[100%] bg-[#952AFF]"></button>
                <button className="w-[15px] h-[15px] hover:border-[#F78125] border-gray-700 rounded-[100%] bg-[#FF2A6A]"></button>
                <button className="w-[15px] h-[15px] hover:border-[#F78125] hover:border border-gray-700 rounded-[100%] bg-[#003DFF]"></button>
                <button className="w-[15px] h-[15px] hover:border-[#F78125] border-gray-700 rounded-[100%] bg-[#06AF87]"></button>

                {/* text */}
                <p className="text-gray-600 text-[10px]"> +5 MORE </p>
              </div>

              <div className="flex">
                <p className="font-bold text-[13px]">$ 94.50</p>
                <p className="pl-3 font-bold text-gray-600 line-through italic">
                 $ 149.00
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
        </div>

        {/* End */}
      </div>
    </div>
  );
}
