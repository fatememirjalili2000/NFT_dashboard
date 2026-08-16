import { useState } from 'react';
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import MainDashboard from "./components/MainDashboard";
import NftMarketplace from "./components/NftMarketplace";
import SignIn from "./components/SignIn";  
import { MdMenu } from "react-icons/md";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState('dashboard'); 

  if (currentTab === 'signin') {
    return <SignIn setCurrentTab={setCurrentTab} />;
  }

  return (
    <div className="flex min-h-screen bg-[#F4F7FE] overflow-x-hidden">
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />

      <main className="flex-1 lg:ml-64 p-3 sm:p-6 space-y-6 w-full min-w-0">
        <div className="flex items-center gap-2 w-full min-w-0">
          <button 
            className="lg:hidden p-2.5 bg-white rounded-xl shadow-sm text-navy-700 text-2xl flex-shrink-0"
            onClick={() => setSidebarOpen(true)}
          >
            <MdMenu />
          </button>
          <div className="flex-1 min-w-0">
            <Navbar currentTab={currentTab} />
          </div>
        </div>

        {currentTab === 'dashboard' && <MainDashboard />}
        {currentTab === 'nft' && <NftMarketplace />}
        {currentTab !== 'dashboard' && currentTab !== 'nft' && currentTab !== 'signin' && (
          <div className="bg-white rounded-[20px] p-10 text-center text-navy-500 font-bold">
not implemented yet          </div>
        )}
      </main>
    </div>
  );
}