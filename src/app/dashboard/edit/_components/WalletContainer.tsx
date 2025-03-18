import { useConnectWallet, useWallets } from "@privy-io/react-auth";
import React from "react";
import WalletCard from "./WalletCard";
import { WalletMinimal } from "lucide-react";

const WalletContainer = () => {
  const wallet = useWallets();
  const connect = useConnectWallet();
  console.log("Wallet connection", connect);
  return (
    <div className="h-fit">
      <p className="text-white mb-3 text-lg font-medium">Connected Wallets</p>
      <button
        className="px-6 py-3 my-3 flex items-center gap-2 justify-center rounded-lg ml-auto bg-white text-black"
        onClick={connect.connectWallet}
      >
        Connect Wallet <WalletMinimal size={17} />
      </button>
      <div className="flex flex-col gap-3">
        {wallet.wallets.length > 0 &&
          wallet.wallets.map((wal, index) => (
            <div key={index}>
              <WalletCard {...wal} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default WalletContainer;
