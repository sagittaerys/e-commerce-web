"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import BestSellers from "@/components/Electronics/BestSellers";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import { GiCheckMark } from "react-icons/gi";

export default function ProductPage() {
  const params = useParams();
  const id = params.id;
  const bestSeller = BestSellers.find((p) => p.id === id);

  const percentageValue = () => {
    return bestSeller.actualPrice * 0.25;
  };

  if (!bestSeller) {
    return <p className="p-10">Product not found.</p>;
  }

  return (
    <div className="container p-10">
      <Link href="/electronics/#best-sellers">
        <button className="rounded-xl  items-center flex gap-2 p-2  bg-white border  bg-[#E8600A] border-[#23263B]">
          <FaArrowLeft className="text-[25px] text-[#E8600A]" />

          <p className="text-[15px] font-bold text-[#23263B]">
            Back To Products
          </p>
        </button>
      </Link>

      {/* Display */}

      <div className="flex justify-evenly border mt-5 p-3 border-black w-full h-[800px]">
        <div className="image  gap-4 w-[45%] h-[80%] border-black border">
          <div className=" border-black border h-[70%]">
            <Image
              className="border-black border mt-9 rounded-xl mx-auto"
              src={bestSeller.image}
              alt={bestSeller.name}
              width={350}
              height={500}
            />
          </div>

          <div className="smaller justify-center w-full gap-3 px-3 flex border-black border h-[30%]">
            <div>
              <Image
                className="border-black border rounded-xl mt-10 mx-auto"
                src={bestSeller.image}
                alt={bestSeller.name}
                width={100}
                height={130}
              />
            </div>

            <div>
              <Image
                className="border-black border rounded-xl mt-10 mx-auto"
                src={bestSeller.image}
                alt={bestSeller.name}
                width={100}
                height={130}
              />
            </div>

            <div>
              <Image
                className="border-black border mt-10 rounded-xl mx-auto"
                src={bestSeller.image}
                alt={bestSeller.name}
                width={100}
                height={130}
              />
            </div>

            <div>
              <Image
                className="border-black border mt-10 rounded-xl mx-auto"
                src={bestSeller.image}
                alt={bestSeller.name}
                width={100}
                height={130}
              />
            </div>
          </div>
        </div>

        <div className="description py-5 w-[45%] p-3 border-black border">
          <div className="max-w-[80%]">
            <h1 className="text-3xl text-[#23263B] font-bold">
              {bestSeller.name}
            </h1>
          </div>

          <div className="my-2">
            <span className="text-gray-600 text-[16px] text-[#666] font-semibold">
              {bestSeller.brand}
            </span>
          </div>

          <div className="my-7 items-end max-w-[86%]  flex gap-4">
            <p className="text-[35px] font-bold text-[#F78125] unique-text">
              $ {bestSeller.discountedPrice}
            </p>

            <div className="flex gap-5 items-center">
              <p className=" unique-text text-xl font-bold text-gray-600 line-through">
                $ {bestSeller.actualPrice}
              </p>

              <button className="p-1 bg-[#dcfce7] text-[14px] text-[#86efac]  border border-[#86efac]  rounded-md">
                Save ${percentageValue()}
              </button>
            </div>
          </div>

          {/* Continue */}

          <div className="my-8 text-[#666]">
            <p>{bestSeller.productDescription}</p>
          </div>

          {/* Key Features */}

          <div className="my-7 p-3 text-[#666] border border-black">
            <h1 className="text-2xl font-bold my-3">Key Features</h1>

            <ul className="text-[12px] px-1">
              <li className="flex gap-2 items-center my-1">
                <GiCheckMark className="text-[#E8600A]" />{" "}
                {bestSeller.keyFeatures[0]}
              </li>
              <li className="flex gap-2 items-center my-1">
                <GiCheckMark className="text-[#E8600A]" />
                {bestSeller.keyFeatures[1]}
              </li>
              <li className="flex gap-2 items-center my-1">
                <GiCheckMark className="text-[#E8600A]" />
                {bestSeller.keyFeatures[2]}
              </li>
              <li className="flex gap-2 items-center my-1">
                <GiCheckMark className="text-[#E8600A]" />
                {bestSeller.keyFeatures[3]}
              </li>
              <li className="flex gap-2 items-center my-1">
                <GiCheckMark className="text-[#E8600A]" />
                {bestSeller.keyFeatures[4]}
              </li>
              <li className="flex gap-2 items-center my-1">
                <GiCheckMark className="text-[#E8600A]" />
                {bestSeller.keyFeatures[5]}
              </li>
            </ul>

            <div className="btns mt-3  ">
              <h2 className="my-1 font-bold">Color</h2>

              <div className="flex gap-3">
                <button className="w-[24px] hover:border-2 hover:border-[#E8600A] h-[24px] rounded-full bg-[black] border border-black"></button>

                <button className="w-[24px] h-[24px] rounded-full bg-[white] border border-black hover:border-2 hover:border-[#E8600A]"></button>
                <button className="w-[24px] h-[24px] rounded-full bg-[brown] border border-black hover:border-2 hover:border-[#E8600A]"></button>
                <button className="w-[24px] h-[24px] rounded-full bg-[gray] border border-black hover:border-2 hover:border-[#E8600A]"></button>
              </div>
            </div>

            <div className="quantity mt-3">
                <h2 className="my-1 font-bold">Quantity</h2>

                  
                  
            </div>

          </div>
        </div>
      </div>

      {/* 
      <img src={bestSeller.image} alt={bestSeller.name} className="w-64 h-64 my-4 rounded" />

      <p className="text-lg font-medium">${bestSeller.price}</p>
      <p className="mt-4 text-gray-600">{bestSeller.description}</p> 
      
      <div className="size-btn flex">
                        <button className="border-2 border-[#666] bg-[transparent] text-[#666] rounded-md w-[80px] h-[35px] hover:bg-[#E8600A] hover:border-[#E8600A] hover:text-white ">Small</button>

                        <button className="border-2 border-[#666] bg-[transparent] text-[#666] rounded-md w-[80px] h-[35px] hover:bg-[#E8600A] hover:border-[#E8600A] hover:text-white ">Medium</button>

                        <button className="border-2 border-[#666] bg-[transparent] text-[#666] rounded-md w-[80px] h-[35px] hover:bg-[#E8600A] hover:border-[#E8600A] hover:text-white ">Small</button>

                  </div>

      */}
    </div>
  );
}
