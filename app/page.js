// import OlamiDemo from "./components/main";

import AboutYou from "../components/about-you";
import Banner from "../components/banner";
import NewAccessories from "../components/new-accesories";
import Recommended from "../components/recommended";
import Summer from "../components/summer";
import Trending from "../components/trending";
import Categories from "@/components/Categories";



export default function Home() {
  return (
    <div>
      <Banner />
      <Categories />
      <Trending />
      <Summer />
      <Recommended />
      <AboutYou />
      <NewAccessories />
    </div>
  );
}
