"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import BestSellers from "@/components/Electronics/BestSellers";
import recommendedProducts from "@/components/Recommended/recommemded-products";
import products from "@/components/Trending/products";
import accessories from "@/components/Accessories/accessories";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import { GiCheckMark } from "react-icons/gi";
import { IoCartOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { useFavorites } from "@/components/FavoritesContext";
import { useCart } from "@/components/Cart/cartContext";
import { toast } from "react-toastify";
import { API_BASE_URL } from "@/lib/api";

export default function ProductPage({
  name,
  actualPrice,
  discountedPrice,
  image,
  brand,
}) {

const { cart, addToCart } = useCart();
const { favorites, toggleFavorite } = useFavorites();

const params = useParams();
  const id = params.id;
  const omniArray = [...BestSellers,...recommendedProducts, ...accessories, ...products]

  const unifier = omniArray.find((p) => p.id === id);

  const percentageValue = () => {
    return unifier.actualPrice * 0.25;
  };

  if (!unifier) {
    return <p className="p-10">Product not found.</p>;
  }




const isFavorite = favorites.includes(id);

  //Add to cart here



const handleAddToCart = async () => {
  const alreadyInCart = cart.some((item) => item.id === id);

  if (alreadyInCart) {
    toast.info(`${unifier.name} is already in your cart.`);
    return;
  }

  // Add to local cart state
  addToCart({ id, name, discountedPrice, actualPrice, image, brand });
  toast.success(`${unifier.name} added to cart!`);

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



  
  return (
    <div className="container quick-container p-10">

      {/* <Link className="product-btn w-[180px]" href="/electronics/#best-sellers">
        <button className="rounded-xl  items-center flex gap-2 p-2  bg-white border  bg-[#E8600A] boborrder-[#23263B]">
          <FaArrowLeft className="text-[25px] text-[#E8600A]" />

          <p className="text-[15px] font-bold text-[#23263B]">
            Back To Products
          </p>
        </button>
      </Link> */}

      {/* Display */}

      <div className="flex quick-view-container justify-evenly mt-5 p-3 w-full h-[800px]">

        <div className="quick-image border border-[#F78125] rounded-xl  gap-4 w-[45%] h-[80%]">
          <div className="h-[70%]">
            <Image
              className="mt-9 rounded-xl mx-auto"
              src={unifier.image}
              alt={unifier.name}
              width={350}
              height={500}
            />
          </div>

          <div className="smaller justify-center w-full gap-3 px-3 flex h-[30%]">
            <div>
              <Image
                className="rounded-xl mt-10 mx-auto"
                src={unifier.image}
                alt={unifier.name}
                width={100}
                height={130}
              />
            </div>

            <div>
              <Image
                className="rounded-xl mt-10 mx-auto"
                src={unifier.image}
                alt={unifier.name}
                width={100}
                height={130}
              />
            </div>

            <div>
              <Image
                className="mt-10 rounded-xl mx-auto"
                src={unifier.image}
                alt={unifier.name}
                width={100}
                height={130}
              />
            </div>

            <div>
              <Image
                className=" mt-10 rounded-xl mx-auto"
                src={unifier.image}
                alt={unifier.name}
                width={100}
                height={130}
              />
            </div>
          </div>
        </div>

        <div className="quick-description shadow-xl rounded-xl py-5 w-[45%] p-3">
          <div className="max-w-[80%]">
            <h1 className="text-3xl text-[#23263B] font-bold">
              {unifier.name}
            </h1>
          </div>

          <div className="my-2">
            <span className="text-gray-600 text-[16px] text-[#666] font-semibold">
              {unifier.brand}
            </span>
          </div>

          <div className="my-7 items-end max-w-[86%]  flex gap-4">
            <p className="text-[35px] font-bold text-[#F78125] unique-text">
              $ {unifier.discountedPrice}
            </p>

            <div className="flex gap-5 items-center">
              <p className=" unique-text text-xl font-bold text-gray-600 line-through">
                $ {unifier.actualPrice}
              </p>

              <button className="p-1 bg-[#dcfce7] text-[14px] text-[#86efac]  border border-[#86efac]  rounded-md">
                Save ${percentageValue()}
              </button>
            </div>
          </div>

          {/* Continue */}

          <div className="my-8 text-[#666]">
            <p>{unifier.productDescription}</p>
          </div>

          {/* Key Features */}

          <div className="my-7 p-3 text-[#666] ">
            <h1 className="text-2xl font-bold my-3">Key Features</h1>

            <ul className="text-[12px] px-1">
              <li className="flex gap-2 items-center my-1">
                <GiCheckMark className="text-[#E8600A]" />{" "}
                {unifier.keyFeatures[0]}
              </li>
              <li className="flex gap-2 items-center my-1">
                <GiCheckMark className="text-[#E8600A]" />
                {unifier.keyFeatures[1]}
              </li>
              <li className="flex gap-2 items-center my-1">
                <GiCheckMark className="text-[#E8600A]" />
                {unifier.keyFeatures[2]}
              </li>
              <li className="flex gap-2 items-center my-1">
                <GiCheckMark className="text-[#E8600A]" />
                {unifier.keyFeatures[3]}
              </li>
              <li className="flex gap-2 items-center my-1">
                <GiCheckMark className="text-[#E8600A]" />
                {unifier.keyFeatures[4]}
              </li>
              <li className="flex gap-2 items-center my-1">
                <GiCheckMark className="text-[#E8600A]" />
                {unifier.keyFeatures[5]}
              </li>
            </ul>
          </div>
          {/* Add To Cart Button */}
          <div className="flex gap-2 text-white w-full">
            <button onClick={handleAddToCart} className="w-[90%] flex gap-3 item-center justify-center rounded-xl p-3 text-[15px] bg-[#F78125] add to cart">
              <IoCartOutline className="text-[18px]" />

              <h1 className="font-bold">Add To Cart</h1>
            </button>

           
              <button className="w-[10%] border-2 border-[#23263B] rounded-xl favorite"
                onClick={() => {
                  const isAlreadyFavorite = favorites.includes(id); // check before toggling => new variable created
                  toggleFavorite(id);

                  if (isAlreadyFavorite) {
                    toast.info(`${unifier.name} removed from favorites`);
                  } else {
                    toast.success(`${unifier.name} added to favorites`);
                  }
                }}
              >
                {isFavorite ? (
                  <FaHeart className="text-[red] mx-auto text-[24px]" />
                ) : (
                  <FaHeart className="hover:text-[red] text-[#23263B]  mx-auto text-[24px]" />
                )}
              </button>
            
          </div>
        </div>
      </div>
    </div>
  );
}
