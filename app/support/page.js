import Image from "next/image"
import SupportList from "@/components/Support/SupportList"


export default function SupportPage(){
  return(
    <div className="container py-10 px-10">
        <div className="text text-center py-15 mx-auto w-1/2">
          <h1 className="font-bold text-[#23263B] text-[3rem]">Support Center</h1>
          <p className="text-[1.2rem] text-[#23263B]">We're here to help you with all your shopping needs. Get instant assistance or browse our comprehensive help resources.</p>
        </div>

        {/* Main Contents */}
        <div>
          <SupportList />
        </div>
        
    </div>
  )
}