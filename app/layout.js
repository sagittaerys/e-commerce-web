import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Reuseable Components/header";
import Footer from "../components/Reuseable Components/footer";
import { FavoritesProvider } from "@/components/FavoritesContext";
import { CartProvider } from "@/components/Cart/cartContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "E-Commerce Website",
  description: "Created by sagittaerys_",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      {/* hope this works */}
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          <FavoritesProvider>
            <Header />
             {children}
            <Footer />
          </FavoritesProvider>
        </CartProvider>

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
        />
      </body>
    </html>
  );
}
