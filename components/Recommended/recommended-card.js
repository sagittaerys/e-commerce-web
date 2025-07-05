"use client";


import { useFavorites } from "../FavoritesContext";

import { useCart } from "../Cart/cartContext";


import { toast } from "react-toastify";

import Image from "next/image";
// import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
// import { IoMdHeartEmpty } from "react-icons/io";
import Link from "next/link";
// import BestSellers from "./BestSellers.js";

export default function RecommendedCard({
  name,
  actualPrice,
  discountedPrice,
  image,
  brand,
  id,
}) {
  const { favorites, toggleFavorite } = useFavorites();

  const isFavorite = favorites.includes(id);

  //Add to cart here

  const { cart, addToCart } = useCart();

  const percentageValue = () => {
    return actualPrice * 0.25;
  };

  // The Cart
  const handleAddToCart = async () => {
    const alreadyInCart = cart.some((item) => item.id === id);
  
    if (alreadyInCart) {
      toast.info(`${name} is already in your cart.`);
      return;
    }
  
    // Add to local cart state
    addToCart({ id, name, discountedPrice, actualPrice, image, brand });
    toast.success(`${name} added to cart!`);
  
    // token signifying saving to local storage
    const token = localStorage.getItem("token");
  
    if (token) {
      const cartItem = {
        productId: id,
        name,
        image,
        quantity: 1,
        price: discountedPrice,
        brand,
      };
  
      try {
        const res = await fetch(`${API_BASE_URL}/api/auth/cart`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(cartItem),
        });
  
        const data = await res.json();
  
        if (!res.ok) throw new Error(data.message || "Failed to save cart");
  
        console.log("Cart item saved to backend:", data.cart);
      } catch (err) {
        console.error("Error saving cart to backend:", err.message);
        toast.error("Error saving cart online.");
      }
    }
  };

  // The Favorite

  const handleFavorite = () => {
    const alreadyInFavorite = cart.some((item) => item.id === id);

    if (alreadyInFavorite) {
      toast.info(`${name} is already in favorites!`);
    } else {
      toggleFavorite(id);
      toast.success("Added to favorites!");
    }
  };

  return (
    <div className="relative rounded-xl  w-[220px] h-[450px]">
      <div className="card-image p-3 bg-[#f8f9fa] rounded-tl-xl rounded-tr-xl w-full">
        <Image
          className="mx-auto w-full mt-2 rounded-3xl  mb-3 transition-transform duration-300 ease-in-out transform hover:scale-105"
          src={image}
          width={210}
          height={190}
          alt="best-selling"
        />

        {/* Heart */}

        <div>
          <button className="discount-marker absolute z-10 top-5   text-[10px] bg-[#F78125] text-white px-3 py-1.5 rounded-2xl transition-transform duration-300 ease-in-out transform hover:scale-105">
            25% OFF
          </button>

          <button
            className="heart-icon border-2 border-[#23263B] m-2 p-1 rounded-full top-[2%] absolute ml-40 z-10 bg-white transition-transform duration-300 ease-in-out transform hover:scale-105"
            onClick={() => {
              const isAlreadyFavorite = favorites.includes(id); // check before toggling => new variable created
              toggleFavorite(id);

              if (isAlreadyFavorite) {
                toast.info(`${name} removed from favorites`);
              } else {
                toast.success(`${name} added to favorites`);
              }
            }}
          >
            {isFavorite ? (
              <FaHeart className="text-[red] text-[24px]" />
            ) : (
              <FaHeart className="hover:text-[red] text-[#23263B] text-[24px]" />
            )}
          </button>
        </div>
      </div>

      {/* Description */}
      <div className="p-2">
        <div>
          <span className="text-gray-600 text-[10px] text-[#666] font-semibold">
            {brand}
          </span>
        </div>

        <div>
          <p className="text-[#1a1a1a] font-bold text-[14px]">{name}</p>
        </div>

        <div className="flex gap-4 my-2 items-center">
          <p className="font-bold text-[#F78125] text-[15px] unique-text">
            $ {discountedPrice}
          </p>

          <p className=" text-[13px] unique-text font-bold text-gray-600 line-through">
            $ {actualPrice}
          </p>

          <button className="p-1 bg-[#dcfce7] text-[#86efac] text-[11px] border border-[#86efac]  rounded-md">
            Save ${percentageValue()}
          </button>
        </div>
      </div>

      {/* Btn */}
      <div className="px-2 my-3 gap-5 flex">
        {/* Add To Cart Btn */}
        <button
          onClick={handleAddToCart}
          className="bg-[#F78125] text-white text-[12px] p-2 rounded-xl"
        >
          Add To Cart
        </button>

        <Link href={`/product/${id}`}>
          <button className="text-[#F78125] border  border-[#F78125] hover:text-white hover:bg-[#F78125] text-[12px] p-2 rounded-xl">
            Quick View
          </button>
        </Link>
      </div>
    </div>
  );
}

