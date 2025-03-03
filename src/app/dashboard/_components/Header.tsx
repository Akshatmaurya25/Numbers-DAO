import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";

const Header = (props: any) => {
  const displayAddress = props.walletAddress
    ? `${props.walletAddress.slice(0, 4)}...${props.walletAddress.slice(-4)}`
    : "Logout";
  return (
    <div className="max-w-7xl  bg-black  text-white mx-auto py-4 flex justify-between items-center">
      <h2>Numbers DAO</h2>
      <div>
        <Switch />
      </div>
      <div className="flex items-center gap-4 justify-center px-4 py-1.5 rounded hover:bg-[#181717] cursor-pointer duration-150 transition-all">
        <div>
          <span>{displayAddress}</span>
        </div>

        <Avatar>
          <AvatarImage src={props.source || ` https://github.com/shadcn.png`} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Header;
