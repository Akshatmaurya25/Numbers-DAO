import { usePrivy } from "@privy-io/react-auth";
import { useWallets } from "@privy-io/react-auth";

const SignTransaction = () => {
  const { user, authenticated, ready } = usePrivy();
  // const { wallets } = useWallets();
  //   // Get the first connected wallet instead of using activeWallet
  //   const connectedWallet = wallets.length > 0 ? wallets[0] : null;
  //   const handleSign = async () => {
  //     if (!authenticated || !connectedWallet) {
  //       console.error("User not authenticated or wallet not available");
  //       return;
  //     }
  //     try {
  //       // Create the message to sign
  //       const message = "This is a message to sign";
  //       // For signing a message
  //       const signature = await connectedWallet.sign(message);
  //       console.log("Signature:", signature);
  //       // For signing a transaction
  //       // const transaction = {
  //       //   to: "0xRecipientAddress",
  //       //   value: "0x0", // in wei
  //       //   data: "0x", // transaction data
  //       // };
  //       // const txHash = await connectedWallet.sendTransaction(transaction);
  //       // console.log("Transaction hash:", txHash);
  //     } catch (error) {
  //       console.error("Error signing transaction:", error);
  //     }
  //   };
  //   return (
  //     <div>
  //       {ready && authenticated && connectedWallet ? (
  //         <button onClick={handleSign}>Sign Transaction</button>
  //       ) : (
  //         <p>Please connect your wallet first</p>
  //       )}
  //     </div>
  //   );
};

const page = () => {
  return <div>Hello</div>;
};
export default page;
