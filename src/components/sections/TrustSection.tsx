import React from "react";
import TrustCards from "../ui/TrustCards";

const trustData1 = [
  {
    logo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    des: "Numbers DAO's support has been phenomenal. Their expertise allows us to scale effortlessly while focusing on core development.",
    name: "Alice Johnson",
    role: "CTO, TechWave",
  },
  {
    logo: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    des: "We've saved countless hours of development by leveraging Numbers DAO's infrastructure. A truly game-changing partnership.",
    name: "David Lee",
    role: "Founder, BlockGen",
  },
  {
    logo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    des: "Partnering with Numbers DAO gave us the confidence to scale globally. Their team understands blockchain like no other.",
    name: "Sophia Martinez",
    role: "CEO, ChainBridge",
  },
  {
    logo: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    des: "Security and efficiency were our top concerns, and Numbers DAO delivered beyond our expectations.",
    name: "Ethan Williams",
    role: "Lead Developer, Cryptowise",
  },
  {
    logo: "https://images.unsplash.com/photo-1525130413817-d45c1d127c42",
    des: "From seamless integration to 24/7 support, Numbers DAO has been an essential part of our success.",
    name: "Emma Brown",
    role: "COO, NexusFi",
  },
  {
    logo: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    des: "We needed a reliable blockchain solution, and Numbers DAO provided just that. Couldn’t have asked for a better team!",
    name: "Michael Carter",
    role: "Product Manager, DeFiStack",
  },
  {
    logo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    des: "Our blockchain infrastructure is more robust than ever, thanks to Numbers DAO's cutting-edge solutions.",
    name: "Olivia Thompson",
    role: "Head of Engineering, MetaChain",
  },
];

const trustData2 = [
  {
    logo: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg",
    des: "Numbers DAO made blockchain infrastructure easy for us. We no longer worry about scaling issues!",
    name: "John Doe",
    role: "CEO, BlockSprint",
  },
  {
    logo: "https://images.unsplash.com/photo-1496346651079-6ca5cb67f42f",
    des: "Their expertise in handling complex blockchain networks has been invaluable to our team.",
    name: "Rachel Green",
    role: "Lead Blockchain Engineer, OmniChain",
  },
  {
    logo: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    des: "Thanks to Numbers DAO, we can focus on innovation rather than infrastructure headaches.",
    name: "James Anderson",
    role: "Founder, Web3Solutions",
  },
  {
    logo: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
    des: "The best blockchain partner we’ve ever had! Their solutions are seamless and highly efficient.",
    name: "Emily Wilson",
    role: "Head of Product, TokenVerse",
  },
  {
    logo: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    des: "Our uptime and performance have improved drastically since working with Numbers DAO.",
    name: "Lucas Adams",
    role: "CEO, Decentralytics",
  },
  {
    logo: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
    des: "We needed scalability and security, and Numbers DAO delivered both flawlessly.",
    name: "Sophia Patel",
    role: "COO, DigitalLedger",
  },
  {
    logo: "https://images.pexels.com/photos/718261/pexels-photo-718261.jpeg",
    des: "Their deep understanding of blockchain ecosystems helped us optimize our platform for maximum efficiency.",
    name: "Daniel Scott",
    role: "Founder, HyperChain Labs",
  },
];


const Trust = () => {
  return (
    <div className="bg-black relative w-full min-h-screen items-center flex flex-col justify-center overflow-hidden p-20">
      <div className="h-full w-full absolute bg-[linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_25%,rgba(0,0,0,0)_50%,rgba(0,0,0,0)_75%,rgba(0,0,0,1)_100%)] top-0 left-0 z-30"></div>
      <div className="z-20">
        {/* <h1 className="text-center font-medium">Trusted by the community</h1> */}
        <h2 className="text-2xl pb-6 text-center md:text-7xl lg:text-[50px] leading-tight lg:leading-[58px] font-semibold bg-gradient-to-r from-white to-white/90 text-transparent bg-clip-text">
          Trusted by the community
        </h2>
        <p className="text-center text-whi mb-10 font-medium">
          We're pround to work with and empower dozens of industry-teams
        </p>
        <div className="flex flex-col gap-8">
          <div className="flex gap-5 animate-marquee">
            {[...trustData1, ...trustData1].map((item, index) => (
              <div
                key={`top-${index}`}
                className="flex-shrink-0 w-[300px] mx-2"
              >
                <TrustCards {...item} />
              </div>
            ))}
          </div>
          <div className="flex gap-5 animate-marquee-reverse hover-animation-pause ">
            {[...trustData2, ...trustData2].map((item, index) => (
              <div
                key={`bottom-${index}`}
                className="flex-shrink-0 w-[300px] mx-2"
              >
                <TrustCards {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trust;
