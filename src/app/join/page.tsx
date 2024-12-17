// app/login/page.jsx
import { SiNike } from "react-icons/si";
export default function Login() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-md rounded-lg w-full max-w-md p-8">
        {/* Logo Section */}
        <div className="mb-8 text-center">
  <div className="flex justify-center items-center">
    <SiNike className="w-[100px] h-[100px]" />
  </div>
  <h2 className="text-xl font-semibold tracking-tight text-gray-800 mt-4">
    BECOME A NIKE MEMBER
  </h2>
</div>


        {/* Intro Text */}
        <div className="text-sm leading-6 text-gray-600 text-center mb-8">
          <p>
            Create your Nike Member profile and get first access to the very best of Nike products, inspiration, and community.
          </p>
        </div>

        {/* Registration Form */}
        <form className="space-y-4">
          {/* Email Input */}
          <input
            type="email"
            placeholder="Email address"
            className="w-full h-[40px] px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />

          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            className="w-full h-[40px] px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />

          {/* Confirm Email */}
          <input
            type="email"
            placeholder="Confirm Email Address"
            className="w-full h-[40px] px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />

          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="h-[40px] px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="h-[40px] px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Date of Birth */}
          <input
            type="date"
            className="w-full h-[40px] px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
          <p className="text-xs text-gray-500 text-center">
            Get a Nike Member Reward every year on your birthday.
          </p>

          {/* Country Select */}
          <select
            className="w-full h-[40px] px-4 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-black"
            defaultValue=""
          >
            <option value="" disabled>Select Country</option>
            <option value="india">India</option>
            <option value="usa">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="canada">Canada</option>
            <option value="australia">Australia</option>
          </select>

          {/* Gender Fields */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Male"
              className="h-[40px] px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="text"
              placeholder="Female"
              className="h-[40px] px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Email Opt-in */}
          <div className="flex items-start gap-2 mt-2">
            <input
              type="checkbox"
              className="mt-1 rounded border-gray-300 focus:ring-black"
            />
            <span className="text-sm text-gray-600 leading-tight">
              Sign up for emails to get updates from Nike on products, offers, and your Member benefits.
            </span>
          </div>

          {/* Terms and Conditions */}
          <p className="text-xs text-gray-600 mt-4 leading-tight">
            By creating an account, you agree to Nikes{' '}
            <a href="#" className="underline hover:text-black">Privacy Policy</a>{' '}
            and{' '}
            <a href="#" className="underline hover:text-black">Terms of Use</a>.
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white h-[40px] rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            JOIN US
          </button>

          {/* Already a Member */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Already a Member?{' '}
            <a href="#" className="underline hover:text-black">Sign In</a>
          </p>
        </form>
      </div>
    </div>
  );
}
