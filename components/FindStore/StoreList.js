import StoreCard from "./StoreCard";
import Stores from "./Stores";

export default function StoreList(){
  return(
    <div className="store-card flex justify-between gap-5 mx-auto w-[100%]">
        {Stores.map((store, index) => ( <StoreCard key={index} {...store} /> ))}
    </div>
  )
}