import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Dashboard() {
  
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    }
  }, []);

  return (
    <div>
      <h1>Welcome to Your Account</h1>
      {/* You can display user data here if stored in localStorage */}
    </div>
  );
}
