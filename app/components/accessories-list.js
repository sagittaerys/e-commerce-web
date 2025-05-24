import AccessoriesCard from "./accessories-card";
import accessories from "./accessories";

export default function AccessoriesList(){
  return(
    <div className="flex gap-[40px] scrollbar-hide">

        {accessories.map((accessory, index) => (
          <AccessoriesCard key={index} {...accessory} />
        ))
        }
    </div>
  );
}