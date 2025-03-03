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

const page = () => {
  const { user } = usePrivy();
  const [loading, setLoading] = useState(true);
  const [User, setUser] = useState<UserDocument>();
  const [form, showForm] = useState(false);

  const [username, setUsername] = useState("");
  const { closeModal, content, isOpen, openModal } = useModal();

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
          console.log("Hitting request");

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
    const [duplicate, setDuplicate] = useState("");
    const createAccount = async (data: Object) => {
      if (user) {
        const config: AxiosRequestConfig = {
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            authId: user.id,
            authData: user.wallet,
            ...data,
          },
        };
        try {
          let res = await axios.post(`/api/user/`, config);
          console.log("Creating account");
          console.log(res.data);
          closeModal();
          setUser(res.data);
        } catch (error) {
          const err = error as TypeError;
          console.error("Error creating account:", err.response?.data?.error);
          setDuplicate(String(err.response?.data?.error ?? "Not Available"));
        }
      }
    };
    const [data, setData] = useState({
      username,
    });
    return (
      <div className="h-fit p-6 items-center  gap-2 justify-center flex flex-col text-black ">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          className="text-black"
          value={data.username}
          onChange={(e) =>
            setData({ ...data, username: e.target.value.toLowerCase() })
          }
        />
        {duplicate && <p className="text-red-500">{duplicate}</p>}
        <div className="flex gap-2 ">
          <button
            className="bg-black text-white px-8 py-2 rounded "
            onClick={() => createAccount(data)}
          >
            Submit
          </button>
          <button
            className="border-black border-solid border-2  text-black px-8 py-2 rounded "
            onClick={() => closeModal}
          >
            Close
          </button>
        </div>
      </div>
    );
  };
  if (loading)
    return (
      <div className="h-screen text-black items-center justify-center flex">
        Loading
      </div>
    );

  return (
    <div className="bg-black text-white">
      <Header
        source={User?.profileImage}
        walletAddress={user?.wallet?.address}
      />
      <div className="max-w-7xl mx-auto border-b border-1 border-[#181717]"> 
sdsa
      </div>
      <Dashboard {...User} />
    </div>
  );
};

export default page;
