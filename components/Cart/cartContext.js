
"use client";

import { createContext, useContext, useState, useEffect } from "react";

// Step 1: Create context
const CartContext = createContext();

// Step 2: Provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Load from localStorage (optional)
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(stored);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Step 3: Add to cart logic
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item._id === product._id);

      if (existing) {
        return prev.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  // Add 1 value...
  const increaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const reduceQuantity = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0)
    );
  };

  const initializeCart = (items) => {
    console.log("initializeCart called with:", items);

    if (!Array.isArray(items)) {
      console.warn("Cart data is not an array:", items);
      return;
    }

    setCart(items); // Set cart state directly
  };

  // Optional: remove
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item._id !== id));
  };

  // Get total amount with fallback pricing
  const getTotalAmount = () => {
    console.log("Cart contents:", cart);
    return cart.reduce((total, item) => {
      // Use discountedPrice if available, otherwise fall back to price
      const itemPrice = item.discountedPrice || item.price;
      return total + itemPrice * item.quantity;
    }, 0);
  };

  // Step 4: Provide values
  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      initializeCart, 
      removeFromCart, 
      increaseQuantity, 
      reduceQuantity, 
      getTotalAmount 
    }}>
      {children}
    </CartContext.Provider>
  );
};

// Step 5: useCart hook
export const useCart = () => useContext(CartContext);