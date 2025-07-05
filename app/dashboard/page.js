"use client";
import LogoutButton from "@/components/LogOutBtn";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [name, setName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (!token) {
      router.push("/login");
      return;
    }

    if (userData) {
      try {
        const parsedUser = JSON.parse(userData);
        setName(parsedUser.name || "User"); // fallback if email doesn't exist
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);

  return (
    <div className="container p-10">
      <div className="flex justify-between">
        <h1 className="unique-text text-3xl">{`Welcome back, ${name}`}</h1>
        <LogoutButton />
      </div>
    </div>
  );
}
