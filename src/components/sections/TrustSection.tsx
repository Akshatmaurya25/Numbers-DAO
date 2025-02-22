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
    <div className="bg-black w-full overflow-hidden p-20">
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
