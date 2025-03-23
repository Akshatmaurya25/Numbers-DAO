"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowUpRight,
  Circle,
  Linkedin,
  Send,
  ChevronLeft,
  ChevronRight,
  Dribbble,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Header from "../dashboard/_components/Header";
import { usePrivy } from "@privy-io/react-auth";
// import User from '@/modal/user';
import { useState, useEffect } from "react";
import axios from "axios";
import { MilestoneForm } from "@/components/forms/milestone-form";
import {
  FaBehance,
  FaDiscord,
  FaGithub,
  FaHackerrank,
  FaInstagram,
  FaLinkedin,
  FaMediumM,
  FaStackOverflow,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  SiCodechef,
  SiCodeforces,
  SiHackerearth,
  SiLeetcode,
} from "react-icons/si";
import { FaHashnode } from "react-icons/fa6";
import MilestoneCard from "../dashboard/_components/milestone-card";
import ProjectsCard from "../dashboard/_components/projects-card";
import WorkExperienceCard from "../dashboard/edit/_components/WorkExperienceCard";
export default function zDashboard(props: any) {
  console.log("props", props);
  // Core states
  const [currentSlide, setCurrentSlide] = useState(0);
  const { user } = usePrivy();
  console.log(user);
  const projects = [
    {
      title: "Community Project 1",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%204-wnC1n8AlUNWcfa5kF9YuARIenYuXKN.png",
      description:
        "Building a decentralized community focused on empowering Bhopal through web3 technology",
    },
    // Add more projects as needed
  ];
  const [workExperience, setWorkExperience] = useState([
    {
      tag: ["Blockchain", "Smart Contracts", "Solidity"],
      orgName: "Resend Protocol",
      positionName: "Assistant Manager",
      from: new Date("20212-04-07"),
      to: "12/23",
      orgLogoLink: "https://resend.com/static/brand/resend-icon-black.svg",
    },

    {
      tag: ["Blockchain", "Smart Contracts", "Solidity"],
      orgName: "Numbers DAO",
      positionName: "Smart Contract Developer 2023sdadasdasd",
      from: new Date("2021-11-01"),
      to: "12/23",
      orgLogoLink:
        "https://static.chainbroker.io/mediafiles/projects/numbers-protocol/numbers.jpeg",
    },
    {
      tag: ["AI/ML", "NLP", "Deep Learning"],
      orgName: "OpenAI",
      positionName: "AI Engineer",
      from: new Date("2023-06-01"),
      to: null,
      orgLogoLink:
        "https://platform.theverge.com/wp-content/uploads/sites/2/2025/02/openai-new-logo_f252fc.png?quality=90&strip=all&crop=7.8125%2C0%2C84.375%2C100&w=2400",
    },
  ]);
  const [showBioForm, setShowBioForm] = useState(false);
  const [newBio, setNewBio] = useState(props.bio || "");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [showMilestoneForm, setShowMilestoneForm] = useState(false);
  const [achievements, setAchievements] = useState(
    () =>
      props.achievements || {
        projects: [],
        milestones: [],
        workExperience: [],
      }
  );

  // Update achievements when props change
  useEffect(() => {
    if (props.achievements) {
      setAchievements(props.achievements);
    }
  }, [props.achievements]);

  const handleBioSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ type: "", text: "" });

    try {
      const response = await axios.patch("/api/user/", {
        authId: props.authId,
        bio: newBio,
      });

      if (response.data.success) {
        setMessage({ type: "success", text: "Bio updated successfully!" });
        props.bio = newBio;
        setShowBioForm(false);
      } else {
        throw new Error(response.data.error || "Failed to update bio");
      }
    } catch (error: any) {
      setMessage({
        type: "error",
        text: error.response?.data?.error || "Failed to update bio",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMilestoneSuccess = (newData: any) => {
    try {
      const achievementsData =
        newData?.result?.achievements || newData?.achievements;

      if (achievementsData) {
        setAchievements(achievementsData);
        setMessage({
          type: "success",
          text: "Achievements updated successfully!",
        });
        setTimeout(() => setShowMilestoneForm(false), 1000);
      } else {
        setMessage({
          type: "error",
          text: "Unexpected response format",
        });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "Failed to update achievements",
      });
    }
  };

  const techStack = [
    { name: "Ethereum", icon: "/placeholder.svg" },
    { name: "Solidity", icon: "/placeholder.svg" },
    { name: "IPFS", icon: "/placeholder.svg" },
    { name: "Web3.js", icon: "/placeholder.svg" },
    { name: "React", icon: "/placeholder.svg" },
    { name: "Next.js", icon: "/placeholder.svg" },
  ];

  return (
    <div className="min-h-screen   bg-black text-white p-4 md:p-6 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 md:gap-6">
        {/* left */}
        <div className="flex flex-col gap-4 w-[95%]">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col gap-4 md:w-[50%]">
              {/* Header Section */}
              <Card className="bg-zinc-900/50 border-zinc-800 p-4">
                <div className="space-y-4">
                  <h1 className="text-red-500 text-2xl font-bold">
                    {props.username ? `@${props.username}` : "Anonymous User"}
                  </h1>
                  <div className="flex items-start gap-4">
                    <img
                      src={props.profileImage || "/placeholder.svg"}
                      alt="Profile"
                      className="rounded-full h-32 w-32 aspect-square object-cover object-center"
                    />
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Circle className="w-2 h-2 fill-green-500 text-green-500" />
                        <span className="text-zinc-400 text-sm">
                          {props.status}
                        </span>
                      </div>
                      {showBioForm ? (
                        <form onSubmit={handleBioSubmit} className="space-y-2">
                          <textarea
                            value={newBio}
                            onChange={(e) => setNewBio(e.target.value)}
                            className="w-full px-3 py-2 bg-zinc-800 rounded-md text-white"
                            rows={3}
                            placeholder="Enter your bio..."
                          />
                          <div className="flex gap-2">
                            <Button
                              type="submit"
                              variant="secondary"
                              disabled={isSubmitting}
                            >
                              {isSubmitting ? "Saving..." : "Save Bio"}
                            </Button>
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => setShowBioForm(false)}
                            >
                              Cancel
                            </Button>
                          </div>
                          {message.text && (
                            <p
                              className={`text-sm ${
                                message.type === "error"
                                  ? "text-red-500"
                                  : "text-green-500"
                              }`}
                            >
                              {message.text}
                            </p>
                          )}
                        </form>
                      ) : (
                        <div className="flex justify-between items-start gap-2">
                          <p className="text-zinc-300 text-sm">
                            {props.bio || "No bio yet"}
                          </p>
                          {/* <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setShowBioForm(true)}
                            className="text-zinc-400 hover:text-white"
                          >
                            Edit
                          </Button> */}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Link href="#" className="hover:text-zinc-300">
                      <FaLinkedin className="w-4 h-4" />
                    </Link>
                    <Link href="#" className="hover:text-zinc-300">
                      <FaInstagram className="w-4 h-4" />
                    </Link>
                    <Link href="#" className="hover:text-zinc-300">
                      <FaTwitter className="w-4 h-4" />
                    </Link>
                    <Link href="#" className="hover:text-zinc-300">
                      <SiLeetcode className="w-4 h-4" />
                    </Link>
                    {/* <Link href="#" className="hover:text-zinc-300">
                      <FaGithub className="w-4 h-4" />
                    </Link>
                    <Link href="#" className="hover:text-zinc-300">
                      <Dribbble className="w-4 h-4" />
                    </Link>
                    <Link href="#" className="hover:text-zinc-300">
                      <FaHashnode className="w-4 h-4" />
                    </Link>
                    <Link href="#" className="hover:text-zinc-300">
                      <FaYoutube className="w-4 h-4" />
                    </Link>
                    <Link href="#" className="hover:text-zinc-300">
                      <FaHackerrank className="w-4 h-4" />
                    </Link>
                    <Link href="#" className="hover:text-zinc-300">
                      <SiCodeforces className="w-4 h-4" />
                    </Link>
                    <Link href="#" className="hover:text-zinc-300">
                      <SiHackerearth className="w-4 h-4" />
                    </Link>
                    <Link href="#" className="hover:text-zinc-300">
                      <FaDiscord className="w-4 h-4" />
                    </Link>
                    <Link href="#" className="hover:text-zinc-300">
                      <FaStackOverflow className="w-4 h-4" />
                    </Link>
                    <Link href="#" className="hover:text-zinc-300">
                      <FaBehance className="w-4 h-4" />
                    </Link>
                    <Link href="#" className="hover:text-zinc-300">
                      <FaMediumM className="w-4 h-4" />
                    </Link>
                    <Link href="#" className="hover:text-zinc-300">
                      <SiCodechef className="w-4 h-4" />
                    </Link> */}

                    <Button className="ml-auto bg-white text-black gap-2 text-sm py-1">
                      <Send className="w-3 h-3" />
                      Let&apos;s talk!
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4">
                <Card className="bg-zinc-900/50 border-zinc-800 p-3">
                  <div className="space-y-0.5">
                    <div className="text-zinc-500 text-xs">
                      Community Members
                    </div>
                    <div className="text-2xl text-white font-semibold">
                      1000+
                    </div>
                  </div>
                </Card>
                <Card className="bg-zinc-900/50 border-zinc-800 p-3">
                  <div className="space-y-0.5">
                    <div className="text-zinc-500 text-xs">
                      Active Proposals
                    </div>
                    <div className="text-2xl text-white font-semibold">25+</div>
                  </div>
                </Card>
                <Card className="bg-zinc-900/50 border-zinc-800 p-3">
                  <div className="space-y-0.5">
                    <div className="text-zinc-500 text-xs">Treasury Value</div>
                    <div className="text-2xl text-white font-semibold">
                      $10K+
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <div className="md:w-[50%] text-center">
              {/* Personal Milestone */}
              <Card className="bg-zinc-900/50  w-full border-zinc-800  h-full">
                <div className="w-full overflow-x-hidden flex items-center justify-center h-full">
                  <MilestoneCard
                    milestones={[
                      {
                        title: "C8 Award",
                        description:
                          "I won this award at music festival in fall of summer 2023, I really loved it",
                        reference: "Check Out",
                      },
                    ]}
                  />
                </div>
              </Card>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-2/3 overflow-y-hidden">
              {/* DAO Achievements */}
              <Card className="bg-zinc-900/50  overflow-y-auto custom-scrollbar border-zinc-800 p-4 row-span-2 h-full">
                <ProjectsCard
                  projects={[
                    {
                      projectName: "TaskFlow",
                      projectDescription:
                        "A modern task management app for teams.",
                      liveLink: "https://www.trello.com/",
                      imageLink:
                        "https://images.unsplash.com/photo-1556740738-b6a63e27c4df",
                      sourceLink: "https://github.com/yourusername/taskflow",
                    },
                    {
                      projectName: "EcoShop",
                      projectDescription:
                        "An e-commerce platform promoting sustainable products.",
                      liveLink: "https://www.shopify.com/",
                      imageLink:
                        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
                      sourceLink: "https://github.com/yourusername/ecoshop",
                    },
                    {
                      projectName: "FitTrack",
                      projectDescription:
                        "A fitness tracking app for monitoring workouts and diet.",
                      liveLink: "https://www.myfitnesspal.com/",
                      imageLink:
                        "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
                      sourceLink: "https://github.com/yourusername/fittrack",
                    },
                  ]}
                />
              </Card>
            </div>
            <div className="md:w-1/3">
              {/* Community Section */}
              <Card className="bg-zinc-900/50 border-zinc-800 p-6">
                <div className="space-y-4">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-emerald-500">
                      Community
                    </h2>
                    <p className="text-zinc-400 text-sm mt-1">
                      Launched communities for designers to exceed the threshold
                      of their creativity
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white">Discord Members</span>
                      <Badge
                        variant="secondary"
                        className="bg-emerald-500/10 text-emerald-500"
                      >
                        315+
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white">
                        Governance Participants
                      </span>
                      <Badge
                        variant="secondary"
                        className="bg-emerald-500/10 text-emerald-500"
                      >
                        570+
                      </Badge>
                    </div>
                    <div className="text-sm text-zinc-400 text-center">
                      Products I made to the community 👋
                    </div>
                    <div className="flex justify-around gap-2">
                      <Button variant="secondary" size="sm" className="gap-2">
                        Figma
                        <ArrowUpRight className="w-4 h-4" />
                      </Button>
                      <Button variant="secondary" size="sm" className="gap-2">
                        Framer
                        <ArrowUpRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="flex flex-col gap-4 md:w-[45%]  ">
          <div className="overflow-y-hidden">
            <Card className="bg-zinc-900/50 border-zinc-800 p-4 col-span-2 h-[350px]  overflow-y-auto custom-scrollbar">
              <h2 className="text-2xl text-center font-semibold text-[#1385F9] mb-2">
                Work Experience
              </h2>
              <p className="text-zinc-400 text-center text-sm mt-1 mb-4">
                The work expeience where I've worked in past
              </p>
              <div className="space-y-6 text-center">
                {workExperience &&
                  workExperience.length > 0 &&
                  workExperience.map((work, index) => (
                    <WorkExperienceCard key={index} {...work} />
                  ))}
              </div>
            </Card>
          </div>
          <div className="flex-1">
            {/* Top Tech Section */}
            <Card className="bg-zinc-900/50 border-zinc-800 p-6 col-span-2 h-full">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-zinc-100">
                  Top Tech of 2024
                </h2>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                  {techStack.map((tech, index) => (
                    <div
                      key={index}
                      className="aspect-square relative rounded-lg bg-zinc-800/50 p-4 flex items-center justify-center hover:bg-zinc-800/70 transition-colors"
                    >
                      <Image
                        src={tech.icon || "/placeholder.svg"}
                        alt={tech.name}
                        width={40}
                        height={40}
                        className="opacity-50 hover:opacity-100 transition-opacity"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-zinc-100">
                  Top Tech of 2024
                </h2>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                  {techStack.map((tech, index) => (
                    <div
                      key={index}
                      className="aspect-square relative rounded-lg bg-zinc-800/50 p-4 flex items-center justify-center hover:bg-zinc-800/70 transition-colors"
                    >
                      <Image
                        src={tech.icon || "/placeholder.svg"}
                        alt={tech.name}
                        width={40}
                        height={40}
                        className="opacity-50 hover:opacity-100 transition-opacity"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Main Grid */}
        {/* <div className="grid md:grid-cols-2 gap-4 md:gap-6">



        </div> */}

        {/* Projects Section */}
        {/* <div className="grid md:grid-cols-2 gap-4 md:gap-6">



        </div> */}
      </div>
    </div>
  );
}
