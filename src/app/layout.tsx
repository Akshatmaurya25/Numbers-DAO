import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PrivyProvider } from "@privy-io/react-auth";
import { config } from "dotenv";
import { User } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
// import { UserProvider } from "@/lib/contexts/useUser";
import { ModalProvider } from "@/context/ModalContext";
import Modal from "@/components/ui/Modal";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";
import { SessionProvider } from "next-auth/react";
import { Wrapper } from "./providerWrapper";
import type { Metadata } from "next";

config();
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata : Metadata  = {
  title: "Numbers DAO",
  description: "DAO that brings Numbers",
  icons: {
    icon: "/favicon.png", // Default favicon
    shortcut: "/favicon.png", // Optional shortcut icon
    apple: "/favicon.png", // Apple Touch Icon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-whi`}
      >
        {/* <SessionProvider>
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
              embeddedWallets: {
                createOnLogin: "users-without-wallets",
              },
            }}
          >
           
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
        
          </PrivyProvider>
        </SessionProvider> */}
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
