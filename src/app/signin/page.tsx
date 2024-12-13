import Image from 'next/image';
// app/login/page.jsx
export default function Login() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="flex flex-col items-center bg-white w-full max-w-sm rounded-lg shadow-lg p-8">
        {/* Logo Section */}
        <div className="mb-6 text-center">
          <Image
            src="/images/images.png" 
            alt="Nike Logo" 
            width={180} // Adjusted for better proportions
            height={50}
            className="mb-4"
          />
          <h2 className="text-lg font-semibold text-gray-800">
            YOUR ACCOUNT FOR EVERYTHING NIKE
          </h2>
        </div>

        {/* Login Form */}
        <form className="w-full space-y-4">
          {/* Email Input */}
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
          
          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />

          {/* Remember Me and Forgot Password Row */}
          <div className="flex justify-between items-center text-sm text-gray-600">
            <label className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                className="rounded border-gray-300 text-black focus:ring-black" 
              />
              <span>Keep me signed in</span>
            </label>
            <a href="#" className="text-black underline hover:text-gray-800">
              Forgotten your password?
            </a>
          </div>

          {/* Terms Text */}
          <p className="text-sm text-gray-500">
            By logging in, you agree to Nikes{' '}
            <a href="#" className="underline text-black hover:text-gray-800">Privacy Policy</a> and{' '}
            <a href="#" className="underline text-black hover:text-gray-800">Terms of Use</a>.
          </p>

          {/* Sign In Button */}
          <button 
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-900 transition"
          >
            SIGN IN
          </button>

          {/* Join Us Link */}
          <p className="text-center mt-4 text-sm text-gray-600">
            Not a Member?{' '}
            <a href="#" className="underline text-black hover:text-gray-800 font-medium">
              Join Us
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
