"use client";

import Image from "next/image";
import SupportList from "@/components/Support/SupportList";
import { useState } from "react";

export default function SupportPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [issueCategory, setIssueCategory] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, name, issueCategory, message }); // battle for another day (backend)

    //Input Validation Genesis
    if (!email) {
      setError("Email is required for feedback!");
      return;
    }
    if (!name) {
      setError("Name is required!");
      return;
    }
    if (!message) {
      setError("Message should be more than 30 words!");
      return;
    }
    if (!issueCategory) {
      setError("Select an issue category!");
      return;
    }

    setError("");
    console.log("Olamilekan Is The One True Imperial Sage!");
  };

  return (
    <div className="container support-container py-10 px-10">
      <div className="support-text text-center py-15 mx-auto w-1/2">
        <h1 className="support-header font-bold text-[#23263B] text-[3rem]">Support Center</h1>
        <p className="text-[16px] text-[#23263B]">
          {"We're here to help you with all your shopping needs. Get instant assistance or browse our comprehensive help resources."}
        </p>
      </div>

      {/* Main Contents */}
      <div>
        <SupportList />
      </div>

      <div className="support-message w-[97%] px-10 rounded-xl mt-20 shadow-2xl py-10 mx-auto">
        <h1 className="support-input font-bold text-center text-[#23263B] text-[2rem]">
          Send Us A Message
        </h1>

        {/* Input Field */}
        <form
          onSubmit={handleSubmit}
          className="flex py-2 w-full mx-auto  flex-col"
        >
          {error && (
            <p className="text-red-500 text-center bg-[pink] px-2 py-3">
              {error}
            </p>
          )}

          <div className="flex py-2 flex-col">
            <label htmlFor="text">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              placeholder="Enter your full name"
              className=" h-[43px] pl-3 border border-[#91929D] rounded"
            />
          </div>

          <div className="flex py-2 flex-col">
            <label htmlFor="password">Email Address</label>
            <input
              type="email"
              value={email}
              placeholder="sagittaerys@sagenet.com"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              className="h-[43px] pl-3 border border-[#91929D] rounded"
            />
          </div>

          <div className="flex py-2 flex-col">
            <label htmlFor="password">Issue Category</label>
            <select
              onChange={(e) => setIssueCategory(e.target.value)}
              className="py-2.5 pl-3 border border-[#91929D] rounded focus:outline-none focus:ring-2 focus:ring-[#23263B] focus:border-[#23263B]"
            >
              <option value={issueCategory}>Select a category.....</option>
              <option>Account Issues</option>
              <option>Payment Problems</option>
              <option>Shipping Information</option>
              <option>Product Questions</option>
              <option>Warranty Claims</option>
              <option>Technical Support</option>
            </select>
          </div>

          <div className="flex py-2 flex-col">
            <label htmlFor="text">Message</label>
            <input
              type="text"
              value={message}
              placeholder="Describe your issue or question in detail........"
              onChange={(e) => setMessage(e.target.value)}
              name="message"
              className=" h-[60px] pl-3 border border-[#91929D] rounded"
            />
          </div>

          <button
            className="bg-[#23263B] rounded-xl mt-[1rem] cursor-pointer border-none text-white w-full h-[51px]"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>

        <div className="siren bg-[#dcfce7] py-3 w-[97%] mx-auto rounded mt-[5rem] border border-[#86efac]">
            <p className="text-center text-[#91929D]">Support team is online and ready to help</p>
        </div>
    </div>
  );
}
