"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { API_BASE_URL } from "@/lib/api";
import { toast } from "react-toastify";

export default function UserAccount() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter(); // variable declared

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/dashboard");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ name, email, password, confirmPassword }); // battle for another day (backend)

    //Input Validation Genesis
    if (!name) {
      setError("Name is required!");
      return;
    }
    if (!email) {
      setError("Email is required!");
      return;
    }
    if (!password) {
      setError("Password is required!");
      return;
    }

    // Silly me made a mistake here while writing this conditional statement. Won't happen again dattebayo!

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setError("");

    //try catch statement
    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json(); // for storing tokens

      if (!res.ok) {
        throw new Error(data.message || "Registration failed");
      }

      // if successful

      if (res.ok) {

        toast.success("Registration Successful!");
        // Save token to localStorage
        console.log("Saving token and redirecting...");

        localStorage.setItem("token", data.token);

        // Optional: Save user ID or email if returned
        localStorage.setItem("user", JSON.stringify(data.user));

        // success – handle token, redirect, etc.
        console.log("Registration successful:", data);
        // Redirect to account/dashboard page
        router.push("/");

        // or "/dashboard"
      } else {
        toast.error(data.message || "Registration Failed!")
      }


      // e.g. save token: localStorage.setItem("token", data.token);
      // navigate to dashboard: router.push("/dashboard");
    } catch (err) {
      setError(err.message);
    }

    //  console.log('Olamilekan Is The One True Imperial Sage!');
  };

  return (
    <div
      id="remastered"
      className="container justify-between  items-center flex"
    >
      <div className="access-description flex flex-col justify-between px-10 py-6 h-[100vh] bg-[#F78125]  w-[50%]">
        <Link href="/">
          <div className="flex gap-2 items-center">
            <Image
              src="/sage-centaur.png"
              className="logo"
              alt="logo"
              width={39.47}
              height={35.22}
            />
            <h1 className="logo-text">Sagittaerean Mall</h1>
          </div>
        </Link>

        <div className="text-content text-[white] mx-5">
          <h2 className="text-4xl font-bold">
            Your Go-To Destination for Seamless, Joyful Shopping.
          </h2>
          <p className="text-[16px] mt-3">
            At Sagittaerean Mall, shopping is more than just buying — it’s an
            experience. From everyday must-haves to unexpected treasures, we
            bring convenience, style, and satisfaction right to your screen.
            Thoughtfully curated, endlessly rewarding.
          </p>
        </div>

        <div className="flex text-white items-center justify-between">
          <p> 2025 | Sagittaerean Mall | All Rights Reserved</p>
          <button className="bg-[#23263b] rounded cursor-pointer border-none text-white w-[162.67px] h-[51px]">
            Need Help?
          </button>
        </div>
      </div>

      {/* Input Field.... */}
        




      <div className="reg-form px-10 h-[100vh] w-[50%]">
        
        
        <Link href="/">
          <div className="mobile">
            <Image
              src="/sage-centaur.png"
              className="logo"
              alt="logo"
              width={39.47}
              height={35.22}
            />
          </div>
        </Link>



        <h1 className="register  font-bold text-[24px] text-[#23263B]">
          Register
        </h1>
        <span className="text-[14px] text-[#91929D]">Step Into Style....</span>

        {/* Input Fields Now..... */}

        {/* Error Siren!! */}
        {error && (
          <p className="text-red-500 text-center bg-[pink] w-[100%] px-2 py-3">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="flex py-2 flex-col">
          <div className="flex py-2 flex-col">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              className="w-[100%] pl-3 h-[43px] border border-[#91929D] rounded"
            />
          </div>

          <div className="flex py-2 flex-col">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              className="w-[100%] h-[43px] pl-3 border border-[#91929D] rounded"
            />
          </div>

          <div className="flex py-2 flex-col">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              className="w-[100%] h-[43px] pl-3 border border-[#91929D] rounded"
            />
          </div>

          <div className="flex py-2 flex-col">
            <label htmlFor="setPassword">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              name="confirmPassword"
              className="w-[100%] h-[43px] pl-3 border border-[#91929D] rounded"
            />
          </div>

          <button
            className="bg-[#F78125] rounded cursor-pointer border-none text-white w-[162.67px] h-[51px]"
            type="submit"
          >
            Register
          </button>
        </form>
        {/* Route to Login */}
        <div className="flex gap-1">
          <p className="text-[12px]">ALREADY A STEPPER?</p>
          <Link className="text-[#F78125] text-[12px] font-bold" href="/login">
            LOGIN
          </Link>
        </div>
      </div>
    </div>
  );
}
