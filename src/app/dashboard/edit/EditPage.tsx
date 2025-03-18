"use client";

import React, { useRef, useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa";
import {
  Delete,
  DeleteIcon,
  Dot,
  LoaderCircle,
  Replace,
  Shuffle,
  Trash,
} from "lucide-react";
import { Loader } from "@/components/ui/loader";
import { UserDocument } from "@/modal/interfacetypes";
import { AvatarGenerator } from "random-avatar-generator";
import axios from "axios";
import UploadField, { uploadImageToCloudinary } from "@/utils/uploadFile";
import toast from "react-hot-toast";
import MilestoneCard from "./_components/MilestoneCard";
import ProjectCard from "./_components/ProjectCard";
import WorkExperienceCard from "./_components/WorkExperienceCard";
import SocialGraphs from "@/components/dashboard/SocialConnecter";
import { useWallets } from "@privy-io/react-auth";
import WalletCard from "./_components/WalletCard";
import WalletContainer from "./_components/WalletContainer";
import ENS from "@/components/dashboard/ENS";

const socialPlatforms = {
  github: ["github.com"],
  instagram: ["instagram.com"],
  linkedin: ["linkedin.com"],
  telegram: ["t.me", "telegram.me"],
  x: ["x.com", "twitter.com"],
  discord: ["discord.gg", "discord.com"],
  medium: ["medium.com"],
  hashNode: ["hashnode.com"],
};

const EditPage = (props: UserDocument) => {
  const [userDetails, setUserDetails] = useState<UserDocument>({
    ...props,
  } as UserDocument);
  const [value, setValue] = useState<any>();
  const [value1, setValue1] = useState<any>();
  const [value2, setValue2] = useState<any>();
  const [value3, setValue3] = useState<any>();
  const [value4, setValue4] = useState<any>();
  const [value5, setValue5] = useState<any>();
  const [tag, setTag] = useState([]);
  const [user, setUser] = useState<UserDocument>({ ...props } as UserDocument);
  const [modal, setModal] = useState<string | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const [socials, setSocials] = useState<{ [key: string]: string }>(
    (userDetails.socials as { [key: string]: string }) || {}
  );
  const [imgLoading, setImgLoading] = useState(false);
  const [projects, setProjects] = useState(userDetails.projects);

  const [milestones, setMilestones] = useState(userDetails.milestones);
  const [domains, setDomains] = useState<string[]>(userDetails.domains);
  const [workExperience, setWorkExperience] = useState(
    userDetails.workExperience
  );

  const wallet = useWallets();
  console.log("Wallets", wallet);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImgLoading(true);
      let img = await uploadImageToCloudinary(e.target.files[0]);
      // console.log(img);
      if (img) {
        setImgLoading(false);
        setUser({ ...user, profileImage: img });
        setImage(img);
      }
    }
  };

  const openModal = (label: string) => {
    setModal(label);
    setIsModalOpen(true);

    if (typeof window !== "undefined") {
      document.body.classList.add("overflow-hidden");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove("overflow-hidden");
  };
  console.log(userDetails);
  const generator = new AvatarGenerator();
  const generateRandomAvatar = () => {
    if (imgLoading) {
      setImgLoading(false);
    }
    const imageLink = generator.generateRandomAvatar();
    setUserDetails({ ...user, profileImage: imageLink });
  };

  const addObject = () => {
    if (modal == "Projects") {
      console.log(value3);
      const newProject = {
        projectName: value.Name,
        projectDescription: value1.Description,
        liveLink: value2["Live link"],
        imageLink: value3 || "",
        sourceLink: value4["Source link"],
      };
      console.log("new project", newProject);
      setUserDetails({
        ...userDetails,
        projects: [...userDetails.projects, newProject],
      });
      console.log(userDetails);
    }
    if (modal == "Milestones") {
      const newMilestone = {
        title: value.Title,
        description: value1.Description,
        reference: value2.Reference,
      };
      setUserDetails({
        ...userDetails,
        milestones: [...userDetails.milestones, newMilestone],
      });
    }
    if (modal == "Work Experience") {
      console.log(value4);
      const newWorkExperience = {
        tag: tag,
        orgName: value1["Organisation name"],
        positionName: value2.Position,
        from: new Date(value3.From),
        to: value4 !== null ? new Date(value4.To) : null,
        orgLogoLink: value5,
      };
      setUserDetails({
        ...userDetails,
        workExperience: [...userDetails.workExperience, newWorkExperience],
      });
    }
    if (modal == "Domains") {
      console.log("domains", value);
      setUserDetails({
        ...userDetails,
        domains: [...userDetails.domains, value.Domains],
      });
    }
    setTag([]);
    setValue("");
    setValue1("");
    setValue2("");
    setValue3("");
    setValue4("");
    setValue5("");

    // closeModal();
  };

  const Assembler = async () => {
    console.log("socials:", socials);
    console.log("projects:", projects);
    console.log("milestones:", milestones);
    console.log("workExperience:", workExperience);
    console.log("domains:", domains);

    await setUserDetails((prev) => ({
      ...prev,
      socials: socials,
      projects,
      milestones,
      workExperience,
      domains,
    }));
  };

  const handleSubmit = async () => {
    console.log("user Details for request", userDetails);

    let res1;
    res1 = axios.patch("/api/user/", {
      ...userDetails,
      socials: socials,
    });
    let res = await res1;
    toast.promise(res1, {
      loading: "Updating user...",
      success: "User updated successfully!",
      error: "Failed to update user",
    });
    if (res.status == 200) {
      console.log("Response for update request", res.data);
      setUser(res.data.result);
    }
  };

  if (!user && !userDetails._id) {
    return <Loader />;
  }

  return (
    <>
      {isModalOpen && (
        <div className="fixed backdrop-blur-[1px] bg-black/10  w-screen h-screen top-0 left-0 z-50">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 max-w-md p-12 rounded-xl border border-[#27272A] bg-black flex flex-col">
            <button onClick={closeModal} className="relative">
              <RxCross2 className="cursor-pointer text-white absolute -top-8 left-[18.8rem]" />
            </button>
            <div className="flex flex-col gap-3">
              {modal == "Projects" && (
                <>
                  <InputField label={"Name"} setValue={setValue} />
                  <InputField label={"Description"} setValue={setValue1} />
                  <InputField label={"Live link"} setValue={setValue2} />

                  <InputField label={"Source link"} setValue={setValue4} />
                  <UploadField label="Project Image" setValue={setValue3} />
                </>
              )}
              {modal == "Milestones" && (
                <>
                  <InputField label={"Title"} setValue={setValue} />
                  <InputField label={"Description"} setValue={setValue1} />
                  <InputField label={"Reference"} setValue={setValue2} />
                </>
              )}
              {modal == "Work Experience" && (
                <div className="flex flex-col items-start gap-2">
                  <TagField label={"Tag"} setValue={setTag} value={tag} />
                  <InputField
                    label={"Organisation name"}
                    setValue={setValue1}
                  />
                  <InputField label={"Position"} setValue={setValue2} />
                  <InputField label={"From"} setValue={setValue3} />

                  <InputField
                    label={"To"}
                    disabled={value4 === null}
                    setValue={setValue4}
                  />
                  <div className=" flex gap-2 items-center">
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        (e.target.checked && setValue4(null)) ||
                        (!e.target.checked && setValue4(""))
                      }
                    />
                    <p className="text-sm">
                      Click if you are currently working here
                    </p>
                  </div>
                  <UploadField label={"Org Logo"} setValue={setValue5} />
                </div>
              )}
              {modal == "Domains" && (
                <>
                  <InputField label={"Domains"} setValue={setValue} />
                </>
              )}
            </div>
            <button
              onClick={addObject}
              className="text-white ml-auto mt-6 w-full rounded-md px-3 py-1 bg-[#121212] border border-white"
            >
              Add
            </button>
          </div>
        </div>
      )}
      <div className="bg-black w-full grid xl:grid-cols-2 md:grid-cols-1 min-h-fit pb-16">
        <div className="px-4 md:px-16 py-10">
          <div className="w-full h-full flex flex-col gap-4">
            <div className="Username flex flex-col gap-2  ">
              <p className="text-white text-lg font-medium">Username</p>
              <input
                type="text"
                readOnly
                value={userDetails.username}
                className="bg-[#4c4c4c] border border-[#27272A] hover:cursor-not-allowed w-full px-3 py-1 rounded-md text-[#A1A1AA]"
              />
            </div>
            <div className="Username flex flex-col gap-2  ">
              <p className="text-white text-lg font-medium">Email</p>
              <input
                type="text"
                readOnly
                value={String(userDetails?.email || "")}
                className="bg-[#4c4c4c] border border-[#27272A] hover:cursor-not-allowed w-full px-3 py-1 rounded-md text-[#A1A1AA]"
              />
            </div>

            <div className="Username flex flex-col gap-2 ">
              <p className="text-white text-lg font-medium">Gender</p>
              <input
                type="text"
                readOnly
                value={userDetails.gender || ""}
                className="bg-[#4c4c4c] border border-[#27272A] hover:cursor-not-allowed w-full max-w-24 px-3 py-1 rounded-md text-[#A1A1AA]"
              />
            </div>
            <div className="Username flex flex-col gap-2">
              <p className="text-white text-lg font-medium">Contact</p>
              <input
                type="text"
                value={String(userDetails?.contact || "")}
                className="bg-[#0C0C0E] border border-[#27272A] w-full px-3 py-1 rounded-md text-[#A1A1AA]"
              />
            </div>
            <div className="image flex flex-col gap-2">
              <p className="text-white text-lg font-medium">Profile Photo</p>
              <div className="flex gap-3 items-center">
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  className="hidden"
                />
                <div
                  className="bg-[#0C0C0E] border border-[#27272A] rounded-md w-20 h-20 flex items-center justify-center cursor-pointer overflow-hidden"
                  onClick={() => fileInputRef.current?.click()}
                >
                  {imgLoading ? (
                    <div>
                      <Loader />
                    </div>
                  ) : user.profileImage ? (
                    <div className="flex gap-2 items-center ">
                      <img
                        src={userDetails.profileImage}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <span className="text-sm text-[#a1a1aa]">Upload</span>
                  )}
                </div>
                <button
                  onClick={generateRandomAvatar}
                  className="bg-white flex text-sm items-center gap-1 h-fit rounded px-3 py-1 text-black"
                >
                  Random
                  <Shuffle size={13} />
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-white text-lg font-medium">Status</p>
              <Status status={userDetails} setStatus={setUserDetails} />
            </div>
            <InputField
              label={"bio"}
              value={userDetails}
              maxLength={60}
              setValue={setUserDetails}
            />
            {/* <SocialLinksInput setSocials={setSocials} socials={socials} /> */}
            <SocialGraphs
              userId={userDetails._id || ""}
              socials={socials}
              setSocials={setSocials}
            />
          </div>
        </div>
        <div className="px-4 md:px-16 py-10 h-fit">
          <div className="w-full custom-scrollbar flex flex-col gap-5">
            <WalletContainer />
          </div>
          <div className="w-full custom-scrollbar flex flex-col gap-5 my-3">
            <ENS />
          </div>
          <AddField
            label={"Projects"}
            value={userDetails.projects}
            setValue={setProjects}
            openModal={openModal}
          />
          <AddField
            label={"Milestones"}
            value={userDetails.milestones}
            setValue={setMilestones}
            openModal={openModal}
          />
          <AddField
            label={"Work Experience"}
            value={userDetails.workExperience}
            setValue={setWorkExperience}
            openModal={openModal}
          />
          <AddField
            label={"Domains"}
            value={userDetails.domains}
            setValue={setDomains}
            openModal={openModal}
          />
          <div>
            <button
              onClick={handleSubmit}
              className="bg-white ml-auto md:mr-16 mr-10 flex w-fit items-center gap-1 h-fit rounded px-4 py-2 text-black"
            >
              Update
              <Replace size={14} />
            </button>
          </div>
        </div>{" "}
      </div>{" "}
    </>
  );
};

