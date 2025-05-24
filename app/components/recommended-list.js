import RecommendedCard from "./recommended-card";
import recommendedProducts from "./recommemded-products";

export default function RecommendedList(){
  return(
    <div className="flex gap-[40px] scrollbar-hide">

        {recommendedProducts.map((recommemded, index) => (
          <RecommendedCard key={index} {...recommemded} />
        ))
        }
    </div>
  );
}