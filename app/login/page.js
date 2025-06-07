"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";


export default function LogInPage(){

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");

const handleSubmit = (e) => {
   e.preventDefault();
   console.log({email, password}) // battle for another day (backend)

   //Input Validation Genesis
    if (!email){
     setError('Email is required!');
     return;
    }
    if (!password){
     setError('Password is required!');
     return;
    }
   
   setError('');
   console.log('Olamilekan Is The One True Imperial Sage!');
  } 


  return(
    <div className="container">

            <div className="reg-container gap-10 justify-between items-center flex py-10 px-10">
            
                    <div className="page-icon w-[50%]">
                      <Image src="/login.png" alt="" width={401.33} height={327.33} />
                    </div>
                    <div className="reg-form w-[50%]">
                      <h1 className="login-header font-bold text-[24px] text-[#23263B]">Welcome Back, Big Stepper!</h1>
                      <span className="text-[14px] text-[#91929D]">
                        Login To Step Into Style....
                      </span>
            
                      {/* Input Fields Now..... */}
            
                  {/* Error Siren!! */}
                  {error && <p className="text-red-500 text-center bg-[pink] w-[507.16px] px-2 py-3">{error}</p>}
            
                      <form onSubmit={handleSubmit} className="flex py-2 flex-col">
                                 
                        <div className="flex py-2 flex-col">
            
                        <label htmlFor="email">Email Address</label>
                        <input type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        placeholder="sagittaerys@sagenet.com"
                        className="w-[507.16px] h-[43px] pl-3 border border-[#91929D] rounded"
                         />
                        </div>
            
                        <div className="flex py-2 flex-col">
            
                        <label htmlFor="password">Password</label>
                        <input type="password" 
                        value={password} 
                        placeholder="....."
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                        className="w-[507.16px] h-[43px] pl-3 border border-[#91929D] rounded"
                         />
                        </div>
            
                        
            
                        <button className="bg-[#23263B] rounded cursor-pointer border-none text-white w-[162.67px] h-[51px]" type="submit">LOG IN</button>
            
                      </form>
                      {/* Route to Sign Up */}
                      <div className="flex gap-1">
                        <p className="text-[12px]">NEW USER?  
                          </p>
                          <Link className="text-[#23263B] text-[12px] font-bold" href= "/account">
                               SIGN UP
                          </Link>
                      </div>
                    </div>
                  </div>
            

    </div>
  );
}