import { getContractDeployments } from "@/utils/ContractDeployments";
import { Copy, LogOut } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Wallet {
  address: string;
  chainId: string;
  walletClientType: string;
  linked: boolean;
  meta: {
    name: string;
    icon?: string;
  };
  disconnect: () => void;
  fund: (amount: number) => Promise<void>;
  switchChain: () => void;
}

interface WalletCardProps {
  wallet: Wallet;
}

export default function WalletCard(props: any) {
  const [deployments, setDeployments] = useState<{
    [key: string]: number | string;
  }>({
    arbitrum: "Waiting",
    base: "Waiting",
    ethereum: "Waiting",
    optimism: "Waiting",
  });
  console.log("wallet props", props);
  useEffect(() => {
    const fetchContracts = async () => {
      if (!wallet.address) return;
      try {
        const contracts = await getContractDeployments(wallet.address);
        console.log("Contracts received:", contracts);
        setDeployments(contracts || {}); // Ensure it updates
      } catch (error) {
        console.error("Error fetching deployments:", error);
      }
    };

    fetchContracts();
  }, [props.address]);
  const wallet = props;
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(wallet.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div className="p-4 w-full bg-[#121212] text-white rounded-2xl shadow-lg border border-[#c1c1c1]/20">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {wallet.meta.icon && (
              <Image
                src={wallet.meta.icon.replace(/\n/g, "")}
                alt={wallet.meta.name}
                width={32}
                height={32}
              />
            )}
            <span className="text-lg font-semibold">{wallet.meta.name}</span>
          </div>
          <button
            className="p-2 rounded-full bg-red-500 hover:bg-red-600"
            onClick={() => {
              console.log("disconeting");
              wallet.unlink();
            }}
          >
            <LogOut className="w-5 h-5 text-white" />
          </button>
        </div>

        <div className="bg-[#252525] p-2 rounded-lg flex items-center justify-between">
          <span className="truncate text-sm">{wallet.address}</span>
          <button className="p-1 rounded " onClick={copyToClipboard}>
            <Copy className="w-4 h-4 text-gray-400" />
          </button>
        </div>
        {copied && <span className="text-green-400 text-xs">Copied!</span>}

        <div className="text-sm text-[#dcdcdc]  flex ">
          <div className="flex-1">
            <p>
              Chain: <span className="text-white">{wallet.chainId}</span>
            </p>
            <p>
              Wallet Type:{" "}
              <span className="text-white capitalize">
                {wallet.walletClientType}
              </span>
            </p>
            <p>
              Linked:{" "}
              <span className="text-white">{wallet.linked ? "Yes" : "No"}</span>
            </p>
          </div>
          <div className="flex-1 flex gap-3 flex-col">
            <h4 className="text-lg">Contracts Deployed</h4>
            <div className="flex gap-3">
              <Image
                height={18}
                width={18}
                src={"/Chainlogos/ethereumlogo.png"}
                alt="eth png"
              />
              {deployments.ethereum}
            </div>
            <div className="flex gap-3">
              <Image
                height={18}
                width={18}
                src={"/Chainlogos/arbitrumlogo.png"}
                alt="eth png"
              />
              {deployments.arbitrum}
            </div>
            <div className="flex gap-3">
              <Image
                height={18}
                width={18}
                src={"/Chainlogos/base.png"}
                alt="eth png"
              />
              {deployments.base}
            </div>
            <div className="flex gap-3">
              <Image
                height={18}
                width={18}
                src={"/Chainlogos/optimism.png"}
                alt="eth png"
              />
              {deployments.optimism}
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            className="w-full p-2 bg-white hover:bg-white/90 text-black rounded-lg"
            onClick={() => wallet.fund(0.1)}
          >
            Fund Wallet
          </button>
          <button
            className="w-full p-2 border border-white text-gray-300 rounded-lg "
            onClick={async () => {
              let x = await wallet.switchChain();
              console.log(x);
            }}
          >
            Switch Chain
          </button>
        </div>
      </div>
    </div>
  );
}
