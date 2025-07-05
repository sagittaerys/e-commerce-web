"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { API_BASE_URL } from "@/lib/api";
import { useRouter } from "next/navigation"; 
import { toast } from "react-toastify";

export default function LogInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/dashboard");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    //  console.log({email, password}) // battle for another day (backend)

    //Input Validation Genesis
    if (!email) {
      setError("Email is required!");
      return;
    }
    if (!password) {
      setError("Password is required!");
      return;
    }

    setError("");

    //try
    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json(); // for storing tokens

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      // if successful

      if (res.ok) {
        // Save token to localStorage
        toast.success("Login Successful!");


        console.log("Saving token and redirecting...");
        localStorage.setItem("token", data.token);

        // Optional: Save user ID or email if returned
        localStorage.setItem("user", JSON.stringify(data.user));

        // Redirect to account/dashboard page
        router.push("/dashboard");
        // success – handle token, redirect, etc.
        
        console.log("Login successful:", data);
        
      } else {
        toast.error(data.message || "Login Failed!")
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
      className="container justify-between  items-center flex "
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

      {/* Input Field... */}
      <div className="reg-form h-[100vh] px-10 w-[50%]">
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



        <h1 className="login-header font-bold text-[24px] text-[#23263B]">
          Welcome Back, Big Stepper!
        </h1>
        <span className="text-[14px] text-[#91929D]">
          Login To Step Into Style....
        </span>

        {/* Input Fields Now..... */}

        {/* Error Siren!! */}
        {error && (
          <p className="text-red-500 text-center bg-[pink] w-[100%] px-2 py-3">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="flex py-2 flex-col">
          <div className="flex py-2 flex-col">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              placeholder="sagittaerys@sagenet.com"
              className="w-[100%] h-[43px] pl-3 border border-[#91929D] rounded"
            />
          </div>

          <div className="flex py-2 flex-col">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              placeholder="....."
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              className="w-[100%] h-[43px] pl-3 border border-[#91929D] rounded"
            />
          </div>

          <button
            className="bg-[#F78125] rounded cursor-pointer border-none text-white w-[162.67px] h-[51px]"
            type="submit"
          >
            LOG IN
          </button>
        </form>
        {/* Route to Sign Up */}
        <div className="flex gap-1">
          <p className="text-[12px]">NEW USER?</p>
          <Link
            className="text-[#F78125] text-[12px] font-bold"
            href="/account"
          >
            SIGN UP
          </Link>
        </div>
      </div>
    </div>
  );
}
