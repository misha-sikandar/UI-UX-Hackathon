// app/components/Navbar.jsx
import { FaSearch, FaHeart, FaShoppingBag } from 'react-icons/fa';
import Link from 'next/link';
import { SiNike } from "react-icons/si";

export default function Header() {
  return (
    <nav className="bg-white shadow-sm w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center justify-between h-16 px-4">
  {/* Logo */}
  <div >
  <SiNike className="w-[60px] h-[30px]"/>
  </div>
</div>


          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/new-featured" className="text-gray-700 hover:text-black">New & Featured</Link>
            <Link href="/all_product" className="text-gray-700 hover:text-black">Men</Link>
            <Link href="/women" className="text-gray-700 hover:text-black">Women</Link>
            <Link href="/kids" className="text-gray-700 hover:text-black">Kids</Link>
            <Link href="/sale" className="text-gray-700 hover:text-black">Sale</Link>
            <Link href="/snkrs" className="text-gray-700 hover:text-black">SNKRS</Link>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 w-40 rounded-full border border-gray-300 focus:outline-none focus:border-gray-500"
              />
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
            
            {/* Heart Icon */}
            <Link href="/product_detail">
            <button className="text-gray-700 hover:text-black">
              <FaHeart className="h-5 w-5" />
            </button>
            </Link>
            {/* Shopping Bag Icon */}
           <Link href="/cart">
            <button className="text-gray-700 hover:text-black">
              <FaShoppingBag className="h-5 w-5" />
            </button></Link>
          </div>
        </div>
      </div>
    </nav>
  );
}



