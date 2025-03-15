import { XIcon } from "lucide-react";
import React, { ReactElement, useState } from "react";
import { FaMediumM } from "react-icons/fa";
import {
  FaFacebook,
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
}

const SocialGraphs: React.FC<SocialGraphsProps> = ({ socials, setSocials }) => {
  const [socialInputs, setSocialInputs] = useState<SocialInputsState>({});

  const socialPlatforms: SocialPlatform[] = [
    { id: "twitter", name: "Twitter", icon: <RxTwitterLogo /> },
    { id: "facebook", name: "Facebook", icon: <FaFacebook /> },
    { id: "instagram", name: "Instagram", icon: <FaInstagram /> },
    { id: "youtube", name: "YouTube", icon: <FaYoutube /> },
    { id: "threads", name: "Threads", icon: <SiThreads /> },
    { id: "lens", name: "Lens", icon: <SiLens /> },
    { id: "linkedin", name: "LinkedIn", icon: <FaLinkedin /> },
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

  const handleConnect = (platformId: string, username: string): void => {
    if (username && username.trim()) {
      // Update the socials state using the setSocials prop
      setSocials((prev) => ({
        ...prev,
        [platformId]: username.trim(),
      }));
      
      // Close the input field
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

            {socialInputs[platform.id] ? (
              <div className="flex">
                <div className="text-white mr-2 px-3 py-1 rounded border-white/30 border-1 border">
                  <span>@</span>
                  <input
                    type="text"
                    defaultValue={socials[platform.id] || ""}
                    className="bg-[#ffffff00] outline-none text-white"
                    onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
                      if (e.key === "Enter") {
                        handleConnect(
                          platform.id,
                          (e.target as HTMLInputElement).value
                        );
                      }
                    }}
                  />
                </div>
                <button
                  className="bg-white text-black px-3 py-1 rounded"
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    const inputContainer = (e.target as HTMLButtonElement)
                      .previousSibling as HTMLDivElement;
                    const input = inputContainer.querySelector('input') as HTMLInputElement;
                    handleConnect(platform.id, input.value);
                  }}
                >
                  Save
                </button>
              </div>
            ) : (
              <button
                onClick={() => toggleInput(platform.id)}
                className="bg-transparent border border-gray-600 text-white px-4 py-1 rounded hover:bg-[#151515]"
              >
                {socials[platform.id] ? "Edit" : "Connect"}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialGraphs;