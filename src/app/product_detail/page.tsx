import Image from "next/image";
import { BsCartDash } from "react-icons/bs";

export default function ProductDetail() {
  return (
    <div className="w-full mt-24 px-4">
      <div className="max-w-[1200px] mx-auto flex flex-wrap gap-8">
        {/* Image Section */}
        <div className="w-full md:w-[653px]">
          <Image
            src="/images/shoe8.png"
            width={653}
            height={653}
            alt="Shoe"
            className="w-full h-auto"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-start w-full md:w-[376px]">
          <h1 className="font-poppins font-medium text-[28px] md:text-[36px] lg:text-[48px] leading-tight">
            Nike Air Force 1 PLT.AF.ORM
          </h1>
          <br />
          <div className="w-full">
            <p className="font-poppins font-normal text-[14px] md:text-[15px] leading-[24px] md:leading-[28px]">
              Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.
            </p>

            {/* Price Section */}
            <div className="mt-8">
              <h3 className="font-poppins font-medium text-[24px] md:text-[36px]">
                ₹ 8,695.00
              </h3>
            </div>

            {/* Button Section */}
            <div className="mt-4">
              <button className="bg-black text-white px-6 py-2 rounded-[30px] hover:bg-gray-800 flex items-center space-x-2">
                <BsCartDash />
                <span className="font-poppins font-medium text-[15px] leading-[24px]">
                  Add To Cart
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
