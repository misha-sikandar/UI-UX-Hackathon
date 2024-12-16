import Image from "next/image";

export default function Checkout() {
    return (
      <div className="flex flex-col md:flex-row w-full max-w-[880px] mx-auto p-4">
        {/* Left Section */}
        <div className="flex flex-col w-full md:w-1/2 mt-10">
          <h3 className="text-lg font-medium leading-6 font-inter">
            How would you like to get your order?
          </h3>
          <div className="mt-4">
            <p className="text-sm leading-6 text-gray-500">
              Customs regulation for India requires a copy of the recipient's KYC.
              The address on the KYC needs to match the shipping address. Our
              courier will contact you via SMS/email to obtain a copy of your KYC.
              The KYC will be stored securely and used solely for the purpose of
              clearing customs (including sharing it with customs officials) for
              all orders and returns. If your KYC does not match your shipping
              address, please click the link for more information.{" "}
              <a href="#" className="text-gray-500 underline">
                Learn More
              </a>
            </p>
          </div>
          <button className="w-full max-w-[440px] h-[60px] rounded-lg border-2 border-black mt-6 text-center font-medium text-lg">
            Deliver it
          </button>
          <div className="mt-8 w-full max-w-[440px]">
            <h3 className="text-lg font-medium leading-6 font-inter mb-4">
              Enter your name and address:
            </h3>
            <input
              placeholder="First name"
              className="w-full h-[56px] rounded-md border-2 border-gray-300 px-4 mb-4"
            />
            <input
              placeholder="Last name"
              className="w-full h-[56px] rounded-md border-2 border-gray-300 px-4 mb-4"
            />
            <input
              placeholder="Address Line 1"
              className="w-full h-[56px] rounded-md border-2 border-gray-300 px-4 mb-4"
            />
            <p className="text-xs text-gray-500 mb-2">
              We do not ship to P.O. boxes
            </p>
            <input
              placeholder="Address Line 2"
              className="w-full h-[56px] rounded-md border-2 border-gray-300 px-4 mb-4"
            />
            <input
              placeholder="Address Line 3"
              className="w-full h-[56px] rounded-md border-2 border-gray-300 px-4 mb-4"
            />
            <div className="max-w-[440px] mx-auto px-4 py-6">
      {/* Address Section */}
      <div className="space-y-4 mb-6">
        <div className="grid grid-cols-2 gap-4">
          <input
            placeholder="Postal Code"
            className="w-full h-[48px] rounded-md border border-gray-300 px-3 text-sm"
          />
          <input
            placeholder="Locality"
            className="w-full h-[48px] rounded-md border border-gray-300 px-3 text-sm"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <input
            placeholder="State/Territory"
            className="w-full h-[48px] rounded-md border border-gray-300 px-3 text-sm"
          />
          <input
            placeholder="India"
            className="w-full h-[48px] rounded-md border border-gray-300 px-3 text-sm"
          />
        </div>
        <label className="inline-flex items-center gap-2">
          <input type="checkbox" className="rounded text-blue-500" />
          <span className="text-sm text-gray-600">Make this address my profile</span>
        </label>
      </div>

      {/* Contact Information */}
      <div className="space-y-4 mb-6">
        <h3 className="font-medium text-lg text-gray-700">
          What’s your contact information?
        </h3>
        <input
          placeholder="Email"
          className="w-full h-[48px] rounded-md border border-gray-300 px-3 text-sm"
        /><p className="text-xs text-gray-500 mb-2">
        A confirmation email will be sent after checkout.
      </p>
        <input
          placeholder="Phone Number"
          className="w-full h-[48px] rounded-md border border-gray-300 px-3 text-sm"
        /><p className="text-xs text-gray-500 mb-2">
        A carrier might contact you to confirm delivery.
      </p>
      </div>

      {/* PAN Section */}
      <div className="space-y-4 mb-6">
        <h3 className="font-medium text-lg text-gray-700">What’s your PAN?</h3>
        <input
          placeholder="PAN"
          className="w-full h-[48px] rounded-md border border-gray-300 px-3 text-sm"
        /><p className="text-xs text-gray-500 mb-2">
        Enter your PAN to enable payment with UPI, Net Banking or local card methods
      </p>
      <label className="inline-flex items-start gap-2">
          <input type="checkbox" className="rounded text-blue-500 mt-1" />
          <span className="text-sm text-gray-600">
          Save PAN details to Nike Profile
          </span>
        </label>
        <label className="inline-flex items-start gap-2">
          <input type="checkbox" className="rounded text-blue-500 mt-1" />
          <span className="text-sm text-gray-600">
            I have read and consent to the disclosure concerning my information,
            as outlined in the{" "}
            <a href="#" className="text-blue-500 underline">
              Privacy Policy
            </a>
          </span>
        </label>
      </div>

      {/* Continue Button */}
      <button className="w-full h-[48px] rounded-md bg-gray-300 text-gray-700 font-medium">
        Continue
      </button>

      {/* Section Links */}
      <div className="mt-8 space-y-2 text-gray-600">
        <p>Delivery</p>
        <p>Shipping</p>
        <p>Billing</p>
        <p>Payment</p>
      </div>
    </div>
          </div>
        </div>
  
        {/* Right Section */}
        <div className="hidden md:block w-full md:w-1/3 mt-10 md:mt-0">
        <div className="max-w-md mx-auto p-4  bg-white">
      {/* Order Summary Header */}
      <h2 className="text-lg font-semibold mb-2">Order Summary</h2>

      {/* Subtotal and Delivery */}
      <div className="space-y-1 mb-4 text-gray-700">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="font-medium">₹ 20,890.00</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery/Shipping</span>
          <span className="font-medium">Free</span>
        </div>
        <hr />
        <div className="flex justify-between text-lg font-semibold">
          <span>Total</span>
          <span>₹ 20,890.00</span>
        </div>
        <p className="text-xs text-gray-500">
          (The total reflects the price of your order, including all duties and taxes)
        </p>
      </div>

      {/* Delivery Timeline */}
      <div className="text-gray-800 text-sm font-medium mb-4">
        Arrives <span className="font-semibold">Mon, 27 Mar - Wed, 12 Apr</span>
      </div>

      {/* Product 1 */}
      <div className="flex items-center gap-4 mb-6">
        <Image
          src="/images/men20.jpeg"
          alt="Nike Dri-FIT ADV TechKnit Top"
          width={80}
          height={80}
          className="rounded-md"
        />
        <div className="text-sm space-y-1 text-gray-700">
          <h3 className="font-semibold">
            Nike Dri-FIT ADV TechKnit Ultra Men's Short-Sleeve Running Top
          </h3>
          <p>Qty 1</p>
          <p>Size L</p>
          <p className="font-semibold">₹ 3,895.00</p>
        </div>
      </div>

      {/* Product 2 */}
      <div className="flex items-center gap-4">
        <Image
          src="/images/shoe2.png"
          alt="Nike Air Max 97 SE Men's Shoes"
          width={80}
          height={80}
          className="rounded-md"
        />
        <div className="text-sm space-y-1 text-gray-700">
          <h3 className="font-semibold">Nike Air Max 97 SE Men's Shoes</h3>
          <p>Qty 1</p>
          <p>Size UK 8</p>
          <p className="font-semibold">₹ 16,995.00</p>
        </div>
      </div>
    </div>
        </div>
      </div>
    );
  }
  