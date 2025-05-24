import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

export default function AboutYou() {
  return (
    <div className="container relative h-[468px] bg-[white]">
            <div className="layout">
                  <div className="bg-[#706C63] absolute px-10 py-10 text-white h-[370px] w-[981px]">                    
                        <h3 className="text-4xl pb-2 pt-3 font-semibold tracking-wider">It’s all about you</h3>

                        <p className="text-[20px] leading-relaxed max-w-[420px]">
                          Try now, pay later. We want that you’re really confident and happy
                          with your purchase – you have 30 days before we charge you! Learn
                          more about our policy.
                        </p>

                        <button className="w-12 h-12 border border-white flex items-center justify-center hover:bg-white hover:text-[#777065] transition">
                        <span className="text-2xl"> <FaArrowRight /> </span>
                        </button>
                  </div>
                  
                  <div className="image ml-[525px] mt-[40px]  bottom-[14%]  absolute z-10">
                          <Image
                          src="/Frame 124.png"
                          alt="overlay"
                          width={867}
                          height={370}
                          
                        />
                  </div>
            </div>

    </div>
  );
}

{/* <div className="flex flex-col md:flex-row 
">
  <div className="md:w-1/2 bg-[#777065] w-[80%] text-white flex flex-col justify-center px-10 py-16 space-y-6">
    <h2 className="text-4xl font-bold tracking-wider">It’s all about you</h2>
    <p className="text-lg leading-relaxed max-w-[300px]">
      Try now, pay later. We want that you’re really confident and happy
      with your purchase – you have 30 days before we charge you! Learn
      more about our policy.
    </p>
    <button className="w-12 h-12 border border-white flex items-center justify-center hover:bg-white hover:text-[#777065] transition">
      <span className="text-2xl">→</span>
    </button>
  </div>

  <div className="md:w-1/2 -ml-30">
    <Image
      src="/Frame 124.png"
      alt="overlay"
      width={867}
      height={420}
      
    />
  </div>
</div> */}