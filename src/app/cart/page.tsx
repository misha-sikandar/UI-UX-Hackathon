import Image from "next/image";

export default function Cart() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Section */}
      <div className="col-span-2">
        {/* Free Delivery Notice */}
        <div className="bg-gray-100 p-4 rounded-lg text-sm">
          <p className="text-gray-700 font-medium">Free Delivery</p>
          <p className="text-gray-500 mt-1">
            Applies to orders of ₹14,000.00 or more.{" "}
            <a href="#" className="text-blue-500 underline">
              View details
            </a>
          </p>
        </div>

        {/* Bag Section */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">Bag</h2>

          {/* Item 1 */}
          <div className="border-b border-gray-200 pb-6 mb-6">
            <div className="flex items-start gap-4">
              <Image
                src="/images/men20.jpeg"
                alt="Product Image"
                width={100}
                height={100}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-gray-800 font-medium">
                  Nike Dri-FIT ADV TechKnit Ultra
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  Men's Short-Sleeve Running Top
                </p>
                <p className="text-gray-500 text-sm">Ashen Slate/Cobalt Bliss</p>
                <p className="text-gray-500 text-sm">Size: L</p>
                <p className="text-gray-500 text-sm">Quantity: 1</p>

                <div className="flex items-center justify-between mt-4">
                  <p className="text-gray-800 font-medium">MRP: ₹ 3,895.00</p>
                  <div className="flex gap-4">
                    <button className="text-gray-500 hover:text-red-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                      >
                        <path d="M3 6h18M8 6v12m8-12v12M5 6h14l-1 14H6L5 6z" />
                      </svg>
                    </button>
                    <button className="text-gray-500 hover:text-pink-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                      >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="border-b border-gray-200 pb-6">
            <div className="flex items-start gap-4">
              <Image
                src="/images/shoe2.png"
                alt="Product Image"
                width={100}
                height={100}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-gray-800 font-medium">Nike Air Max 97 SE</h3>
                <p className="text-gray-500 text-sm mt-1">Men's Shoes</p>
                <p className="text-gray-500 text-sm">
                  Flat Pewter/Light Bone/Black/White
                </p>
                <p className="text-gray-500 text-sm">Size: 8</p>
                <p className="text-gray-500 text-sm">Quantity: 1</p>

                <div className="flex items-center justify-between mt-4">
                  <p className="text-gray-800 font-medium">MRP: ₹ 16,995.00</p>
                  <div className="flex gap-4">
                    <button className="text-gray-500 hover:text-red-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                      >
                        <path d="M3 6h18M8 6v12m8-12v12M5 6h14l-1 14H6L5 6z" />
                      </svg>
                    </button>
                    <button className="text-gray-500 hover:text-pink-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                      >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold text-gray-800 mb-6">Summary</h2>
        <div className="flex justify-between text-gray-600">
          <p>Subtotal</p>
          <p>₹ 20,890.00</p>
        </div>
        <div className="flex justify-between text-gray-600 mt-4">
          <p>Estimated Delivery & Handling</p>
          <p>Free</p>
        </div>
        <div className="flex justify-between text-gray-800 mt-6 font-medium">
          <p>Total</p>
          <p>₹ 20,890.00</p>
        </div>
        <button className="w-full bg-black text-white py-2 mt-8 rounded-full hover:bg-gray-800">
          Member Checkout
        </button>
      </div>
    </div>
  );
}
