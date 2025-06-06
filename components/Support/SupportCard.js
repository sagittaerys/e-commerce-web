// import Link from "next/link"; -- Only for internal routing

export default function SupportCard({ icon, cardTitle, cardBody, buttonText, link}) {
  return (
    <div className="px-3 hover:border border-[#E8600A] mx-auto rounded bg-[#91929D] w-[22rem] py-5">
      <div className="icons rounded-md text-center p-1 bg-[#23263B] w-[60px] h-[60px]">

        <div className="text-white text-center mx-auto w-1/2 mt-[1rem] text-[1.5rem]">{icon}</div>
      </div>


      {/* Card text */}
      <div className="text mb-[1rem] py-2 h-[120px]">
        <h2 className="mb-[1rem] text-[1.4rem] font-bold text-white">{cardTitle}</h2>
        <p className="mb-[1.5rem] text-white text-[16px]">{cardBody}</p>


      </div>
        {/* button */}

        <a href= {link}
        target="_blank"
        rel="noopener noreferrer">
        <button className="bg-[#23263B] rounded-xl px-3 py-2 cursor-pointer text-white">
          {buttonText}
        </button>
        
        </a>
    </div>
  );
}
