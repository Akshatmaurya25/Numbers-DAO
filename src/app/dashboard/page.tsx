"use client";
import React, { useEffect, useState } from "react";
import Dashboard from "./dashboard";
import { usePrivy } from "@privy-io/react-auth";
import axios, { AxiosRequestConfig } from "axios";
import { get } from "http";
import { useModal } from "@/context/ModalContext";
import { set } from "mongoose";

const page = () => {
  const { user } = usePrivy();
  const [loading, setLoading] = useState(true);
  const [User, setUser] = useState({});
  const [form, showForm] = useState(false);
  const { closeModal, openModal } = useModal();
  const [username, setUsername] = useState("");
  const createAccount = async () => {
    if (user) {
      const config: AxiosRequestConfig = {
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          authId: user.id,
          username: username,
        },
      };
      let res = await axios.post(`/api/user/`, config);
      console.log("Creating account");
      console.log(res.data);
    }
  };
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
          console.log(res.data, res.status);

          setUser(res.data);
          setLoading(false);
        } catch (error: any) {
          if (error.response?.status === 404) {
            setLoading(false);
            showForm(true);
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

  const FormUsername = () => (
    <div className="h-screen items-center justify-center flex flex-col text-black ">
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button className="bg-gray-400 " onClick={createAccount}>
        Submit
      </button>
    </div>
  );
  if (loading)
    return (
      <div className="h-screen text-black items-center justify-center flex">
        Loading
      </div>
    );
  if (form) return <FormUsername />;
  return (
    <>
      <Dashboard {...User} />
    </>
  );
};

export default page;
