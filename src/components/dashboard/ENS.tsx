import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { useWallets } from "@privy-io/react-auth";

const ENS: React.FC = () => {
  const { wallets } = useWallets();
  const [ensResults, setEnsResults] = useState<
    { address: string; ensName: string | null }[]
  >([]);
  const [error, setError] = useState<string | null>(null);

  const provider = new ethers.JsonRpcProvider(
    `https://mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_ID}`
  );

  useEffect(() => {
    const fetchENSNames = async () => {
      if (!wallets || wallets.length === 0) return;
      setError(null);
      const results = await Promise.all(
        wallets.map(async (wallet) => {
          const address = wallet.address;
          try {
            if (!ethers.isAddress(address)) {
              return { address, ensName: "Invalid Address" };
            }
            const ensName = await provider.lookupAddress(address);
            return { address, ensName: ensName || "No ENS" };
          } catch (err) {
            setError(`Error: ${(err as Error).message}`);
            return { address, ensName: "Error fetching ENS" };
          }
        })
      );
      setEnsResults(results);
    };

    fetchENSNames();
  }, [wallets]);

  return (
    <div>
      <p className="text-white mb-3 text-lg font-medium">User's ENS</p>
      {ensResults.map(({ address, ensName }) => (
        <p key={address}>
          {ensName !== "No ENS" &&
          ensName !== "Invalid Address" &&
          ensName !== "Error fetching ENS" ? (
            <span>{ensName} ✅</span>
          ) : (
            <span>
              {ensName} - {address}
            </span>
          )}
        </p>
      ))}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default ENS;
