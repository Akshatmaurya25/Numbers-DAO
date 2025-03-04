"use client";

import React, { useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa";
import { Dot, LoaderCircle, Replace, Shuffle } from "lucide-react";
import { Loader } from "@/components/ui/loader";
import { UserDocument } from "@/modal/interfacetypes";
import { AvatarGenerator } from "random-avatar-generator";
import axios from "axios";
import { uploadImageToCloudinary } from "@/utils/uploadFile";
import toast from "react-hot-toast";

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
  console.log(props);
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const [user, setUser] = useState<UserDocument>({ ...props } as UserDocument);
  const [modal, setModal] = useState<string | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("Nakul chouskey");
  const [image, setImage] = useState<string | null>(null);
  const [bio, setBio] = useState("Hey there");
  const [status, setStatus] = useState<string>("available");
  const [imgLoading, setImgLoading] = useState(false);
  const [projects, setProjects] = useState([
    {
      projectName: "Wizzz",
      projectDescription: "",
      liveLink: "",
      imageLink: "",
      sourceLink: "",
    },
    {
      projectName: "Wizzzard",
      projectDescription: "",
      liveLink: "",
      imageLink: "",
      sourceLink: "",
    },
  ]);
  const [milestones, setMilestones] = useState([
    { title: "DEV Award", description: "", reference: "" },
    { title: "DEVREL Award", description: "", reference: "" },
  ]);
  const [domains, setDomains] = useState<string[]>(["notion", "react"]);
  const [workExperience, setWorkExperience] = useState([
    {
      tag: "",
      orgName: "Numbers DAO",
      positionName: "",
      from: "",
      to: "",
      orgLogoLink: "",
    },
    {
      tag: "",
      orgName: "Bhopal DAO",
      positionName: "",
      from: "",
      to: "",
      orgLogoLink: "",
    },
  ]);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImgLoading(true);
      let img = await uploadImageToCloudinary(e.target.files[0]);
      console.log(img);
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

  const generator = new AvatarGenerator();
  const generateRandomAvatar = () => {
    if (imgLoading) {
      setImgLoading(false);
    }
    const imageLink = generator.generateRandomAvatar();
    setUser({ ...user, profileImage: imageLink });
  };

  const addObject = () => {
    if (modal == "Projects") {
      const newProject = {
        projectName: value,
        projectDescription: value1,
        liveLink: value2,
        imageLink: value3,
        sourceLink: value4,
      };
      setProjects([...projects, newProject]);
    }
    if (modal == "Milestones") {
      const newMilestone = {
        title: value,
        description: value1,
        reference: value2,
      };
      setMilestones([...milestones, newMilestone]);
    }
    if (modal == "Work Experience") {
      const newWorkExperience = {
        tag: value,
        orgName: value1,
        positionName: value2,
        from: value3,
        to: value4,
        orgLogoLink: value5,
      };
      setWorkExperience([...workExperience, newWorkExperience]);
    }
    if (modal == "Domains") {
      setDomains([...domains, value]);
    }
    setValue("");
    setValue1("");
    setValue2("");
    setValue3("");
    setValue4("");
    setValue5("");
    closeModal();
  };

  const handleSubmit = async () => {
    let res1 = axios.patch("/api/user/", {
      ...user,
    });
    let res = await res1;
    toast.promise(res1, {
      loading: "Updating user...",
      success: "User updated successfully!",
      error: "Failed to update user",
    });
    if (res.status == 200) {
      setUser(res.data.result);
      console.log(res.data);
    }
  };

  if (!user) {
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
                  <InputField label={"Image link"} setValue={setValue3} />
                  <InputField label={"Source link"} setValue={setValue4} />
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
                <>
                  <InputField label={"Tag"} setValue={setValue} />
                  <InputField
                    label={"Organisation name"}
                    setValue={setValue1}
                  />
                  <InputField label={"Position"} setValue={setValue2} />
                  <InputField label={"Form"} setValue={setValue3} />
                  <InputField label={"To"} setValue={setValue4} />
                  <InputField label={"Org Logo Link"} setValue={setValue5} />
                </>
              )}
              {modal == "Domains" && (
                <>
                  <InputField label={"Domains"} setValue={setValue} />
                </>
              )}
            </div>
            <button
              onClick={addObject}
              className="text-white ml-auto mt-6 w-full rounded-md px-3 py-1 bg-[#000044]"
            >
              Add
            </button>
          </div>
        </div>
      )}

      <div className="bg-black max-w-7xl w-full grid xl:grid-cols-2 md:grid-cols-1">
        <div className="px-4 md:px-16 py-10">
          <div className="w-full h-full flex flex-col gap-4">
            <div className="Username flex flex-col gap-2">
              <p className="text-white text-lg font-medium">Username</p>
              <input
                type="text"
              
                readOnly
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
                        src={user.profileImage}
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
              <Status status={status} setStatus={setStatus} />
            </div>
            <InputField
              label={"Bio"}
              value={user.bio}
              maxLength={60}
              onChange={(e) => setUser({ ...user, bio: e.target.value })}
              // setValue={setBio}
            />
            <SocialLinksInput />
          </div>
        </div>
        <div className="px-4 md:px-16 py-10">
          <div className="w-full h-full flex flex-col gap-5">
            <AddField
              label={"Projects"}
              value={projects}
              setValue={setProjects}
              openModal={openModal}
            />
            <AddField
              label={"Milestones"}
              value={milestones}
              setValue={setMilestones}
              openModal={openModal}
            />
            <AddField
              label={"Work Experience"}
              value={workExperience}
              setValue={setWorkExperience}
              openModal={openModal}
            />
            <AddField
              label={"Domains"}
              value={domains}
              setValue={setDomains}
              openModal={openModal}
            />
            <button
              onClick={handleSubmit}
              className="bg-white ml-auto flex w-fit items-center gap-1 h-fit rounded px-4 py-2 text-black"
            >
              Update
              <Replace size={14} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const InputField = ({
  label,
  value,
  setValue,
  placeHolder,
  maxLength,
  onChange
}: {
  label?: string;
  value?: string;
  setValue?: any;
  maxLength?: number;
  placeHolder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-white text-lg font-medium">{label}</p>
      <input
        onFocus={(e) => e.target.select()}
        placeholder={label ? label : placeHolder}
        type="text"
        maxLength={maxLength}
        value={value}
        // onChange={(e) => {
        //   setValue(e.target.value);
        // }}
        onChange={onChange}
        className="placeholder-zinc-700 bg-[#0C0C0E] border border-[#27272A] w-full px-3 py-1 rounded-md text-[#A1A1AA]"
      />
    </div>
  );
};

