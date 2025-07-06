
"use client";
import { useCart } from "@/components/Cart/cartContext";
import Image from "next/image";
import { useEffect } from "react";
import { API_BASE_URL } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { cart, removeFromCart, increaseQuantity, reduceQuantity, getTotalAmount, initializeCart } = useCart();
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Token being used:", token);

    if (!token) {
      router.push("/login");
      return;
    }

    const fetchCart = async () => {
      try {
        console.log("Fetching cart from:", `${API_BASE_URL}/api/auth/cart`);

        const res = await fetch(`${API_BASE_URL}/api/auth/cart`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const contentType = res.headers.get("content-type");

        if (!res.ok) {
          throw new Error(`Server error: ${res.status}`);
        }

        if (!contentType || !contentType.includes("application/json")) {
          const text = await res.text();
          throw new Error(`Unexpected response (non-JSON): ${text}`);
        }

        const data = await res.json();
        console.log("Fetched cart data:", data);

        if (Array.isArray(data)) {
          console.log("Cart data received:", data);
          initializeCart(data);
        } else {
          console.warn("Cart response is not an array:", data);
        }
      } catch (err) {
        console.error("Error fetching cart:", err.message);
      }
    };

    fetchCart();
  }, []);

  // debug cart data
  console.log("Current cart state:", cart);
  console.log("Cart item IDs:", cart.map(item => item._id));

  // writing a function to get unique key
  const getUniqueKey = (item, index) => {
    if (item._id) {
      return item._id;
    }
    if (item.productId) {
      return `${item.productId}-${index}`;
    }
    return `cart-item-${index}`;
  };

  return (
    <div className="container p-10">
      <div className="flex justify-between">
        <h1 className="unique-text text-3xl text-[#23263b]">Your Cart</h1>

        <div>
          <h1 className="text-3xl unique-text text-[#23263b]">
            Total: $
            <span className="text-[#F78125] ml-2 font-bold">
              {getTotalAmount().toFixed(2)}
            </span>
          </h1>
        </div>
      </div>

      {cart.length === 0 ? (
        <p className="unique-text my-3">No Items In Cart</p>
      ) : (
        cart.map((item, index) => {
          const uniqueKey = getUniqueKey(item, index);
          const itemId = item._id || item.productId || `temp-${index}`;
          
          return (
            <div 
              className="flex shadow-xl rounded-xl my-5 gap-5 items-center" 
              key={uniqueKey}
            >
              <div className="cart-image w-[20%]">
                <Image
                  src={item.image}
                  width={210}
                  height={190}
                  alt={item.name || "product"}
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

                <div className="flex gap-4 my-2 items-center">
                  <p className="font-bold text-[#F78125] text-[20px] unique-text">
                    $ {item.discountedPrice || item.price}
                  </p>
                  {item.discountedPrice && (
                    <p className="text-[17px] unique-text font-bold text-gray-600 line-through">
                      $ {item.actualPrice || item.price}
                    </p>
                  )}
                </div>

                <div className="flex gap-4">
                  <button
                    className="bg-[#F78125] text-white text-[12px] my-5 p-2 rounded-xl"
                    onClick={() => increaseQuantity(itemId)}
                  >
                    +1
                  </button>

                  <button
                    className="bg-[#F78125] text-white text-[12px] my-5 p-2 rounded-xl"
                    onClick={() => reduceQuantity(itemId)}
                  >
                    -1
                  </button>

                  <button
                    className="bg-[#F78125] text-white text-[12px] my-5 p-2 rounded-xl"
                    onClick={() => removeFromCart(itemId)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}