import StoreList from "@/components/FindStore/StoreList";

export default function FindStore() {


  return (
    <div className="container find-store py-6 px-10">

      <div className="store-header text-center mx-auto w-[50%]">
        <h1 className=" find-header text-[3rem] text-[#23263B] font-bold">Find A Store</h1>
        <p className="text-[#23263B] text-[16px]">
          Discover amazing stores at Sagittaerean Mall
        </p>
      </div>

      {/* The Potential Filter Field */}

      <div className="filter-container border border-[#23263B] mt-8 py-12 mx-auto w-[100%] shadow-xl rounded-xl">

        <form className="omni-form gap-2 flex px-6">
          <input
            type="text"
            placeholder="Search stores, brands or products......"
            className="first-input py-3 text-[#91929D] pl-3 w-[60%] rounded-3xl border-[1.5px] border-[#23263B]"
          />

          <select className="first-input py-2 pl-3 w-[25%] rounded-3xl border-[1.5px] border-[#23263B]">
            <option value="">All Categories</option>
            <option>Fashion & Apparel</option>
            <option>Electronics</option>
            <option>Food & Dining</option>
            <option>Beauty & Recreation</option>
          </select>

          <button className="find-store-btn p-2 w-[15%] rounded-3xl border-[2px] border-[#23263B] bg-[#23263B] text-white cursor-pointer hover:bg-[#3b3e57]">
            Search
          </button>
        </form>

        <div className="ocean-buttons px-6 mt-4 flex gap-3">
          <button className="ocean rounded-3xl py-2 px-3 border-[1px] border-[#23263B] text-[#23263B] cursor-pointer hover:bg-[#3b3e57] hover:text-white">
            All Stores
          </button>
          <button className="ocean rounded-3xl py-2 px-3 border-[1px] border-[#23263B] cursor-pointer hover:bg-[#3b3e57] text-[#23263B] hover:text-white">
            Open
          </button>
          <button className="ocean rounded-3xl text-[#23263B] py-2 px-3 border-[1px] border-[#23263B] cursor-pointer hover:bg-[#3b3e57] hover:text-white">
            Popular
          </button>
          <button className="ocean rounded-3xl text-[#23263B] py-2 px-3 border-[1px] border-[#23263B] cursor-pointer hover:bg-[#3b3e57] hover:text-white">
            New Arrivals
          </button>
        </div>
      </div>


      <div className="mapped-cards w-full mt-20">
          <StoreList />
      </div>


      <div className="w-full border rounded-xl py-5 my-20 border-[#23263B]">
            <h2 className="text-[2rem] p-4 font-bold text-center mb-2">Interactive Map</h2>

            <div className=" mx-auto rounded-2xl border-3 border-dotted mb-7 border-[#23263B] w-[95%] h-[30rem]">

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1786541102906!2d55.27180147417417!3d25.19719697771098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBurj%20Khalifa!5e0!3m2!1sen!2sng!4v1749120676891!5m2!1sen!2sng" className="w-full h-full rounded-2xl" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>  

            </div>

      </div>




      {/* <h2 className="text-[18px] font-bold py-2">FIND OUR NEAREST STORES ON GOOGLE MAPS</h2> 
           Map
           <div className="mx-auto w-1/2">
            No Access To A Google API Key..... So static will have to work for now.
            
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1786541102906!2d55.27180147417417!3d25.19719697771098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBurj%20Khalifa!5e0!3m2!1sen!2sng!4v1749120676891!5m2!1sen!2sng" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>


            </div> */}
    </div>
  );
}
