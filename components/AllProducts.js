import BestSellers from "@/components/Electronics/BestSellers.js"

import accessories from "@/components/Accessories/accessories.js"
import products from "@/components/Trending/products"

import recommendedProducts from "@/components/Recommended/recommemded-products"


const allProducts = [...BestSellers, ...accessories,...products, ...recommendedProducts]


export default allProducts;

