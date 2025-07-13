"use client";

import { useFavorites } from "@/components/FavoritesContext";
import BestSellCard from "@/components/Electronics/BestSellCard";
import allProducts from "@/components/AllProducts";

export default function FavoritesPage(){

  const { favorites } = useFavorites();

  const favoriteProducts = allProducts.filter((product) =>
    favorites.includes(product.id)
  );


  return(
    <div className="container fav-container p-10">
        <h1 className="favorites-null unique-text text-3xl font-bold mb-6 text-[#23263B]">Favorite Products</h1>
      
      <div className="favorites-grid grid grid-cols-3 sm:grid-cols-2 md:grid-cols-4 gap-6">

          {favoriteProducts.length === 0 ? (
        <p className="font-bold my-7">No favorites found....</p>
      ) : (
        favoriteProducts.map((product) => (
          <BestSellCard key={product.id} {...product} />
        ))
      )}
      </div>

      {/* It finally works!! Omoor! */}
    </div>
  )
}