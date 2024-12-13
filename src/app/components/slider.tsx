"use client";
import { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

export default function PictureSlider() {
  // Ref for the slider container
  const sliderRef = useRef(null);

  // Handle Next button click
  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  // Handle Back button click
  const handleBack = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full">
      <div className="relative flex items-center">
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="absolute left-2 z-10 w-10 h-10 bg-white text-black border border-gray-300 rounded-full flex items-center justify-center shadow-md hover:bg-gray-100"
        >
          <IoIosArrowBack />
        </button>

        {/* Slider Container */}
        <div
          ref={sliderRef}
          className="w-full flex overflow-x-scroll gap-4 scroll-smooth scrollbar-hide"
        >
          {/* Images */}
          {Array.from({ length: 7 }).map((_, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[300px] h-[200px] relative rounded-lg overflow-hidden"
            >
              <Image
                src={`/images/shoe${index + 1}.png`} // Update with your images
                alt={`Shoe ${index + 1}`}
                layout="fill"
                className="object-cover"
              />

        <div className="bg-white p-4 rounded-md shadow-md">
                 <h2 className="text-xl font-bold mb-2">Nike Air Max Pulse</h2>
                <p className="text-gray-500">Women's Shoes</p>
                <p className="text-lg font-bold mt-4">₹ 13 995</p>
        </div>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-2 z-10 w-10 h-10 bg-white text-black border border-gray-300 rounded-full flex items-center justify-center shadow-md hover:bg-gray-100"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}
