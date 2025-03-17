

export async function getContractDeployments(walletAddress: string) {
  const response = await fetch("/api/getDeployments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ address: walletAddress }),
  });

  if (!response.ok) throw new Error("Failed to fetch data");
  return await response.json();
}


