// app/components/TopHeader.jsx
export default function Belowheader() {
    return (
      <div className="h-[44px] w-full max-w-[1349px] mx-auto mt-[10px] bg-gray-100 px-4">
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-sm text-black text-center">Hello Nike App</p>
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-xs text-black">
            <span className="text-center">Download the app to access everything Nike.</span>
            <a href="#" className="underline hover:text-gray-700 text-black">
              Get Your Great
            </a>
          </div>
        </div>
      </div>
    )
  }
