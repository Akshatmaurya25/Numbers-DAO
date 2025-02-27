'use client'
import React, { useState } from "react";
import Dashboard from "./dashboard";
import { usePrivy } from "@privy-io/react-auth";
import axios, { AxiosRequestConfig } from "axios";

const page = async () => {
  const { user } = usePrivy();
  const [loading, setLoading] = useState(true);
  const [User, setUser] = useState({});

 const createAccount = async (id:string) => {
      if(user){
        const config: AxiosRequestConfig = {
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            id: user.id,
          },
      }
 }
}

  if (user) {
    const config: AxiosRequestConfig = {
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        id: user.id,
      },
     
    };
    let res = await axios.get(`/api/getUserById`, config);
    console.log(res.data, res.status);
if(res.status == 404){
  createAccount(user.id)
}
    setUser(res.data);
  }

  if (loading) return <div>Loading</div>;
  return (
    <>
      <Dashboard />
    </>
  );
};

export default page;
