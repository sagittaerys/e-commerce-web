"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email }); //Backend route.....

    if (!email) {
      setError("A valid email address is required!");
      return;
    }

    setError("");
    console.log("Email Received!");
    return;
  };

  return (
    <div className="container ">
      <div className="pt-[50px] footer-container border-b-[#91929D] justify-between px-10 pb-[50px] flex bg-[#F4F4F5]">

        <div className="w-[30%] footer-division ">
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
          </Link>

          <p className="max-w-[70%] footer-text my-3">
            Your premier destination for exceptional shopping experiences.
            Discover quality products, unbeatable deals, and outstanding service
            all in one place.
          </p>

          <div className="handles flex gap-4 py-3">
            <a
              href="https://www.facebook.com/share/14uetCxywU/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="border rounded border-[#23263B] bg-[#91929D] ">
                <FaFacebookF className="text-[#23263B] text-[36px] p-1 " />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/olamilekan-aremu-a15651236?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="border rounded border-[#23263B] bg-[#91929D] ">
                <FaLinkedinIn className="text-[#23263B] text-[36px] p-1 " />
              </div>
            </a>
            <a
              href="https://github.com/Sagittaerys"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="border rounded border-[#23263B] bg-[#91929D] ">
                <FaGithub className="text-[#23263B] text-[36px] p-1 " />
              </div>
            </a>

            <a
              href="https://www.instagram.com/sagittaerys_?igsh=MTkxbm5xd3NrZGVobA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="border rounded border-[#23263B] bg-[#91929D] ">
                <FaInstagram className="text-[#23263B] text-[36px] p-1 " />
              </div>
            </a>
          </div>
        </div>

        <div className="flex footer-list justify-evenly w-[40%]">

        <ul className="w-[20%] py-2">
          <span className="unique-text text-[18px]">Shop</span>
          <Link href="/">
            <li className="text-[14px] pt-1 my-3 ">New</li>
          </Link>
          <Link href="/fashion">
            <li className="text-[14px] my-3">Fashion</li>
          </Link>
          <Link href="/electronics">
            <li className="text-[14px] my-3">Electronics</li>
          </Link>
          <Link href="/food">
            <li className="text-[14px] my-3">Food</li>
          </Link>
          <Link href="/find-store">
            <li className="mini-list text-[14px] my-3">All Stores</li>
          </Link>
        </ul>

        <ul className="w-[20%] py-2">
          <span className="unique-text text-[18px]">Support</span>
          <Link href="/login">
            <li className="text-[14px] pt-1 my-3 ">Log In</li>
          </Link>
          <Link href="/account">
            <li className="text-[14px] my-3">Sign Up</li>
          </Link>

          <a
            href="https://wa.me/+2349034105378"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="text-[14px] my-3">Live Chat</li>
          </a>

          <a
            href="https://mailto:aremu0235@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="text-[14px] my-3">Email</li>
          </a>

          <Link href="/support">
            <li className="mini-list text-[14px] my-3">Support</li>
          </Link>
        </ul>
        </div>

        <div className="w-[30%] footer-newsletter h-[12rem] bg-[#91929D] p-3 rounded-xl">
          <span className="unique-text text-[#23263B] text-[18px]">
            Stay Updated
          </span>

          <p className="text-[#23263B] text-[14px] max-w-[80%]">
            Get exclusive deals and new product alerts delivered to your inbox.
          </p>

          <div>
            {/* Lovely Error Siren! */}
            {error && (
              <p className="text-white rounded-md text-sm text-center bg-[#23263B] px-2 py-1">
                {error}
              </p>
            )}
            <form onSubmit={handleSubmit} className="my-4 flex gap-0">
              <input
                className="bg-white rounded-tl-xl rounded-bl-xl px-3 py-2 pl-2 text-[#91929D]"
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <button
                className="bg-[#23263B] rounded-tr-xl rounded-br-xl py-2 px-3 border border-[#23263B] text-white"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <hr className="border-gray-600" />

      <div className="payment px-10 py-6 flex items-center justify-between ">
        <p className="text-[#23263B] font-bold">
          © 2025 Sagittaerean Mall. All rights reserved.
        </p>

        <div className="flex gap-2 items-center">
          
          <Image src="/pay1.png" alt="pay1" width={13.41} height={15} />

          <Image src="/pay2.png" alt="pay1" width={26.05} height={15} />

          <Image src="/pay3.png" alt="pay1" width={40.58} height={15} />

          <Image src="/pay4.png" alt="pay1" width={38.33} height={15} />
        </div>
      </div>

      <div className="bg-[#23263B] flex items-center justify-center h-[106.8px] pb-[38px] pt-[38px] ">
        <Image src="/Symbol.png" alt="symbol" width={33} height={30.8} />
      </div>
    </div>
  );
}
