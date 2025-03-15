import { XIcon } from "lucide-react";
import React, { ReactElement, useState } from "react";
import { FaMediumM } from "react-icons/fa";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa6";
import { RxTwitterLogo } from "react-icons/rx";
import { SiFarcaster, SiLens, SiThreads } from "react-icons/si";

interface SocialPlatform {
  id: string;
  name: string;
  icon: ReactElement;
  connector?: string | (() => void);
}

interface SocialInputsState {
  [key: string]: boolean;
}

interface SocialsState {
  [key: string]: string;
}

interface SocialGraphsProps {
  socials: SocialsState;
  setSocials: React.Dispatch<React.SetStateAction<SocialsState>>;
  userId: string;
}

const SocialGraphs: React.FC<SocialGraphsProps> = ({ socials, setSocials, userId } , ) => {
  const [socialInputs, setSocialInputs] = useState<SocialInputsState>({});

  const socialPlatforms: SocialPlatform[] = [
    {
      id: "twitter",
      name: "Twitter",
      icon: <RxTwitterLogo />,
      connector: "/api/twitter/auth",
    },
    {
      id: "github",
      name: "Github",
      icon: <FaGithub />,
      connector: "/api/twitter/auth",
    },
    { id: "linkedin", name: "LinkedIn", icon: <FaLinkedin /> },
    { id: "instagram", name: "Instagram", icon: <FaInstagram /> },
    { id: "youtube", name: "YouTube", icon: <FaYoutube /> },
    { id: "lens", name: "Lens", icon: <SiLens /> },
    { id: "medium", name: "Medium", icon: <FaMediumM /> },
    { id: "telegram", name: "Telegram", icon: <FaTelegram /> },
    { id: "farcaster", name: "Farcaster", icon: <SiFarcaster /> },
  ];

  const toggleInput = (platformId: string): void => {
    setSocialInputs((prev) => ({
      ...prev,
      [platformId]: !prev[platformId],
    }));
  };

  const handleConnect = (platformId: string, username?: string): void => {
    console.log(platformId);
    switch (platformId) {
      case "twitter":
        const authUrl = `/api/twitter/auth?userId=${encodeURIComponent(
          userId ?? ""
        )}`;
        const newWindow = window.open(
          authUrl,
          "_blank",
          "width=600,height=700"
        );

        if (newWindow) {
          newWindow.focus();
        }
        break;

      default:
        break;
    }
    if (username && username.trim()) {
      setSocials((prev) => ({
        ...prev,
        [platformId]: username.trim(),
      }));

      setSocialInputs((prev) => ({
        ...prev,
        [platformId]: false,
      }));
    }
  };

  const handleAddLink = (): void => {
    // Placeholder for add link functionality
    alert("Add link functionality would go here");
  };

  return (
    <div className="bg-black text-white max-w-5xl">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold">Social Graphs</h1>
          <p className="text-gray-400 text-sm">
            Make your profile more visible. See what your network is attending.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {socialPlatforms.map((platform) => (
          <div
            key={platform.id}
            className="flex justify-between items-center border-b border-gray-800 pb-3"
          >
            <div className="flex items-center">
              <div className="w-8 h-8 bg-[#1c1c1c] rounded-full flex items-center justify-center mr-4">
                <span>{platform.icon}</span>
              </div>
              <div>
                <p className="font-medium">{platform.name}</p>
                <p className="text-gray-400 text-sm">
                  {socials[platform.id]
                    ? `Connected as @${socials[platform.id]}`
                    : "Not Connected"}
                </p>
              </div>
            </div>

            {
              <button
                onClick={() => handleConnect(platform.id, "Username")}
                className="bg-[#121212] text-white border border-[#ffffff]/20 rounded px-4 py-2"
              >
                Connect
              </button>
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialGraphs;
