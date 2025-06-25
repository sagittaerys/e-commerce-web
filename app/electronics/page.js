import BestSellerList from "@/components/Electronics/BestSellerList";
import Link from "next/link";

export default function Electronics() {
  return (
    <div className="container px-10">
      {/* bg-[#F4F4F5] */}

      <div className="flex w-[100%] justify-between my-7 gap-3">
        <div className="w-[20%] shadow-xl rounded-xl  h-[447px] px-10 py-10">
          <h2 className="font-bold text-[16px] text-[#23263B] unique-text">
            SALE 40% OFF
          </h2>

          <ul className=" text-[#23263B] py-2">
            <li className="py-1">Laptops</li>
            <li className="py-1">PC & Computers</li>
            <li className="py-1">Cell Phones</li>
            <li className="py-1">Tablets</li>
            <li className="py-1">Gaming & VR</li>
            <li className="py-1">Networking</li>
            <li className="py-1">Camera</li>
            <li className="py-1">Sounds</li>
            <li className="py-1">Office</li>
            <li className="py-1">Accessories</li>
          </ul>
        </div>
        <div className="w-[650px] gap-2 justify-between flex flex-col  rounded-xl shadow-xl h-[447px]">
          <div className="big-image w-[650px] h-[310px] bg-[url('/slider3.png')] bg-cover p-8  bg-center rounded-xl flex flex-col gap-8">
            <div className="text-white leading-tight">
              <h2 className="font-bold text-[30px]">Noise Cancelling</h2>
              <p className="font-extralight text-[30px]">Headphones</p>
            </div>

            <div className="text-white leading-tight text-[14px]">
              <p>Bass Over-Ear Headphones</p>
              <p>Wi-Fi, Voice Assistant</p>
              <p>Low Latency Game Mode</p>
            </div>

            <button className="rounded-xl bg-[white] text-[black] py-2 px-3 max-w-[89.13px]">
              Buy Now
            </button>
          </div>

          <div className="flex gap-5">
            <div className="w-[316.98px] h-[120px] bg-[url('/slider4.png')] bg-cover bg-center rounded-xl">
              <div className=" p-4 text-[#23263B] font-medium max-w-[165.16px]">
                <div>
                  <h2 className="text-[15px]">
                    Sony Playstation 5 from{" "}
                    <span className="unique-text">$569 </span>
                  </h2>
                </div>

                <Link href="">
                  <p className="mt-5 underline">Discover Now</p>
                </Link>
              </div>
            </div>
            <div className="w-[316.98px] h-[120px] bg-[url('/slider5.png')] bg-cover bg-center rounded-xl">
              <div className=" p-4 text-[white] font-medium max-w-[165.16px]">
                <div>
                  <h2 className="text-[15px]">
                    Logitek Bluetooth{" "}
                    <span className="text-[#FFC107]">Keyboard</span>
                  </h2>
                </div>

                <p className="mt-5 text-[14px]">Best for all devices</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[308.98px] flex flex-col justify-between shadow-xl rounded-xl h-[447px]">
          <div className="bg-[url('/slider6.png')]  bg-cover bg-left rounded-xl w-[308.98] h-[215px]">
            <div className="py-4 flex flex-col items-end">
              <div className="max-w-[118.81px]">
                <span className="text-[12px] mt-3  font-bold">XOMIA</span>
                <p className="text-[16px] mt-3 text-[#23263b] font-bold ">
                  Sport Water Resistant Watch
                </p>

                <div className="mt-3">
                  <button className="py-2 px-3 bg-[#23263b] text-white  text-[12px] rounded-xl">
                    SHOP NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[url('/slider7.png')]  bg-cover bg-right rounded-xl w-[308.98] h-[215px]">
            <div className="p-5">
              <div className="w-[110.36px] h-[82.8px] text-[20px] text-white">
                <p>
                  {" "}
                  <span className="font-bold">OKODO</span> Hero 11+ Black
                </p>
              </div>

              <div className="mt-6">
                <span className="text-[#91929D] text-[10px]">FROM</span>
                <p className="unique-text text-[#FFC107] text-[24px]">$169</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Best Sellers */}
      <div id="best-sellers" className="best-sellers">

      <p className="section-header  pt-15  pb-3 text-[32px] font-semibold tracking-wide">
            BEST SELLERS
      </p>
        <div className= "flex my-5 gap-6 px-10 mx-auto hide-scrollbar">
          <BestSellerList />

        </div>

      </div>

     
    </div>
  );
}
