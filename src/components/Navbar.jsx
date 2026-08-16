import { FiSearch } from "react-icons/fi";
import { IoMdNotificationsOutline, IoMdInformationCircleOutline } from "react-icons/io";

export default function Navbar({ currentTab }) {
  return (
    <header className="sticky top-2 z-40 flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-[20px] bg-white/80 p-3 backdrop-blur-xl border border-gray-100 shadow-sm gap-3">
      <div>
        <p className="text-[10px] sm:text-xs text-navy-500 font-medium">
          Pages / {currentTab === 'dashboard' ? 'Main Dashboard' : 'NFT Marketplace'}
        </p>
        <h2 className="text-xl sm:text-2xl font-bold text-navy-700">
          {currentTab === 'dashboard' ? 'Main Dashboard' : 'NFT Marketplace'}
        </h2>
      </div>

      <div className="flex items-center justify-between w-full sm:w-auto gap-2 sm:gap-3 bg-white p-1.5 rounded-full shadow-sm border border-gray-100">
        <div className="flex items-center gap-2 bg-[#F4F7FE] px-3 py-1.5 rounded-full flex-1 sm:flex-none">
          <FiSearch className="text-navy-500 h-4 w-4" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-xs text-navy-700 outline-none w-full sm:w-32 focus:sm:w-48 transition-all"
          />
        </div>

        <div className="flex items-center gap-2 pr-1">
          <IoMdNotificationsOutline className="h-5 w-5 text-navy-500 cursor-pointer hover:text-brand-500" />
          <IoMdInformationCircleOutline className="h-5 w-5 text-navy-500 cursor-pointer hover:text-brand-500" />
          <div className="w-8 h-8 rounded-full bg-brand-500 text-white flex items-center justify-center text-xs font-bold cursor-pointer">
            AP
          </div>
        </div>
      </div>
    </header>
  );
}