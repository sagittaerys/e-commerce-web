// import Link from "next/link"; -- Only for internal routing

export default function SupportCard({ icon, cardTitle, cardBody, buttonText, link}) {
  return (
    <div className="px-3 hover:border-[2px] border-[#23263B] shadow-xl mx-auto rounded-md bg-[#91929D	] w-[22rem] py-5">
      <div className="icons rounded-md text-center p-1 bg-[#23263B] h-[60px] w-[60px]">

        <div className="text-white text-center mx-auto w-1/2 mt-[1rem] text-[1.5rem]">{icon}</div>
      </div>


      {/* Card text */}
      <div className="text mb-[1rem] py-2 ">
        <h2 className="mb-[1rem] text-[1.4rem] font-bold text-[#23263B]">{cardTitle}</h2>
        <p className="mb-[1.5rem] text-[#23263B] text-[16px]">{cardBody}</p>


      </div>
        {/* button */}

        <a href= {link}
        target="_blank"
        rel="noopener noreferrer">
        <button className="bg-[#23263B] mt-[1rem] rounded-xl px-3 py-2 cursor-pointer text-white hover:bg-[#1a1c2e] transition-colors duration-500">
          {buttonText}
        </button>
        
        </a>
    </div>
  );
}
