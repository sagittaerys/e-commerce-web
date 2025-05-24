import Image from "next/image";
import { BiSupport } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { IoMicOutline } from "react-icons/io5";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="xs-default text-center text-white py-1.5">
        <span>20% Off Code: SPRING21 - Terms Apply</span>
      </div>

      <div className="container h-[147.22px]">
        <div className="main-header flex justify-between px-10 py-5">
          <Image src="/logo.png" alt="logo" width={185.47} height={34.22} />
          {/* Image Covered */}

          <ul className="flex mx-5 gap-5 pl-60">
            <Link className="flex items-center gap-1" href="/support">
              <BiSupport className="w-[24px] h-[24px] text-gray-600" />{" "}
              <p className="icon-text">Support</p>
            </Link>

            <Link className="flex items-center gap-1" href="/store">
              <IoLocationSharp className="w-[24px] h-[24px] text-gray-600" />
              <p className="icon-text">Find a store</p>
            </Link>
          </ul>

          <ul className="flex gap-4">
            <Link href="/favorites">
              <FaRegHeart className="w-[24px] h-[24px]" />
            </Link>

            <Link href="/account">
              <IoPersonOutline className="w-[24px] h-[24px]" />
            </Link>

            <Link href="/shop">
              <MdOutlineShoppingBag className="w-[24px] h-[24px]" />
            </Link>
          </ul>
        </div>
        {/* Categories */}
        <div className="section text-[14px] px-10">
          <ul className="flex gap-4">
            <Link className="font-bold" href="/women">
              WOMEN
            </Link>

            <Link href="/men">MEN</Link>

            <Link href="/kids">KIDS</Link>
          </ul>
          <hr className="line border-gray-600" />
        </div>

        {/* Input */}
        <div className="search flex justify-between px-10 pt-2 items-center mb-2">
          <ul className="flex gap-4 font-base">
            <Link href="/sale">SALE</Link>

            <Link href="/new">NEW IN</Link>

            <Link href="/clothing">CLOTHING</Link>
            <Link href="/shoes">SHOES</Link>
            <Link href="/accessories">ACCESSORIES</Link>
            <Link href="/brands">BRANDS</Link>
          </ul>

          <div className="input-field flex items-center border border-gray-400  px-3 py-1 w-full max-w-sm bg-white">
            {/* Search Icon */}
            <IoIosSearch className="text-gray-500 text-xl mr-2" />

            {/* Input Field */}
            <input
              type="text"
              placeholder="Search products, articles, faq, ..."
              className="flex-1 outline-none text-sm text-gray-800 placeholder-gray-500"
            />

            {/* Right Icons */}
            <div className="flex items-center gap-3 border-l pl-3 ml-3">
              <IoMicOutline className="text-lg text-gray-600 cursor-pointer" />

              <MdOutlineQrCodeScanner className="text-lg text-gray-600 cursor-pointer" />
            </div>
          </div>
          {/* End of input field  omor.....*/}
        </div>
      </div>
    </header>
  );
}