const SocialLinksInput = () => {
  const [socials, setSocials] = useState<{ [key: string]: string }>({});
  const [inputs, setInputs] = useState(["", "", "", ""]);

  // useEffect(() => {
  //   console.log("Updated Socials:", socials);
  // }, [socials]);

  const handleChange = (index: number, value: string) => {
    const updatedInputs = [...inputs];
    updatedInputs[index] = value;
    setInputs(updatedInputs);

    let detectedPlatform = "";
    for (const [platform, urls] of Object.entries(socialPlatforms)) {
      if (urls.some((url) => value.includes(url))) {
        detectedPlatform = platform;
        break;
      }
    }

    if (detectedPlatform) {
      setSocials((prev) => ({
        ...prev,
        [detectedPlatform]: value,
      }));
    }
  };

  return (
    <div>
      <p className="text-white text-lg font-medium">Social</p>
      <div className="flex flex-col gap-2">
        {inputs.map((value, index) => (
          <SocialDropDown
            key={index}
            value={value}
            setValue={(val: string) => handleChange(index, val)}
          />
        ))}
      </div>
    </div>
  );
};

const SocialDropDown = ({
  value,
  setValue,
}: {
  value?: string;
  setValue: any;
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

  const [selectedPlatform, setSelectedPlatform] = useState<PlatformKeys>("");

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

  const handleSelect = (platform: string) => {
    setSelectedPlatform(platform as PlatformKeys);
    setValue("");
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="relative">
        <select
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
        <div className="flex items-center gap-2">
          <span className="text-[#A1A1AA]">{platforms[selectedPlatform]}</span>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="bg-[#0C0C0E] border border-[#27272A] px-3 py-1 rounded-md text-[#A1A1AA] w-full"
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
    setValue(value.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-white text-lg font-medium">{label}</p>
      <div className="flex gap-3 flex-wrap">
        {value.map((val, index) => (
          <div
            key={index}
            className="px-3 py-1 rounded-full text-[#A1A1AA] flex gap-2 bg-[#0C0C0E] border border-[#27272A]"
          >
            <p>
              {label == "Projects" && val.projectName}
              {label == "Milestones" && val.title}
              {label == "Work Experience" && val.orgName}
              {label == "Domains" && val}
            </p>
            <button onClick={() => handleDelete(index)}>
              <RxCross2 className="cursor-pointer" />
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={() => openModal(label)}
        className="text-white w-fit rounded-md px-3 py-1 bg-[#000044]"
      >
        Add {label}
      </button>
    </div>
  );
};

const Status = ({ status, setStatus }: { status: string; setStatus: any }) => {
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
          onClick={() => setStatus(value)}
          className={`px-3 py-1 rounded-full flex gap-1 border items-center 
            ${
              status === value
                ? "bg-[#030311] text-white border-[#000044]"
                : "bg-[#0C0C0E] text-gray-400 border-[#27272A]"
            }`}
        >
          {status === value && <Dot className="text-white" />} {label}
        </button>
      ))}
    </div>
  );
};

export default EditPage;
