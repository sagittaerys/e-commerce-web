import BestSellers from "@/components/Electronics/BestSellers.js"

import accessories from "@/components/accessories.js"
import products from "@/components/products"

import recommendedProducts from "@/components/recommemded-products"


const allProducts = [...BestSellers, ...accessories,...products, ...recommendedProducts]


export default allProducts;

