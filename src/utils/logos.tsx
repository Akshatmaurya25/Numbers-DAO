import { Bitcoin, HardHat } from "lucide-react";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

 export const logos = {
  figma : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmedium.com%2F%40aspynlim%2Ffigma-tutorial-by-figma-4-prototyping-collaboration-c30f1bfd21a4&psig=AOvVaw1bINM3RbmVtqkWkO-5HwpH&ust=1740744154431000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNiWzrnn44sDFQAAAAAdAAAAABAK",
  metamask : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png",
  phantom : "https://iq.wiki/_next/image?url=https://ipfs.everipedia.org/ipfs/Qmacpgp47AVAKPh1Q8LvEoXLM9ZNsBKqc8nYvbfUHR6K8x&w=1200&q=95",
  javascript : "https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200",
  Bitcoin : "https://m.media-amazon.com/images/I/61FY0hmsTvL._AC_UF1000,1000_QL80_.jpg",
  ethereum : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/1200px-Ethereum_logo_2014.svg.png",
  solana : "https://www.chainalysis.com/wp-content/uploads/2022/08/shutterstock-2176242673-scaled-1-1500x970.jpg",
    react : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    nextjs : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1200px-Nextjs-logo.svg.png",
    tailwindcss : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png",
    typescript : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
    solidity : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Solidity_logo.svg/1200px-Solidity_logo.svg.png",
    rust : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/1200px-Rust_programming_language_black_logo.svg.png",
    go : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/1200px-Go_Logo_Blue.svg.png",
    python : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
    nodejs : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
    express : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Expressjs.png/1200px-Expressjs.png",
    mongodb : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/1200px-MongoDB_Logo.svg.png",
    postgresql : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png",
    HardHat : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz4i1wWF516fnkizp1WSDG5rnG8GfkQAVoVQ&s",
    github : "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png",
    x : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj5Z6h2su_P2Dpy48AmTVcigVGKB5bsYuMZQ&s",
    instagram : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/640px-Instagram_icon.png",
    whatsapp : "https://static-00.iconduck.com/assets.00/whatsapp-icon-1020x1024-iykox85t.png",
    discord : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8aMugg7LWDXqkWc-9JlApM4MLPXhi-EPDYA&s",
    
    

};

type LogoProps = {
  name: keyof typeof logos;
  size?: number;
};

const Logo: React.FC<LogoProps> = ({ name, size = 50 }) => {
  return (
    <img
      src={logos[name]}
      alt={`${name} logo`}
      width={size}
      height={size}
      className="object-contain"
    />
  );
};


