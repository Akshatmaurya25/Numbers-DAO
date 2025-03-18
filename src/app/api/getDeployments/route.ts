import { NextRequest, NextResponse } from "next/server";
import { ethers } from "ethers";

const RPC_URLS: { [key: string]: string } = {
  ethereum: "https://eth.llamarpc.com",
  base: "https://base.llamarpc.com",
  arbitrum: "https://arbitrum.llamarpc.com",
  optimism: "https://optimism.llamarpc.com",
};

export async function POST(req: NextRequest) {
  try {
    const { address } = await req.json();
    if (!address) return NextResponse.json({ error: "Missing wallet address" }, { status: 400 });

    const results: { [key: string]: number } = {};

    for (const [chain, rpcUrl] of Object.entries(RPC_URLS)) {
      try {
        const provider = new ethers.JsonRpcProvider(rpcUrl);
        const txCount = await provider.getTransactionCount(address);
        results[chain] = txCount;
      } catch (error) {
        results[chain] = -1; // Error case
      }
    }

    return NextResponse.json(results);
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
