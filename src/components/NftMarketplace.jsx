import { useState } from 'react';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import { MdOutlineWatchLater } from 'react-icons/md';

export default function NftMarketplace() {
  const [activeTab, setActiveTab] = useState('Art');
  const [favorites, setFavorites] = useState([false, true, false]);

  const toggleFavorite = (index) => {
    const updated = [...favorites];
    updated[index] = !updated[index];
    setFavorites(updated);
  };

  const nfts = [
    {
      title: "Abstract Colors",
      author: "By Esthera Jackson",
      bid: "0.91 ETH",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "ETH AI Brain",
      author: "By Nick Wilson",
      bid: "0.7 ETH",
      image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "Mesh Gradients",
      author: "By Will Smith",
      bid: "2.91 ETH",
      image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=600&auto=format&fit=crop",
    },
  ];

  const creators = [
    { name: "@maddison_c21", artworks: "9821", rating: 90 },
    { name: "@karl.will02", artworks: "7032", rating: 75 },
    { name: "@andreea.tz", artworks: "5204", rating: 60 },
    { name: "@abraham47y", artworks: "4309", rating: 50 },
    { name: "@simmmple.web", artworks: "3871", rating: 40 },
  ];

  const history = [
    { 
      title: "Colorful Heaven", 
      author: "Mark Benjamin", 
      price: "0.4 ETH", 
      time: "30s ago",
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=200&auto=format&fit=crop"
    },
    { 
      title: "Abstract Colors", 
      author: "Esthera Jackson", 
      price: "2.4 ETH", 
      time: "50m ago",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=200&auto=format&fit=crop"
    },
    { 
      title: "ETH AI Brain", 
      author: "Nick Wilson", 
      price: "0.7 ETH", 
      time: "1h ago",
      image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=200&auto=format&fit=crop"
    },
  ];

  return (
    <div className="mt-3 grid grid-cols-1 xl:grid-cols-3 gap-5 min-w-0">
      
      <div className="xl:col-span-2 space-y-5 min-w-0">
        
        <div className="relative rounded-[20px] bg-gradient-to-r from-[#5a32fa] via-[#402E7A] to-[#111C44] p-6 sm:p-10 text-white overflow-hidden flex flex-col justify-between min-h-[220px]">
          <div className="max-w-md z-10 space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
              Discover, collect, and sell extraordinary NFTs
            </h2>
            <p className="text-xs sm:text-sm text-brand-100 font-medium">
              Enter in this creative world. Discover now the latest NFTs or start creating your own!
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="px-6 py-2.5 bg-white text-navy-700 rounded-xl text-xs font-bold hover:bg-gray-100 transition-all shadow-md">
                Discover now
              </button>
              <button className="flex items-center gap-2 text-xs font-bold text-white hover:underline">
                <MdOutlineWatchLater className="text-lg" /> Watch Video
              </button>
            </div>
          </div>
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-brand-500/30 rounded-full blur-3xl pointer-events-none" />
        </div>

        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h3 className="text-xl font-bold text-navy-700">Trending NFTs</h3>
            
            <div className="flex flex-wrap gap-2 text-xs font-bold text-navy-500">
              {['Art', 'Music', 'Collection', 'Sports'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1.5 rounded-full transition-all ${
                    activeTab === tab ? 'bg-brand-500 text-white shadow-md' : 'hover:text-navy-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* شبکه ۳ تایی کارت‌های NFT */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {nfts.map((nft, index) => (
              <div key={index} className="bg-white rounded-[20px] p-3 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="relative rounded-2xl overflow-hidden h-44 w-full mb-3">
                    <img src={nft.image} alt={nft.title} className="w-full h-full object-cover" />
                    <button 
                      onClick={() => toggleFavorite(index)}
                      className="absolute top-3 right-3 p-2 bg-white rounded-full text-brand-500 shadow-md text-base transition-transform active:scale-90"
                    >
                      {favorites[index] ? <IoHeart className="text-red-500" /> : <IoHeartOutline />}
                    </button>
                  </div>
                  <h4 className="font-bold text-navy-700 text-base">{nft.title}</h4>
                  <p className="text-xs text-navy-500 font-medium">{nft.author}</p>
                </div>

                <div className="flex items-center justify-between mt-4 pt-2 border-t border-gray-50">
                  <div>
                    <p className="text-[10px] text-navy-500 uppercase font-bold">Current Bid</p>
                    <p className="text-sm font-bold text-brand-500">{nft.bid}</p>
                  </div>
                  <button className="px-4 py-2 bg-navy-700 text-white rounded-xl text-xs font-bold hover:bg-navy-800 transition-colors shadow-sm">
                    Place Bid
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className="space-y-5 min-w-0">
        
        <div className="bg-white rounded-[20px] p-5 border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-base font-bold text-navy-700">Top Creators</h3>
            <button className="text-xs font-bold text-brand-500 hover:underline">See all</button>
          </div>

          <div className="space-y-4">
            {creators.map((creator, i) => (
              <div key={i} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-50 flex items-center justify-center font-bold text-brand-500">
                    {creator.name[1].toUpperCase()}
                  </div>
                  <div>
                    <p className="font-bold text-navy-700">{creator.name}</p>
                    <p className="text-[10px] text-navy-500">{creator.artworks} Artworks</p>
                  </div>
                </div>
                <div className="w-16 bg-gray-100 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-brand-500 h-full rounded-full" style={{ width: `${creator.rating}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[20px] p-5 border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-base font-bold text-navy-700">History</h3>
            <button className="text-xs font-bold text-brand-500 hover:underline">See all</button>
          </div>

          <div className="space-y-4">
            {history.map((item, i) => (
              <div key={i} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <img src={item.image} alt={item.title} className="w-10 h-10 rounded-xl object-cover" />
                  <div>
                    <p className="font-bold text-navy-700">{item.title}</p>
                    <p className="text-[10px] text-navy-500">{item.author}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-navy-700">❖ {item.price}</p>
                  <p className="text-[10px] text-navy-500">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}