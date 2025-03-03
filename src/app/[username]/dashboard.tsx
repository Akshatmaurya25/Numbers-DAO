"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowUpRight,
  Circle,
  // Instagram,
  Linkedin,
  Send,
  // InstagramIcon as TiktokIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Header from "../dashboard/_components/Header";
import { usePrivy } from "@privy-io/react-auth";
// import User from '@/modal/user';

export default function Dashboard(props: any) {
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
                    {props.username || "Anonymous User"}
                  </h1>
                  <div className="flex items-start gap-4">
                    <Image
                      src={props.profileImage || "/placeholder.svg"}
                      alt="Profile"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Circle className="w-2 h-2 fill-green-500 text-green-500" />
                        <span className="text-zinc-400 text-sm">
                          {props.status}
                        </span>
                      </div>
                      <p className="text-zinc-300 text-sm">{props.bio}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Link href="#" className="hover:text-zinc-300">
                      <Linkedin className="w-4 h-4" />
                    </Link>
                    <Link href="#" className="hover:text-zinc-300">
                      <Circle className="w-4 h-4" />
                    </Link>
                    <Button
                      variant="secondary"
                      className="ml-auto gap-2 text-sm py-1"
                    >
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
              <Card className="bg-zinc-900/50 border-zinc-800 p-4 h-full">
                <div className="space-y-4">
                  <div>
                    <h2 className="text-xl font-bold text-purple-500">
                      Personal Milestones
                    </h2>
                    <p className="text-zinc-400 text-xsny mt-1">
                      Celebrating growth and achievement
                    </p>
                  </div>
                  <div className="space-y-4">
                    {props.milestones &&
                      props.milestones.map((milestone: any, index: number) => (
                        <div
                          key={index}
                          className="p-3 rounded-lg bg-zinc-800/50"
                        >
                          <h3 className="text-lg font-semibold text-white mb-1">
                            {milestone.title}
                          </h3>
                          <p className="text-zinc-400 text-xs">
                            {milestone.description}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-2/3">
              {/* DAO Achievements */}
              <Card className="bg-zinc-900/50 border-zinc-800 p-6 row-span-2 h-full">
                <div className="space-y-6 md:flex gap-4">
                  <div className="text-center flex flex-col items-center justify-center">
                    <h2 className="text-2xl font-bold text-orange-500">
                      DAO Achievements
                    </h2>
                    <p className="text-zinc-400 text-sm mt-1">
                      Key milestones in our web3 journey
                    </p>
                  </div>
                  <div className="space-y-4 h-[200px] overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-800">
                    {[
                      "First Community NFT Launch",
                      "Web3 Education Workshop Series",
                      "Local Developer Meetups",
                      "Smart Contract Deployment",
                      "Community Treasury Formation",
                    ].map((achievement) => (
                      <div
                        key={achievement}
                        className="flex items-center justify-between p-4 rounded-lg bg-zinc-800/50 hover:bg-zinc-800/70 transition-colors"
                      >
                        <span className="text-white">{achievement}</span>
                        <ArrowUpRight className="w-4 h-4 text-zinc-500" />
                      </div>
                    ))}
                  </div>
                </div>
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
        <div className="flex flex-col gap-4 md:w-[45%]">
          <div>
            <Card className="bg-zinc-900/50 border-zinc-800 p-6 col-span-2">
              <div className="space-y-6 text-center">
                <div>
                  <h2 className="text-2xl font-bold text-blue-500">
                    Community Initiatives
                  </h2>
                  <p className="text-zinc-400 text-sm mt-1">
                    Discover the projects and proposals that are shaping
                    Bhopal&apos;s web3 future
                  </p>
                </div>
                <div className="relative">
                  <div className="overflow-hidden rounded-lg">
                    <div className="relative aspect-[16/9]">
                      <Image
                        src={projects[currentSlide].image || "/placeholder.svg"}
                        alt="Project preview"
                        fill
                        className="object-cover"
                      />
                      {/* Device Mockups Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center gap-4">
                        <div className="bg-zinc-900/90 p-4 rounded-lg shadow-lg">
                          <div className="relative w-[300px] h-[200px] overflow-hidden rounded">
                            <Image
                              src={
                                projects[currentSlide].image ||
                                "/placeholder.svg"
                              }
                              alt="Desktop preview"
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <div className="bg-zinc-900/90 p-4 rounded-lg shadow-lg">
                          <div className="relative w-[100px] h-[200px] overflow-hidden rounded">
                            <Image
                              src={
                                projects[currentSlide].image ||
                                "/placeholder.svg"
                              }
                              alt="Mobile preview"
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 -left-4 right-auto">
                    <Button
                      variant="secondary"
                      size="icon"
                      className="rounded-full"
                      onClick={() =>
                        setCurrentSlide((prev) =>
                          prev > 0 ? prev - 1 : projects.length - 1
                        )
                      }
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 -right-4 left-auto">
                    <Button
                      variant="secondary"
                      size="icon"
                      className="rounded-full"
                      onClick={() =>
                        setCurrentSlide((prev) =>
                          prev < projects.length - 1 ? prev + 1 : 0
                        )
                      }
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
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
