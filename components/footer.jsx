import Image from "next/image"

export default function Footer(){
  return(
    <div className="container">
        <div className="pt-[96px] justify-between px-10 pb-[96px] flex bg-[#F4F4F5]">

                <ul className="w-[110px] h-[95px]">
                  <span className="text-[14px]">FOOTER</span>
                  <li className="text-[12px]">Item</li>
                  <li className="text-[12px]">Item</li>
                  <li className="text-[12px]">Item</li>
                </ul>

                <ul className="w-[110px] h-[95px]">
                  <span className="text-[14px]">FOOTER</span>
                  <li className="text-[12px]">Item</li>
                  <li className="text-[12px]">Item</li>
                  <li className="text-[12px]">Item</li>
                </ul>

                <ul className="w-[110px] h-[95px]">
                  <span className="text-[14px]">FOOTER</span>
                  <li className="text-[12px]">Item</li>
                  <li className="text-[12px]">Item</li>
                  <li className="text-[12px]">Item</li>
                </ul>

                <ul className="w-[110px] h-[95px]">
                  <span className="text-[14px]">FOOTER</span>
                  <li className="text-[12px]">Item</li>
                  <li className="text-[12px]">Item</li>
                  <li className="text-[12px]">Item</li>
                </ul>

                <ul className="w-[110px] h-[95px]">
                  <span className="text-[14px]">FOOTER</span>
                  <li className="text-[12px]">Item</li>
                  <li className="text-[12px]">Item</li>
                  <li className="text-[12px]">Item</li>
                </ul>

                <ul className="w-[110px] h-[95px]">
                  <span className="text-[14px]">FOOTER</span>
                  <li className="text-[12px]">Item</li>
                  <li className="text-[12px]">Item</li>
                  <li className="text-[12px]">Item</li>
                </ul>
        </div>
        <div className="bg-[#23263B] flex items-center justify-center h-[106.8px] pb-[38px] pt-[38px] ">
              <Image src= "/Symbol.png" alt="symbol" width={33} height={30.8}  />
        </div>
    </div>
  )
}