"use client";


import allProducts from "@/components/AllProducts";
import BestSellCard from "@/components/Electronics/BestSellCard";

export default function AllProductsPage() {
  return (
    <div className="container mx-auto w-full px-10">
      <div className="p-4">
        <h1 className="unique-text text-3xl font-bold mb-6">All Products</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {allProducts.map((product) => (
            <BestSellCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}
