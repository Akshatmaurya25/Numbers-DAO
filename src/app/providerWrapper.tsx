"use client";

import { PrivyProvider } from "@privy-io/react-auth";
import { config } from "dotenv";
import { User } from "lucide-react";

import { ModalProvider } from "@/context/ModalContext";
import Modal from "@/components/ui/Modal";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";
import { SessionProvider } from "next-auth/react";

export const Wrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <SessionProvider>
      <PrivyProvider
        appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID ?? ""}
        
        config={{
          // Customize Privy's appearance in your app
          appearance: {
            theme: "light",
            accentColor: "#676FFF",
            logo: "https://res.cloudinary.com/duogkpk5c/image/upload/v1741764384/zipqt3v5m3tqaqx1vg9i.png",
          },
          // Create embedded wallets for users who don't have a wallet
        //   supportedChains: [
        //     { id: 'eip155:1', name: 'Ethereum' },
        //     { id: 'eip155:137', name: 'Polygon' }, 
        //     { id: 'eip155:42161', name: 'Arbitrum' } // Example
        //   ],
      
          embeddedWallets: {
            createOnLogin: "users-without-wallets",
          },
        }}
      >
        {/* <UserProvider> */}
        <>
          <ModalProvider>
            <Modal />
            <>
              {children}
              <Toaster
                position="top-right"
                toastOptions={{
                  // Define default options
                  className: "",
                  duration: 4000,
                  removeDelay: 1000,
                  style: {
                    background: "#363636",
                    color: "#fff",
                  },

                  success: {
                    duration: 3000,
                    iconTheme: {
                      primary: "green",
                      secondary: "black",
                    },
                  },
                }}
              />
            </>
            <Analytics />
          </ModalProvider>
        </>
        {/* </UserProvider> */}
      </PrivyProvider>
    </SessionProvider>
  );
};
