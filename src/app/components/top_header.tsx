// app/components/TopHeader.jsx
import Link from 'next/link'
import { SiJordan } from "react-icons/si";
export default function TopHeader() {
  return (
    <header className="w-full h-[36px] bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo on the left */}
        <Link href="/" >
        <SiJordan className="h-[20px] w-[50]" />

</Link>


        {/* Right side links */}
        <nav className="flex items-center space-x-4 text-sm">
          <Link 
            href="/store-locator" 
            className="text-gray-700 hover:text-gray-900"
          >
            Find a Store
          </Link>
          <span className="text-gray-400">|</span>
          <Link 
            href="/contact" 
            className="text-gray-700 hover:text-gray-900"
          >
            Help
          </Link>
          <span className="text-gray-400">|</span>
          <Link 
            href="/join" 
            className="text-gray-700 hover:text-gray-900"
          >
            Join Us
          </Link>
          <span className="text-gray-400">|</span>
          <Link 
            href="/signin" 
            className="text-gray-700 hover:text-gray-900"
          >
            Sign In
          </Link>
        </nav>
      </div>
    </header>
  )
}
