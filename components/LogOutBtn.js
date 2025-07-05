"use client";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token"); //token exists so the user is logged in.
    localStorage.removeItem("user");

    router.push("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-600 pointer text-white px-4 py-2 rounded"
    >
      Log Out
    </button>
  );
}
