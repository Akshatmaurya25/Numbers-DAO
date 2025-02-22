import React from "react";
import TrustCards from "../ui/TrustCards";

const trustData = [
  {
    logo: "/trustLogo.png",
    des: "Partnering with Caldera was a no brainer for us. Thanks to their experties, we can focus on developing kinto further and let the experts handel our blockchain infrastructure.",
    name: "cool boy Sumit",
    role: "CEO, Founder",
  },
  {
    logo: "/trustLogo.png",
    des: "Partnering with Caldera was a no brainer for us. Thanks to their experties, we can focus on developing kinto further and let the experts handel our blockchain infrastructure.",
    name: "cool boy Sumit",
    role: "CEO, Founder",
  },{
    logo: "/trustLogo.png",
    des: "Partnering with Caldera was a no brainer for us. Thanks to their experties, we can focus on developing kinto further and let the experts handel our blockchain infrastructure.",
    name: "cool boy Sumit",
    role: "CEO, Founder",
  },{
    logo: "/trustLogo.png",
    des: "Partnering with Caldera was a no brainer for us. Thanks to their experties, we can focus on developing kinto further and let the experts handel our blockchain infrastructure.",
    name: "cool boy Sumit",
    role: "CEO, Founder",
  },{
    logo: "/trustLogo.png",
    des: "Partnering with Caldera was a no brainer for us. Thanks to their experties, we can focus on developing kinto further and let the experts handel our blockchain infrastructure.",
    name: "cool boy Sumit",
    role: "CEO, Founder",
  },{
    logo: "/trustLogo.png",
    des: "Partnering with Caldera was a no brainer for us. Thanks to their experties, we can focus on developing kinto further and let the experts handel our blockchain infrastructure.",
    name: "cool boy Sumit",
    role: "CEO, Founder",
  },{
    logo: "/trustLogo.png",
    des: "Partnering with Caldera was a no brainer for us. Thanks to their experties, we can focus on developing kinto further and let the experts handel our blockchain infrastructure.",
    name: "cool boy Sumit",
    role: "CEO, Founder",
  },{
    logo: "/trustLogo.png",
    des: "Partnering with Caldera was a no brainer for us. Thanks to their experties, we can focus on developing kinto further and let the experts handel our blockchain infrastructure.",
    name: "cool boy Sumit",
    role: "CEO, Founder",
  },
];

const Trust = () => {
  return (
    <div className="bg-black relative w-full overflow-hidden p-20">
      <div className="h-full w-full absolute bg-[linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_25%,rgba(0,0,0,0)_50%,rgba(0,0,0,0)_75%,rgba(0,0,0,1)_100%)] top-0 left-0 z-10"></div>
      <h1 className="text-center font-medium">Trusted by the community</h1>
      <p className="text-center text-zinc-600 mb-10 font-medium">
        We're pround to work with and empower dozens of industry-teams
      </p>
      <div className="flex gap-5 animate-marquee">
        {[...trustData, ...trustData].map((item, index) => (
          <div key={index} className="flex-shrink-0 w-[300px] mx-4">
            <TrustCards {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trust;
