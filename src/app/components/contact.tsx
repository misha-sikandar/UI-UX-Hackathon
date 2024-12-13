import { PhoneIcon, ChatBubbleOvalLeftIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function ContactUs() {
  return (
    <div className="p-8 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold text-center mb-8 text-gray-900">CONTACT US</h2>
      
      {/* Phone Section */}
      <div className="mb-6 flex flex-col items-center">
        <PhoneIcon className="h-8 w-8 text-black mb-4" />
        <div className="text-center">
          <p className="font-semibold text-lg text-gray-900">000 800 919 0566</p>
          <p className="text-sm text-gray-600">
            Products & Orders: 24 hours a day, 7 days a week
            <br />
            Company Info & Enquiries: 07:30 - 16:30, Monday - Friday
          </p>
        </div>
      </div>

      {/* Chat Section */}
      <div className="mb-6 flex flex-col items-center">
        <ChatBubbleOvalLeftIcon className="h-8 w-8 text-black mb-4" />
        <div className="text-center">
          <p className="font-semibold text-lg text-gray-900">24 hours a day</p>
          <p className="text-sm text-gray-600">7 days a week</p>
        </div>
      </div>

      {/* Email Section */}
      <div className="mb-6 flex flex-col items-center">
        <EnvelopeIcon className="h-8 w-8 text-black mb-4" />
        <div className="text-center">
          <p className="font-semibold text-lg text-gray-900">We will reply within</p>
          <p className="text-sm text-gray-600">five business days</p>
        </div>
      </div>

      {/* Store Locator Section */}
      <div className="mb-6 flex flex-col items-center">
        <MapPinIcon className="h-8 w-8 text-black mb-4" />
        <div className="text-center">
          <p className="font-semibold text-lg text-gray-900">STORE LOCATOR</p>
          <p className="text-sm text-gray-600">Find Nike retail stores near you</p>
        </div>
      </div>
    </div>
  )
}
