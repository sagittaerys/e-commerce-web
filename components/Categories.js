import Image from "next/image";
import Link from "next/link";
import { IoFastFoodOutline } from "react-icons/io5";

export default function Categories() {
  return (
    <div className="container px-10 mt-6 styx">

      <p className="unique-text text-[17px] font-bold mt-5 ml-3 ">
        SHOP BY CATEGORY
      </p>

      <div className="flex gap-4 my-3 kids">

        <Link className="hover:border-2 rounded-md hover:border-[#23263b]" href="/electronics">
          <div className="electronics">
          <div className="image">
               <div>
                <Image src= "/prod9.png" width={110} height={130} alt="electronics" />
              </div>
              <div className="text-center  text">
                <h3 className="font-bold text-[#23263b] my-2 pt-2">Electronics</h3>
              </div>
          </div>


          </div>
        </Link>

        <Link className="hover:border-2 rounded-md hover:border-[#23263b]" href= "/fashion">
          <div className="fashion">
             <div>
              <Image src= "/Image III.png" width={110} height={136} alt="fashion" />
              
          </div>
             <div className="text-center text">
                <h3 className="font-bold text-[#23263b] my-2 pt-2 ">Fashion</h3>
              </div>
          </div>
        </Link>

        <Link className="hover:border-2 rounded-md hover:border-[#23263b]" href= "/food">
          <div className="food">
          <div>
              <Image src= "/Food III.png" width={110} height={130} alt="food" />
          </div>
             <div className="text-center text">
                <h3 className="font-bold text-[#23263b] my-2 pt-2">Food</h3>
              </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
