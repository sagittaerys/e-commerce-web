"use client";

import { useFavorites } from "./FavoritesContext";
import Image from "next/image";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useCart } from "./Cart/cartContext";
import { MdAddLocationAlt } from "react-icons/md";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { IoMicOutline } from "react-icons/io5";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import Link from "next/link";

export default function Header() {
  // const [isOpen, setIsOpen] = useState(false);

  //to make the color change
  //   const onclickStyle = (e) => {
  //   e.target.style.color = "red";
  // };

  const [isFavorite, setIsFavorite] = useState(false);

  const toggleHeart = () => {
    setIsFavorite(!isFavorite);
  };


  //calling out the favorites from the useFavorites.
  const {favorites} = useFavorites();
  // calling out the cart ffrom useCart

  const {cart} = useCart();

  return (
    <header>
      <div className="xs-default text-center text-white py-1.5">
        <span>20% Off Code: SAGITTAERYS29 - Terms Apply</span>
      </div>

      <div className="container h-[147.22px]" id="small-height">
        <div className="main-header flex justify-between px-10 py-4">
          <Link href="/">
            <div className="flex gap-2 items-center">
              <Image
                src="/sage-centaur.png"
                className="logo"
                alt="logo"
                width={40.47}
                height={35.22}
              />
              <h1 className="logo-text">Sagittaerean Mall</h1>
            </div>
            {/* Image Covered */}
          </Link>

          {/* {isOpen && (
          <div className="sm:hidden bg-white px-6 py-4 shadow-md">
            <ul className="space-y-4 text-gray-800 text-base">
              <li><Link href="/support">Support</Link></li>
              <li><Link href="/store">Store</Link></li>
              <li><Link href="/favorites">Favorites</Link></li>
              <li><Link href="/account">Account</Link></li>
              <li><Link href="/shop">Cart</Link></li>
              <li><Link href="/women">Women</Link></li>
              <li><Link href="/men">Men</Link></li>
              <li><Link href="/kids">Kids</Link></li>
            </ul>
          </div>
        )} */}

          <div className="small-style flex items-center gap-10 w-[50%] justify-between">
            <ul className="head-icons flex mx-5 gap-5 pl-10">
              <Link className="icon-bl flex items-center gap-1" href="/support">
                <MdOutlineHeadsetMic className="w-[16px] h-[19px]text-gray-600" />
                <p className="icon-text">Support</p>
              </Link>

              <Link
                className="flex unique-sm items-center gap-1"
                href="/find-store"
              >
                <MdAddLocationAlt className="w-[16px] h-[19px] text-gray-600" />
                <p className="icon-text">Find a store</p>
                <p className="small-screen">STORE</p>
              </Link>
            </ul>

            {/* className="w-[16px] h-[19px]" */}

            <ul className="flex gap-4">
              <Link onClick={toggleHeart} href="/favorites" className="icon-bl relative">
                {isFavorite ? (
                  <FaHeart className="text-red-500 w-[16px] h-[19px]" />
                ) : (
                  <FaRegHeart className="w-[16px] h-[19px]  hover:text-red-500" />
                )}

                {/* Number Length */}
                {favorites.length > 0 && (
                  <span className="absolute bottom-2.5 ml-2.5 bg-[#23263b] text-white text-[9px] px-1.5 py-0.5 rounded-full">
                    {favorites.length}
                  </span>
                )}
              </Link>

              <Link href="/account" className="unique-sm">
                <IoPersonOutline className="w-[16px] h-[19px]" />

                <p className="small-screen">ACCOUNT</p>
              </Link>


              <Link href="/cart" className="unique-sm">
                
               <div className="relative">
                  <MdOutlineShoppingBag className="w-[16px] h-[19px]" />

                {/* Number Length */}
                {cart.length > 0 && (
                  <span className="absolute bottom-2.5 ml-2 bg-[#23263b] text-white text-[9px] px-1.5 py-0.5 rounded-full">
                    {cart.length}
                  </span>
                )}
                <p className="small-screen">CART</p>
                </div>   
              </Link>
            </ul>
          </div>
        </div>
        {/* Categories -- Blocked out thia for small screens. This code is becoming a maze.... */}

        <div className="section  text-[14px] px-10">
          <ul className="flex gap-4">
            <Link className="font-bold" href="/fashion">
              FASHION
            </Link>

            <Link href="/electronics">ELECTRONICS</Link>

            <Link href="/food">FOOD</Link>
          </ul>
          <hr className="line border-gray-600" />
        </div>

        <div></div>
        {/* Best Position */}
        {/* <div className="flex p-3 h-[48px]">
            <div
                className="flex item-center h-[48px] w-[65px] flex-row gap-3 cursor-pointer sm:hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
                <GiHamburgerMenu className="" /> 
                <span className="text-[10px]">MENU</span>
              </div>

              {/* Small Screen Input */}
        {/* <div className="input-field flex items-center border border-gray-400  px-3 py-1 w-full max-w-sm bg-white"> */}
        {/* Search Icon */}
        {/* <IoIosSearch className="text-gray-500 text-xl mr-2" /> */}

        {/* Input Field */}
        {/* <input
              type="text"
              placeholder="Search products, articles, faq, ..."
              className="flex-1 outline-none text-sm text-gray-800 placeholder-gray-500"
            /> */}

        {/* Right Icons */}
        {/* <div className="flex items-center gap-3 border-l pl-3 ml-3">
              <IoMicOutline className="text-lg text-gray-600 cursor-pointer" />

              <MdOutlineQrCodeScanner className="text-lg text-gray-600 cursor-pointer" /> */}
        {/* </div>
          </div> */}
        {/* </div>  */}

        {/* Input */}
        <div className="third">
          <div className="search pt-2 flex px-10  justify-between items-center w-full">
            <ul className="flex gap-4 font-base">
              <Link href="/sale">SALE</Link>

              <Link href="#new-arrivals">NEW IN</Link>

              <Link href="/fashion">CLOTHING</Link>
              <Link href="/">SHOES</Link>
              <Link href="/all-products">ALL PRODUCTS</Link>
              <Link href="/brands">BRANDS</Link>
            </ul>

            {/* Recalibration needed */}
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
          </div>
          {/* End of input field  omor.....*/}
        </div>
      </div>
    </header>
  );
}
