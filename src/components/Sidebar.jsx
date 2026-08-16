import { MdDashboard, MdShoppingCart, MdLogout, MdClose } from "react-icons/md";

export default function Sidebar({ isOpen, onClose, currentTab, setCurrentTab }) {
  const getActiveClass = (tabName) => {
    return currentTab === tabName 
      ? "text-brand-500 font-bold border-r-4 border-brand-500" 
      : "text-gray-500 font-medium hover:text-gray-700";
  };

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-40 lg:hidden transition-opacity"
          onClick={onClose}
        ></div>
      )}

      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        
        <div className="flex items-center justify-between h-20 px-6 border-b border-gray-100">
          <div className="text-[26px] font-bold text-navy-700 uppercase">
            Horizon <span className="font-medium text-gray-500">Free</span>
          </div>
          <button className="lg:hidden text-2xl text-gray-600" onClick={onClose}>
            <MdClose />
          </button>
        </div>

        <div className="flex flex-col gap-4 mt-8 px-4">
          <button 
            onClick={() => { setCurrentTab('dashboard'); onClose(); }}
            className={`flex items-center gap-3 px-3 py-2 text-lg ${getActiveClass('dashboard')}`}
          >
            <MdDashboard className="text-xl" />
            Main Dashboard
          </button>

          <button 
            onClick={() => { setCurrentTab('nft'); onClose(); }}
            className={`flex items-center gap-3 px-3 py-2 text-lg ${getActiveClass('nft')}`}
          >
            <MdShoppingCart className="text-xl" />
            NFT Marketplace
          </button>
        </div>

        <div className="absolute bottom-8 w-full px-8">
          <button 
            onClick={() => setCurrentTab('signin')}
            className="flex items-center justify-center w-full gap-2 bg-red-50 text-red-500 font-bold py-3 rounded-xl hover:bg-red-100 transition-all"
          >
            <MdLogout className="text-xl" />
            Logout / Sign In
          </button>
        </div>
      </div>
    </>
  );
}