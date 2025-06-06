export default function FindStore(){
  return(
    <div className="container py-10 px-10">
           <h2 className="text-[18px] font-bold py-2">FIND OUR NEAREST STORES ON GOOGLE MAPS</h2> 
           {/* Map */}
           <div className="mx-auto w-1/2">
            {/* No Access To A Google API Key..... So static will have to work for now. */}
            
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1786541102906!2d55.27180147417417!3d25.19719697771098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBurj%20Khalifa!5e0!3m2!1sen!2sng!4v1749120676891!5m2!1sen!2sng" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>


            </div>
    </div>
  )
}