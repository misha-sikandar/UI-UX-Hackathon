import { IoIosThumbsUp, IoIosThumbsDown } from "react-icons/io";
import ContactUs from "../components/contact";

export default function Contact() {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-gray-50 py-12">
      {/* Header Section */}
      <div className="w-full max-w-7xl text-center mb-12">
        <h3 className="text-[#111111] font-sans font-bold text-3xl leading-9">
          GET HELP
        </h3>
        <p className="text-gray-600 mt-2">
          Find answers to common questions or contact us for support.
        </p>
      </div>

      {/* Search Input Section */}
      <div className="w-full max-w-md mb-12">
        <input
          type="text"
          placeholder="What can we help you with?"
          className="w-full h-14 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      {/* Main Content Section */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {/* Left Column */}
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold leading-8 mb-4 text-black">
            WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
          </h3>
          <p className="text-gray-700 mb-4">
            We want to make buying your favorite Nike shoes and gear online fast
            and easy. We accept the following payment options:
          </p>
          <ul className="list-disc ml-6 text-gray-700 mb-4">
            <li>Visa, Mastercard, Diners Club, Discover, American Express</li>
            <li>Visa Electron, Maestro</li>
            <li>PayTM or local credit/debit cards (via PAN information)</li>
            <li>Apple Pay</li>
          </ul>
          <p className="text-gray-700 mb-4">
            <a href="#" className="underline font-bold text-black">
              Nike Members
            </a>{" "}
            can store multiple debit or credit cards for faster checkout. If
            you are not already a Member,{" "}
            <a href="#" className="underline font-bold text-black">
              Join us
            </a>{" "}
            today.
          </p>
          <div className="flex gap-4 mt-6">
            <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">
              JOIN US
            </button>
            <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">
              SHOP NIKE
            </button>
          </div>

          {/* FAQs Section */}
          <div className="mt-8">
            <h3 className="text-lg font-bold mb-4">FAQs</h3>
            <div className="mb-6">
              <p className="font-bold mb-1">
                Does my card need international purchases enabled?
              </p>
              <p className="text-gray-700">
                Yes, we recommend asking your bank to enable international
                purchases on your card. Some banks may charge a small
                transaction fee for international orders.
              </p>
            </div>
            <div className="mb-6">
              <p className="font-bold mb-1">
                Can I pay for my order with multiple methods?
              </p>
              <p className="text-gray-700">
                No, payment for Nike orders can not be split between multiple
                payment methods.
              </p>
            </div>
            <div className="mb-6">
              <p className="font-bold mb-1">
                What payment method is accepted for SNKRS orders?
              </p>
              <p className="text-gray-700">
                You can use any accepted credit card to pay for your SNKRS
                order.
              </p>
            </div>
            <div className="mb-6">
              <p className="font-bold mb-1">
                Why do not I see Apple Pay as an option?
              </p>
              <p className="text-gray-700">
                To use Apple Pay, you need a compatible Apple device running the
                latest OS, signed into iCloud, with a supported card in your
                Wallet. Safari is required for Nike.com.
              </p>
            </div>
          </div>

          {/* Feedback Section */}
          <div className="mt-8">
            <p className="text-gray-700 mb-2">Was this answer helpful?</p>
            <div className="flex items-center gap-4 text-xl">
              <button className="flex items-center gap-2 text-gray-700 hover:text-black">
                <IoIosThumbsUp /> 
              </button>
              <button className="flex items-center gap-2 text-gray-700 hover:text-black">
                <IoIosThumbsDown /> 
              </button>
            </div><br></br>
            <div>
  <h3 className="text-gray-500 font-semibold">RELATED</h3>
  <br />
  <a href="#" className="underline font-semibold block text-black hover:text-gray-700">
    WHAT ARE NIKES DELIVERY OPTIONS?
  </a>
  <br />
  <a href="#" className="underline font-semibold block text-black hover:text-gray-700">
    HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
  </a>
</div>

          </div>
        </div>

        {/* Right Column */}
       
          <ContactUs/>
          
          
        
      </div>
    </div>
  );
}
