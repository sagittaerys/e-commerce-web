//Needed massive help....
"use client";


import { createContext, useContext, useState, useEffect } from "react";

// Step 1: Create the context
const FavoritesContext = createContext();

// Step 2: Create the provider component
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Optional: Load from localStorage on first render
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(stored);
  }, []);

  // Optional: Save to localStorage when favorites change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Step 3: Toggle favorite
  const toggleFavorite = (productId) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

// Step 4: Hook to use the context easily
export const useFavorites = () => useContext(FavoritesContext);
