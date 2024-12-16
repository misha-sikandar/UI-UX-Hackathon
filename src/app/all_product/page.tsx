// app/components/Header.jsx
import { IoFilterOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

export default function AllProduct() {
  const products = [
    { id: 1, name: "Nike Air Force 1 Mid '07",status:"Just In", price: "₹ 10 795.00", image: "/images/shoe9.png" ,product:"Men's Shoes", color:"1 Colour"},
    { id: 2, name: "Nike Court Vision Low Next Nature", status:"Just In",price: "₹ 4 995.00", image: "/images/shoe7.png" ,product:"Men's Shoes", color:"1 Colour"},
    { id: 3, name: "Nike Air Force 1 PLT.AF.ORM",status:"Just In", price: "₹ 8 695.00", image: "/images/shoe8.png" ,product:"Women's Shoes", color:"1 Colour"},
    { id: 4, name: "Nike Air Force 1 React",status:"Just In", price: "₹ 13 295.00", image: "/images/shoe11.png" ,product:"Men's Shoes", color:"1 Colour"},
    { id: 5, name: "Air Jordan 1 Elevate Low",status:"Promo Exclusion", price: "₹ 11 895.00", image: "/images/shoe10.png" ,product:"Women's Shoes", color:"1 Colour"},
    { id: 6, name: "Nike Standard Issue",status:"Just In", price: "₹ 2 895.00", image: "/images/men1.jpeg" ,product:"Women's Basketball Jersey", color:"1 Colour"},
    { id: 7, name: "Nike Dunk Low Retro SE",status:"Promo Exclusion", price: "₹ 9 695.00", image: "/images/shoe12.png" ,product:"Men's Shoes", color:"1 Colour"},
    { id: 8, name: "Nike Dri-FIT UV Hyverse",status:"Sustainable Materials", price: "₹ 2 495.00", image: "/images/men5.jpeg" ,product:"Men's Short-Sleeve Graphic Fitness Top", color:"1 Colour"},
    { id: 9, name: "Nike Court Vision Low",status:"Just In", price: "₹ 5 695.00", image: "/images/shoe13.png" ,product:"Men's Shoes", color:"1 Colour"},
    { id: 10, name: "Nike Dri-FIT Ready",status:"Just In", price: "₹ 2 495.00", image: "/images/men4.jpeg" ,product:"Men's Short-Sleeve Fitness Top", color:"3 Colour"},
    { id: 11, name: "Nike One Leak Protection: Period",status:"Just In", price: "₹ 3 395.00", image: "/images/men8.jpeg" ,product:"Women's Mid-Rise 18cm (approx.) Biker Shorts", color:"2 Colour"},
    { id: 12, name: "Nike Air Force 1 LV8 3",status:"Just In", price: "₹ 7 495.00", image: "/images/shoe6.png" ,product:"Older Kids' Shoe", color:"1 Colour"},
    { id: 13, name: "Nike Blazer Low Platform",status:"Just In", price: "₹ 8 195.00", image: "/images/shoe14.png" ,product:"Women's Shoes", color:"1 Colour"},
    { id: 14, name: "Nike Air Force 1 '07", status:"Just In",price: "₹ 8 195.00", image: "/images/shoe15.png" ,product:"Women's Shoes", color:"2 Colour"},
    { id: 15, name: "Nike Pro Dri-FIT", status:"Just In",price: "₹ 1 495.00", image: "/images/men2.jpeg" ,product:"Men's Tight-Fit Sleeveless Top", color:"1 Colour"},
    { id: 16, name: "Nike Dunk Low Retro",status:"Just In", price: "₹ 8 695.00", image: "/images/shoe5.png" ,product:"Men's Shoes", color:"1 Colour"},
    { id: 17, name: "Nike Air Max SC",status:"Just In", price: "₹ 5 995.00", image: "/images/shoe16.png" ,product:"Women's Shoes", color:"2 Colour"},
    { id: 18, name: "Nike Dri-FIT UV Miler",status:"Just In", price: "₹ 1 695.00", image: "/images/men12.jpeg" ,product:"Men's Short-Sleeve Running Top", color:"1 Colour"},
    { id: 19, name: "Nike Air Max SYSTM", status:"Just In",price: "₹ 6 495.00", image: "/images/shoe17.png" ,product:"Older Kids' Shoes", color:"1 Colour"},
    { id: 20, name: "Nike Alate All U",status:"Just In", price: "₹ 2 195.00", image: "/images/men7.jpeg" ,product:"Women's Light-Support Lightly Lined U-Neck Printed Sports Bra", color:"1 Colour"},
    { id: 21, name: "Nike Court Legacy Lift",status:"Just In", price: "₹ 7 495.00", image: "/images/shoe18.png" ,product:"Women's Shoes", color:"2 Colour"},
    { id: 22, name: "Nike Swoosh",status:"Just In", price: "₹ 3 095.00", image: "/images/men9.jpeg" ,product:"Women's Medium-support Padded Sports Bra Tank", color:"2 Colour"},
    { id: 23, name: "Nike SB Zoom Janoski OG+",status:"Just In", price: "₹ 8 595.00", image: "/images/shoe19.png" ,product:"Shoes", color:"1 Colour"},
    { id: 24, name: "Nike Dri-FIT Run Division Rise 365",status:"Just In", price: "₹ 3 495.00", image: "/images/men3.jpeg" ,product:"Men's Running Tank", color:"2 Colour"},
    { id: 25, name: "Nike Dri-FIT Challenger",status:"Just In", price: "₹ 2 495.00", image: "/images/men6.jpeg" ,product:"Men's 18cm (approx.) 2-in-1 Versatile Shorts", color:"1 Colour"},
    { id: 26, name: "Jordan Series ES", status:"Just In",price: "₹ 7 495.00", image: "/images/shoe20.png" ,product:"Men's Shoes", color:"2 Colour"},
    { id: 27, name: "Nike Outdoor Play", status:"Just In",price: "₹ 3 895.00", image: "/images/men11.jpeg" ,product:"Older Kids' Oversized Woven Jacket", color:"1 Colour"},
    { id: 28, name: "Nike Sportswear Trend",status:"Just In", price: "₹ 2 495.00", image: "/images/men10.jpeg",product:"Older Kids' (Girls') High-waisted Woven Shorts", color:"2 Colour" },
    { id: 29, name: "Nike Blazer Low '77 Jumbo", status:"Just In",price: "₹ 8 595.00", image: "/images/shoe21.png" ,product:"Women's Shoes", color:"1 Colour"},
    { id: 30, name: "Nike SB Force 58",status:"Just In", price: "₹ 5 995.00", image: "/images/shoe22.png" ,product:"Skate Shoes", color:"1 Colour"},
    // Add more products here based on the actual data
  ];

  return (
    <div>
      {/* Header */}
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

      {/* Sidebar and Product List */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-[260px] p-4">
          {/* Categories */}
          <div className="mb-8">
            {[
              "Shoes",
              "Sports Bras",
              "Tops & T-Shirts",
              "Hoodies & Sweatshirts",
              "Jackets",
              "Trousers & Tights",
              "Shorts",
              "Tracksuits",
              "Jumpsuits & Rompers",
              "Skirts & Dresses",
              "Socks",
              "Accessories & Equipment",
            ].map((category, index) => (
              <p key={index} className="font-semibold mb-2">
                {category}
              </p>
            ))}
          </div>

          {/* Gender Filter */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Gender</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600 h-4 w-4"
                />
                <span className="ml-2 text-gray-700">Men</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600 h-4 w-4"
                />
                <span className="ml-2 text-gray-700">Women</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600 h-4 w-4"
                />
                <span className="ml-2 text-gray-700">Unisex</span>
              </label>
            </div>
          </div>

          {/* Kids Filter */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Kids</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600 h-4 w-4"
                />
                <span className="ml-2 text-gray-700">Boys</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600 h-4 w-4"
                />
                <span className="ml-2 text-gray-700">Girls</span>
              </label>
            </div>
          </div>

          {/* Price Filter */}
          <div>
            <h3 className="font-semibold mb-2">Shop By Price</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600 h-4 w-4"
                />
                <span className="ml-2 text-gray-700">Under ₹ 2,500.00</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600 h-4 w-4"
                />
                <span className="ml-2 text-gray-700">₹ 2,501.00 - ₹</span>
              </label>
            </div>
          </div>
        </div>

        {/* Product List */}
        <div className="w-full max-w-[1440px] mx-auto p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {products.map((product) => (
              <div key={product.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md">
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[200px] object-cover"
                />
                {/* Product Details */}
                <div className="p-4">
                  <p className="text-[#9E3500] text-xs mt-1">{product.status}</p>
                  <h3 className="font-semibold text-black  text-sm truncate">{product.name}</h3>
                  <p className="text-gray-600 text-xs mt-1">{product.product}</p>
                  <p className="text-gray-600 text-xs mt-1">{product.color}</p><br></br>
                  <p className="text-black text-xs mt-1">MRP:{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[1092px] h-[259px] ml-[240px] border-t-[1px] border-[#E5E5E5] "><br></br><br></br>
      <div className="w-full p-4">
  <h2 className="text-lg font-semibold mb-4">Related Categories</h2>
  <div className="flex flex-wrap gap-2">
    <button className="border rounded-full px-4 py-1 text-gray-600 hover:bg-gray-100">
      Best Selling Products
    </button>
    <button className="border rounded-full px-4 py-1 text-gray-600 hover:bg-gray-100">
      Best Shoes
    </button>
    <button className="border rounded-full px-4 py-1 text-gray-600 hover:bg-gray-100">
      New Basketball Shoes
    </button>
    <button className="border rounded-full px-4 py-1 text-gray-600 hover:bg-gray-100">
      New Football Shoes
    </button>
    <button className="border rounded-full px-4 py-1 text-gray-600 hover:bg-gray-100">
      New Men's Shoes
    </button>
    <button className="border rounded-full px-4 py-1 text-gray-600 hover:bg-gray-100">
      New Running Shoes
    </button>
    <button className="border rounded-full px-4 py-1 text-gray-600 hover:bg-gray-100">
      Best Men's Shoes
    </button>
    <button className="border rounded-full px-4 py-1 text-gray-600 hover:bg-gray-100">
      New Jordan Shoes
    </button>
    <button className="border rounded-full px-4 py-1 text-gray-600 hover:bg-gray-100">
      Best Women's Shoes
    </button>
    <button className="border rounded-full px-4 py-1 text-gray-600 hover:bg-gray-100">
      Best Training & Gym
    </button>
  </div>
</div>

      </div>
    </div>
  );
}