const InputField = ({
  label,
  value,
  disabled,
  setValue,
  placeHolder,
  maxLength,
}: {
  label?: string;
  value?: any;
  disabled?: boolean;
  setValue?: any;
  maxLength?: number;
  placeHolder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-white text-lg font-medium">{label}</p>
      <input
        onFocus={(e) => e.target.select()}
        placeholder={label ? label : placeHolder}
        type={label == "From" || label === "To" ? "date" : "text"}
        maxLength={maxLength}
        disabled={disabled}
        value={value && label && value?.[label]}
        onChange={(e) => setValue({ ...value, [label!]: e.target.value })}
        className={`placeholder-zinc-700  ${
          !disabled ? "bg-[#0C0C0E]" : "bg-[#5a5a5a]"
        } border border-[#27272A] w-full px-3 py-1 rounded-md text-[#A1A1AA]`}
      />
    </div>
  );
};

interface SocialLinksInputProps {
  setSocials: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
  socials: { [key: string]: string };
}

const SocialLinksInput = ({ setSocials, socials }: SocialLinksInputProps) => {
  // Initialize with 4 input fields
  const [inputs] = useState([0, 1, 2, 3]);

  return (
    <div>
      <p className="text-white text-lg font-medium">Social</p>
      <div className="flex flex-col gap-2">
        {inputs.map((index) => (
          <SocialDropDown
            key={index}
            setSocials={setSocials}
            socials={socials}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

const SocialDropDown = ({
  setSocials,
  socials,
  index,
}: {
  setSocials: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
  socials: { [key: string]: string };
  index: number;
}) => {
  type PlatformKeys =
    | "Instagram"
    | "GitHub"
    | "X"
    | "Dribbble"
    | "Hashnode"
    | "YouTube"
    | "HackerRank"
    | "LeetCode"
    | "HackerEarth"
    | "Discord"
    | "Twitter"
    | "CodePen"
    | "StackOverflow"
    | "Figma"
    | "Behance"
    | "Medium"
    | "CodeChef"
    | "Codeforces"
    | "Telegram"
    | "";

  const platforms: Record<Exclude<PlatformKeys, "">, string> = {
    Instagram: "instagram.com/",
    GitHub: "github.com/",
    X: "x.com/",
    Dribbble: "dribbble.com/",
    Hashnode: "hashnode.com/",
    YouTube: "youtube.com/",
    HackerRank: "hackerrank.com/",
    LeetCode: "leetcode.com/",
    HackerEarth: "hackerearth.com/",
    Discord: "discord.com/",
    Twitter: "twitter.com/",
    CodePen: "codepen.io/",
    StackOverflow: "stackoverflow.com/",
    Figma: "figma.com/",
    Behance: "behance.net/",
    Medium: "medium.com/",
    CodeChef: "codechef.com/",
    Codeforces: "codeforces.com/",
    Telegram: "t.me/",
  };

  const [selectedPlatform, setSelectedPlatform] = useState<PlatformKeys>(() => {
    const existingPlatforms = Object.keys(socials) as PlatformKeys[];
    return index < existingPlatforms.length ? existingPlatforms[index] : "";
  });

  const [username, setUsername] = useState<string>(() => {
    if (selectedPlatform && socials[selectedPlatform]) {
      const platformPrefix = platforms[selectedPlatform];
      return socials[selectedPlatform].replace(platformPrefix, "");
    }
    return "";
  });

  useEffect(() => {
    if (selectedPlatform && username) {
      const fullUrl = platforms[selectedPlatform] + username;
      setSocials((prev) => ({
        ...prev,
        [selectedPlatform]: fullUrl,
      }));
    }
  }, [selectedPlatform, username, setSocials]);

  const handleSelect = (platform: string) => {
    const newPlatform = platform as PlatformKeys;

    if (selectedPlatform && selectedPlatform !== newPlatform) {
      setSocials((prev) => {
        const updated = { ...prev };
        delete updated[selectedPlatform];
        return updated;
      });
    }

    setSelectedPlatform(newPlatform);
    setUsername("");
  };

  const handleUsernameChange = (newUsername: string) => {
    setUsername(newUsername);
  };

  return (
    <div className="flex gap-3">
      <div className="relative">
        <select
          value={selectedPlatform}
          onChange={(e) => handleSelect(e.target.value)}
          className="bg-[#0C0C0E] border border-[#27272A] px-3 py-1 rounded-md text-[#A1A1AA] w-fit"
          style={{ maxHeight: "150px", overflowY: "auto" }}
        >
          <option value="">Select Platform</option>
          {Object.keys(platforms).map((platform) => (
            <option key={platform} value={platform}>
              {platform}
            </option>
          ))}
        </select>
      </div>
      {selectedPlatform && (
        <div className="flex items-center px-3 py-1 rounded-md bg-[#0C0C0E] border border-[#27272A]">
          <span className="text-[#ffffff]">{platforms[selectedPlatform]}</span>
          <input
            type="text"
            value={username}
            onChange={(e) => handleUsernameChange(e.target.value)}
            className="bg-[#ffffff00] outline-none  text-[#ffffff] placeholder:text-[#6e6e6e] w-full"
            placeholder="username"
          />
        </div>
      )}
    </div>
  );
};

const AddField = ({
  label,
  value,
  setValue,
  openModal,
}: {
  label: string;
  value: any[];
  setValue: (val: any[]) => void;
  openModal: any;
}) => {
  const handleDelete = (index: number) => {
    console.log(value, "and", index);
    let res = value.filter((_, i) => i !== index);
    setValue(res);
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-white text-lg font-medium">{label}</p>
      <div className="flex gap-3 flex-wrap">
        {value.map((val, index) => (
          <div
            key={index}
            className="py-1 px-2 text-[#A1A1AA] flex gap-2 bg-[#0C0C0E] rounded-xl"
          >
            {label == "Projects" && <ProjectCard {...val} />}
            {label == "Milestones" && <MilestoneCard {...val} />}
            {label == "Work Experience" && <WorkExperienceCard {...val} />}
            {label == "Domains" && val}
            <button onClick={() => handleDelete(index)}>
              <Trash className="cursor-pointer" />
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={() => openModal(label)}
        className="text-white w-fit rounded-md px-3 py-1.5 cursor-pointer border-1 border border-[#d0d0d0] border-solid"
      >
        Add {label}
      </button>
    </div>
  );
};

const TagField = ({
  label,
  setValue,
  value,
}: {
  label: string;
  setValue: any;
  value: any;
}) => {
  const [input, setInput] = useState<string>("");
  return (
    <div className="flex flex-col gap-2">
      <p className="text-white text-lg font-medium">{label}</p>
      <input
        onFocus={(e) => e.target.select()}
        placeholder={label}
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        className="placeholder-zinc-700 bg-[#0C0C0E] border border-[#27272A] w-full px-3 py-1 rounded-md text-[#A1A1AA]"
      />
      <div className="flex w-full gap-1 overflow-auto !scrollbar-hide">
        {value.map((value: string) => (
          <p className="py-1 px-2 bg-[#131315] rounded-full" key={value}>
            {value}
          </p>
        ))}
      </div>
      <button
        onClick={() => setValue([...value, input])}
        className="text-white w-fit rounded-md px-3 py-1 bg-[#000044]"
      >
        Add
      </button>
    </div>
  );
};

const Status = ({ status, setStatus }: { status: any; setStatus: any }) => {
  const statuses = [
    { label: "Available", value: "available" },
    { label: "Not Available", value: "notAvailable" },
    { label: "Busy", value: "busy" },
  ];

  return (
    <div className="flex gap-3">
      {statuses.map(({ label, value }) => (
        <button
          key={value}
          onClick={() => setStatus({ ...status, status: value })}
          className={`px-3 py-1 rounded-full flex gap-1 border items-center 
            ${
              status.status === value
                ? "bg-[#030311] text-white border-[#000044]"
                : "bg-[#0C0C0E] text-gray-400 border-[#27272A]"
            }`}
        >
          {status.status === value && <Dot className="text-white" />} {label}
        </button>
      ))}
    </div>
  );
};

export default EditPage;
