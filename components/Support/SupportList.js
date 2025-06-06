import CardContent from "./CardContent"
import SupportCard from "./SupportCard"



export default function SupportList(){
  return(
    <div className="flex gap-3">
        {CardContent.map((card, index) => ( <SupportCard key={index} {...card} /> ))}
    </div>
  )
}