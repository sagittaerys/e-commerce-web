import TrendingCard from "./trending-card";
import products from "./products";

export default function TrendingList(){
  return(
    <div className="flex gap-[40px] px-10 scrollbar-hide">

        {products.map((product, index) => (
          <TrendingCard key={index} {...product} />
        ))
        }
    </div>
  );
}