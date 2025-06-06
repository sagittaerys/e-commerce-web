import { RiMessage2Line } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";


const CardContent = [
  {
    icon: <RiMessage2Line /> ,
    cardTitle: "Live Chat",
    cardBody: "Get instant help from our support team. Available 24/7 to assist with orders, products, and account issues.",
    buttonText: "Start Chat",
    link: "https://wa.me/+2349034105378"
  },
  {
    icon: <FaPhoneAlt /> ,
    cardTitle: "Phone Support",
    cardBody: "Speak directly with our customer service representatives for personalized assistance with your concerns.",
    buttonText: "Call Now",
    link: "tel:+2349034105378"
  },
  {
    icon: <TfiEmail /> ,
    cardTitle: "Email Support",
    cardBody: "Send us detailed inquiries and we'll respond within 24 hours with comprehensive solutions.",
    buttonText: "Send Email",
    link: "https://mailto:aremu0235@gmail.com"
  },
]

export default CardContent;