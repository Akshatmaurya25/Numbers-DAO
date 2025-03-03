import React from "react";
import TrustCards from "../ui/TrustCards";

const trustData1 = [
  { logo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330", des: "Numbers DAO's support has been phenomenal. Their expertise allows us to scale effortlessly while focusing on core development.", name: "Alice Johnson", role: "CTO, TechWave" },
  { logo: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg", des: "We've saved countless hours of development by leveraging Numbers DAO's infrastructure. A truly game-changing partnership.", name: "David Lee", role: "Founder, BlockGen" },
  { logo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e", des: "Partnering with Numbers DAO gave us the confidence to scale globally. Their team understands blockchain like no other.", name: "Sophia Martinez", role: "CEO, ChainBridge" },
];

const trustData2 = [
  { logo: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg", des: "Numbers DAO made blockchain infrastructure easy for us. We no longer worry about scaling issues!", name: "John Doe", role: "CEO, BlockSprint" },
  { logo: "https://images.unsplash.com/photo-1496346651079-6ca5cb67f42f", des: "Their expertise in handling complex blockchain networks has been invaluable to our team.", name: "Rachel Green", role: "Lead Blockchain Engineer, OmniChain" },
  { logo: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg", des: "Thanks to Numbers DAO, we can focus on innovation rather than infrastructure headaches.", name: "James Anderson", role: "Founder, Web3Solutions" },
];

const Trust = () => {
  return (
    <div className="bg-black relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden p-20">
      <div className="z-20 text-center w-full relative">
        <div className="absolute z-50 top-0 left-0 w-full h-full bg-[linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_15%,rgba(0,0,0,0)_50%,rgba(0,0,0,0)_85%,rgba(0,0,0,1)_100%)]"></div>
        <h2 className="text-2xl mt-10 pb-6 md:text-7xl lg:text-[50px] leading-tight lg:leading-[58px] font-semibold bg-gradient-to-r from-white to-white/90 text-transparent bg-clip-text">
          Trusted by the community
        </h2>
        <p className="mb-10 font-medium text-white">We're proud to work with and empower dozens of industry-teams</p>
        <div className="flex flex-col gap-8">
          <div className="relative w-full max-w-[1536px] h-[250px] overflow-hidden">
            {[...trustData1, ...trustData1].map((item, index) => (
              <div key={index} className="absolute w-[300px] mx-2" style={{ left: "max(calc(300px * 6), 100%)", animation: "scrollLeft 30s linear infinite", animationDelay: `${(30 / 6) * (6 - (index % 6)) * -1}s` }}>
                <TrustCards {...item} />
              </div>
            ))}
          </div>
          <div className="relative w-full max-w-[1536px] h-[250px] overflow-hidden">
            {[...trustData2, ...trustData2].map((item, index) => (
              <div key={index} className="absolute w-[300px] mx-2" style={{ right: "max(calc(300px * 6), calc(100% + 300px))", animation: "scrollRight 30s linear infinite", animationDelay: `${(30 / 6) * (6 - (index % 6)) * -1}s` }}>
                <TrustCards {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>
        {`
          @keyframes scrollLeft {
            to { left: -300px; }
          }
          @keyframes scrollRight {
            to { right: -300px; }
          }
        `}
      </style>
    </div>
  );
};

export default Trust;
