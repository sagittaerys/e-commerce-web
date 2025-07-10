import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Header from "@/components/Reuseable Components/header";
// import Footer from "../components/Reuseable Components/footer";
import { FavoritesProvider } from "@/components/FavoritesContext";
import { CartProvider } from "@/components/Cart/cartContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConditionalLayout from "./ConditionalLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sagittaerean Mall",
  icons: {
  icon: '/sage-centaur-32x32.png',     
  shortcut: '/sage-centaur-16x16.png',   
  apple: '/sage-centaur-180x180.png',
},
  description: "Created by sagittaerys_",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
    return (
    <html lang="en">
      {/* hope this works */}

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          <FavoritesProvider>
            <ConditionalLayout>{children}</ConditionalLayout>
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
