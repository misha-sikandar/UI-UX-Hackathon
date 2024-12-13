// app/components/Header.jsx
import { IoFilterOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

export default function AllProduct(){
    return(
        <div>
             <header className="w-full max-w-[1440px] h-[51px] bg-white mx-auto px-6 shadow-sm">
      <div className="h-full flex justify-between items-center">
        {/* Left side */}
        <div className="flex items-center">
          <span className="font-bold">New</span>
          <span className="ml-2 text-gray-600">(500)</span>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-6">
          <button className="flex items-center space-x-2 hover:text-gray-700">
            <IoFilterOutline className="text-xl" />
            <span>Hide Filters</span>
          </button>
          
          <button className="flex items-center space-x-2 hover:text-gray-700">
            <span>Sort By</span>
            <IoIosArrowDown className="text-xl" />
          </button>
        </div>
      </div>
    </header>

    <div className="flex">
  {/* Left Column */}
  <div className="w-[260px] h-[849px] ml-[48px]">
    
    <p className="text-bold">Shoes</p><br></br>
    <p className="text-bold">Sports Bras</p><br></br>
    <p className="text-bold">Tops & T-Shirts</p><br></br>
    <p className="text-bold">Hoodies & Sweatshirts</p><br></br>
    <p className="text-bold">Jackets</p><br></br>
    <p className="text-bold">Trouser & Tights</p><br></br>
    <p className="text-bold">Shorts</p><br></br>
    <p className="text-bold">Tracksuits</p><br></br>
    <p className="text-bold">Jumpsuits & Rompers</p><br></br>
    <p className="text-bold">Skirts & Dresses</p><br></br>
    <p className="text-bold">Socks</p><br></br>
    <p className="text-bold">Accessories & Equipment</p><br></br>
    
  </div>

  {/* Right Column */}
  <div className="w-[1092px] h-[18013px] bg-gray-100">
    {/* Content for the right column */}
    <p className="text-center">Right Column</p>
  </div>
</div>

        </div>
    )
}