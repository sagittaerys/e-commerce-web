"use client";

import Link from "next/link";
import { useState, useEffect } from "react"
import { MdOutlineHome } from "react-icons/md";
import { MdAddLocationAlt } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export default function StoreCard({
  header,
  description,
  floor,
  time,
  phone,
  visitBtn,
  directionsBtn,
  openHour,
  closeHour,
  closeMinute,
  directionLink,
  visitLink
}) {
  const [isOpen, setIsOpen] = useState(false);

  const getCurrentMinutes = () => {
  const now = new Date();
  return now.getHours() * 60 + now.getMinutes();
};

const getMinutes = (hour, minute = 0) => hour * 60 + minute;

 useEffect(() => {
  const currentMinutes = getCurrentMinutes();
  const openMinutes = getMinutes(openHour);
  const closeMinutes = getMinutes(closeHour, closeMinute);

  const isStoreOpen = currentMinutes >= openMinutes && currentMinutes < closeMinutes;
  setIsOpen(isStoreOpen);
}, [openHour, closeHour, closeMinute]);


  return (
    <div className="w-[24rem] rounded-xl shadow-xl p-4">
      {/* Top */}
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-[18px]">{header}</h2>

        {/* "rounded-3xl px-3 py-1 text-[#86efac] bg-[#dcfce7] border border-[#86efac] " */}
        <button className= {`px-4 py-2 rounded-3xl font-medium ${
          isOpen ? "bg-[#dcfce7] text-[#86efac] border border-[#86efac] "  : "bg-red-300 text-red-500 border border-red-500"
        }`}>
            {isOpen ? "Open" : "Closed"}
        </button>
      </div>

      {/* Description */}
      <p className="pt-1 text-[14px]">{description}</p>

      <div className="list py-4">
        <div className="flex items-center gap-2">
          {" "}
          <MdOutlineHome className="text-[#23263B]" /> <p> {floor} </p>
        </div>
        <div className="flex items-center gap-2">
          {" "}
          <MdAddLocationAlt className="text-[#23263B]" /> <p> {time} </p>{" "}
        </div>
        <div className="flex items-center gap-2">
          {" "}
          <FaPhoneAlt className="text-[#23263B]" /> <p> {phone} </p>{" "}
        </div>
      </div>

      
      <div className="btn-div text-[12px] flex gap-4">
          <Link href= {visitLink}>

            <button className="rounded-3xl bg-[#23263B] text-white p-2">
              {visitBtn}
            </button>
          
          </Link>

          <a href= {directionLink}
          target="_blank"
          rel="noopener noreferrer">

            <button className="rounded-3xl bg-transparent  hover:bg-[#23263B] hover:text-[white] border border-[#23263B] text-[#23263B] p-2">
              {directionsBtn}
            </button>
      
          </a>
      </div>
    </div>
  );
}
