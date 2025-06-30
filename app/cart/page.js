"use client";
import { useCart } from "@/components/Cart/cartContext";
import Image from "next/image";
// import { useCart } from "@/components/Cart/cartContext";
import { useEffect } from "react";
import { API_BASE_URL } from "@/lib/api";
import { useRouter } from "next/navigation";


export default function CartPage() {



  
  
  
  // Independent Functions
  
  // +1
  
  
  
  
  const { cart, removeFromCart, increaseQuantity, reduceQuantity, getTotalAmount, initializeCart } = useCart();
  
  const router = useRouter();
  
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    const fetchCart = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/cart`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        initializeCart(data); // ✅ Fill the cart context
      } catch (err) {
        console.error("Error fetching cart:", err.message);
      }
    };

    fetchCart();
  }, []);
  
  
  return (
    <div className="container p-10">
      <div className="flex justify-between">
      <h1 className="unique-text text-3xl text-[#23263b]">Your Cart</h1>

      {/* Total */}

      <div>
          <h1 className="text-3xl unique-text text-[#23263b]">Total: $  
                  <span className="text-[#F78125] ml-2 font-bold">

                    {getTotalAmount().toFixed(2)}

                  </span>
              
              </h1>
      </div>
      </div>

      {cart.length === 0 ? (
        <p className="unique-text my-3">No Items In Cart</p>
      ) : (
        cart.map((item) => (
          // Individual Card
          <div className="flex shadow-xl rounded-xl my-5 gap-5 items-center" key={item.id}>
            <div className="cart-image w-[20%]">
              <Image
                src={item.image}
                width={210}
                height={190}
                alt="best-selling"
              />
            </div>

            <div className="cart-details py-2.5 px-10 w-[80%]">
              <div>
                <span className="text-gray-600 text-[10px] text-[#666] font-semibold">
                  {item.brand}
                </span>
              </div>

              <p className="text-xl font-bold">{item.name}</p>

              <p className="text-[#666] font-bold">Quantity: {item.quantity}</p>

              {/* prices */}

              <div className="flex gap-4 my-2 items-center">
                <p className="font-bold text-[#F78125] text-[20px] unique-text">
                  $ {item.discountedPrice}
                </p>

                <p className=" text-[17px] unique-text font-bold text-gray-600 line-through">
                  $ {item.actualPrice}
                </p>
              </div>

              <div className="flex gap-4 ">
                <button
                  className="bg-[#F78125] text-white text-[12px] my-5 p-2 rounded-xl"
                  onClick={() => increaseQuantity(item.id)}
                >
                  +1
                </button>

                <button
                  className="bg-[#F78125] text-white text-[12px] my-5 p-2 rounded-xl"
                  onClick={() => reduceQuantity(item.id)}
                >
                  -1
                </button>

                {/* Cart Button */}
                <button
                  className="bg-[#F78125] text-white text-[12px] my-5 p-2 rounded-xl"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
