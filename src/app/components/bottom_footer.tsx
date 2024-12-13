// components/BottomNavbar.jsx
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

export default function BottomNavbar() {
  return (
    <div className=" bg-black text-white px-4 md:px-6">
      <div className="max-w-[1372px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center h-auto md:h-[62px] py-4 md:py-0">
          <div className="flex flex-col md:flex-row items-center md:space-x-2 mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <IoLocationOutline className="text-white" />
              <span>India</span>
            </div>
            <div className="mt-2 md:mt-0 md:ml-4 flex items-center space-x-1">
              <AiOutlineCopyrightCircle />
              <span>Nike, Inc. All Rights Reserved</span>
            </div>
          </div>

          <ul className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <li className="cursor-pointer hover:text-gray-300">Guides</li>
            <li className="cursor-pointer hover:text-gray-300">Terms of Sale</li>
            <li className="cursor-pointer hover:text-gray-300">Terms of Use</li>
            <li className="cursor-pointer hover:text-gray-300">Nike Privacy Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
