"use client";
import React, { use, useEffect, useState } from "react";
import Dashboard from "../[username]/dashboard";
import { usePrivy } from "@privy-io/react-auth";
import axios, { AxiosRequestConfig } from "axios";
import { get } from "http";
import { useModal } from "@/context/ModalContext";
import { set } from "mongoose";
import Header from "./_components/Header";
import { UserDocument } from "@/modal/interfacetypes";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import EditPage from "./edit/EditPage";
import { AvatarGenerator } from "random-avatar-generator";
import { Loader } from "@/components/ui/loader";
import Image from "next/image";
import Chat from "../test/page";
const page = () => {
  const { user } = usePrivy();
  const [loading, setLoading] = useState(true);
  const [User, setUser] = useState<UserDocument>();
  const [form, showForm] = useState(false);
  const [activated, setActivated] = useState("Portfolio");
  const [username, setUsername] = useState("");
  const { closeModal, content, isOpen, openModal } = useModal();
  const generator = new AvatarGenerator();

  useEffect(() => {
    const getUser = async () => {
      if (user) {
        const config: AxiosRequestConfig = {
          headers: {
            "Content-Type": "application/json",
          },
          params: {
            id: user.id,
          },
        };

        try {
          const res = await axios.get(`/api/user/getUserById`, config);
          console.log("User data received:", res.data); // Add this line to debug
          setUser(res.data);
          setLoading(false);
        } catch (error: any) {
          if (error.response?.status === 404) {
            setLoading(false);
            openModal(<FormUsername />);
            console.log("No account found. Creating one");
            // openModal(modal)
          } else {
            console.error("Error fetching user:", error);
          }
        }
      }
    };
    getUser();
  }, [user]);
  type TypeError = {
    response?: {
      data?: {
        error?: String;
      };
    };
  };
  const FormUsername = () => {
    const [tab, setTab] = useState(1);
    const [duplicate, setDuplicate] = useState("");
    const [data, setData] = useState({
      username,
      email: "",
      contact: "",
      gender: "",
    });
    const createAccount = async (data: {
      username: string;
      email: string;
      contact: string;
      gender: string;
    }) => {
      if (!data.username || !data.email || !data.gender) {
        return setDuplicate("All required are not provided.");
      }
      if (user) {
        const imageLink = generator.generateRandomAvatar();
        console.log(imageLink);
        const config: AxiosRequestConfig = {
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            authId: user.id,
            authData: user.wallet,
            profileImage: imageLink,
            ...data,
          },
        };
        try {
          let res = await axios.post(`/api/user/`, config);
          console.log("Creating account");
          console.log(res.data);
          closeModal();
          setUser(res.data.resultdi);
        } catch (error) {
          const err = error as TypeError;
          console.error("Error creating account:", err.response?.data?.error);
          setDuplicate(String(err.response?.data?.error ?? "Not Available"));
        }
      }
    };

    return (
      <div className="h-fit p-6 min-h-96 items-center  gap-2 justify-center flex flex-col text-black ">
        <div className="min-h-68 flex items-center flex-col gap-2 justify-center text-center">
          {tab == 1 && (
            <>
              <Image
                height={200}
                width={200}
                src="/onboarding/tab1.svg"
                alt={`${tab}`}
              />
              <h1 className="text-2xl"> Lets get started </h1>
              <p className="text-sm">
                Let get started with some of details which will help understand
                you better
              </p>
            </>
          )}
          {tab == 2 && (
            <>
              <Image
                height={200}
                width={200}
                src="/onboarding/tab2.svg"
                alt={`${tab}`}
              />
              <h1 className="text-2xl">Provide your information</h1>
              <p className="text-sm">
                Provide information about yourself, your work, milestone and
                experience.
              </p>
            </>
          )}
          {tab == 3 && (
            <>
              <Image
                height={200}
                width={200}
                src="/onboarding/tab3.svg"
                alt={`${tab}`}
              />
              <h1 className="text-2xl">Build Portfolio</h1>
              <p className="text-sm">
                Build a industry level protfolio to showcase your work.
              </p>
            </>
          )}
          {tab == 4 && (
            <>
              <div className="flex flex-col gap-2 items-start">
                <label htmlFor="username">
                  Username<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="username"
                  className="text-black w-[260px] p-2 outline-gray-500 bg-[#f0f0f0] rounded"
                  value={data.username}
                  onChange={(e) =>
                    setData({ ...data, username: e.target.value.toLowerCase() })
                  }
                />

                <label htmlFor="email">
                  Email<span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="text-black w-[260px] p-2 outline-gray-500 bg-[#f0f0f0] rounded"
                  value={data.email}
                  onChange={(e) =>
                    setData({ ...data, email: e.target.value.toLowerCase() })
                  }
                />
                <label htmlFor="contact">Contact </label>
                <input
                  type="tel"
                  id="contact"
                  className="text-black w-[260px] p-2 outline-gray-500 bg-[#f0f0f0] rounded"
                  value={data.contact}
                  onChange={(e) =>
                    setData({ ...data, contact: e.target.value.toLowerCase() })
                  }
                />
                <label htmlFor="gender">
                  Gender<span className="text-red-600">*</span>{" "}
                </label>
                <div className="flex items-center gap-2 ">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    id="male"
                    className="text-black p-2 outline-gray-500 bg-[#f0f0f0] rounded"
                    onChange={(e) =>
                      setData({ ...data, gender: e.target.value })
                    }
                  />
                  <label htmlFor="male" className="">
                    Male
                  </label>

                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    id="female"
                    className="text-black p-2 outline-gray-500 bg-[#f0f0f0] rounded"
                    onChange={(e) =>
                      setData({ ...data, gender: e.target.value })
                    }
                  />
                  <label htmlFor="female" className="">
                    Female
                  </label>
                </div>
                {duplicate && <p className="text-red-500">{duplicate}</p>}
              </div>
            </>
          )}
        </div>
        <div className="flex gap-2 my-2 justify-center items-center">
          {[1, 2, 3, 4].map((t, index) => (
            <div
              key={index}
              className={`h-1 w-1 rounded-full transition-all duration-200 ${
                t === tab ? "bg-[#3a3a3a] scale-125" : "bg-[#acacac]"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2 ">
          <button
            className="border-black border-solid border-2 min-w-[140px]  text-black px-8 py-2 rounded "
            onClick={() => {
              if (tab > 1) setTab(tab - 1);
            }}
          >
            Previous
          </button>
          <button
            className="bg-black w-fit min-w-[140px] text-white px-8 py-2 rounded "
            onClick={() => {
              if (tab === 4) {
                createAccount(data);
              } else setTab(tab + 1);
            }}
          >
            {tab == 4 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    );
  };
  if (loading) return <Loader />;

  return (
    <div className="bg-black text-white  px-2 md:px-3 lg:px-0">
      <Header
        source={User?.profileImage}
        walletAddress={user?.wallet?.address}
      />
      <div className="max-w-7xl mx-auto flex justify-between border-b border-1 border-[#181717]">
        <div className="flex gap-4 ">
          <span
            onClick={() => setActivated("Portfolio")}
            className={`px-2 cursor-pointer ${
              activated == "Portfolio"
                ? "text-white border-b border-white"
                : "text-[#363636]"
            }`}
          >
            Portfolio
          </span>
          <span
            onClick={() => setActivated("Edit")}
            className={`px-2 cursor-pointer ${
              activated == "Edit"
                ? "text-white border-b border-white"
                : "text-[#363636]"
            }`}
          >
            Edit
          </span>
          <span
            onClick={() => setActivated("Chat")}
            className={`px-2 cursor-pointer ${
              activated == "Edit"
                ? "text-white border-b border-white"
                : "text-[#363636]"
            }`}
          >
            Chat
          </span>
        </div>
        <Link target="blank" href={`/${User?.username}`}>
          <Button className="text-black bg-white px-6 py-2">Preview</Button>
        </Link>
      </div>

      {activated == "Portfolio" && <Dashboard {...User} />}
      {activated == "Chat" && <Chat />}
      {activated == "Edit" && (
        <div className="flex justify-center items-center ">
          <EditPage {...(User as UserDocument)} />
        </div>
      )}
    </div>
  );
};

export default page;
