// app/components/Footer.jsx
import { FaTwitter, FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return (
      <footer className=" bg-black text-white">
        <div className="container mx-auto px-4 py-8">
          {/* Social Media Icons */}
          <div className="flex justify-end text-[#7E7E7E] gap-4 mb-6">
            <FaTwitter className="w-6 h-6 cursor-pointer hover:text-blue-400" />
            <FaFacebook className="w-6 h-6 cursor-pointer hover:text-blue-600" />
            <FaYoutube className="w-6 h-6 cursor-pointer hover:text-red-600" />
            <FaInstagram className="w-6 h-6 cursor-pointer hover:text-pink-500" />
          </div>

          <div className="grid grid-cols-1 font-[400]  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-lg">FIND A STORE</h4>
              <h4 className="font-bold text-lg">BECOME A MEMBER</h4>
              <h4 className="font-bold text-lg">SIGN UP FOR EMAIL</h4>
              <h4 className="font-bold text-lg">SEND US FEEDBACK</h4>
              <h4 className="font-bold text-lg">STUDENT DISCOUNTS</h4>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">GET HELP</h3>
              <ul className="space-y-2 text-[#7E7E7E]">
                <li>Order Status</li>
                <li>Delivery</li>
                <li>Returns</li>
                <li>Payment Options</li>
                <li>Contact Us on Nike.com Inquiries</li>
                <li>Contact Us on All Other Inquiries</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">ABOUT NIKE</h3>
              <ul className="space-y-2 text-[#7E7E7E]">
                <li>News</li>
                <li>Careers</li>
                <li>Investors</li>
                <li>Sustainability</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
}
