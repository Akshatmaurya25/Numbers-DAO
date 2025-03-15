"use client";

import React, { useEffect, useState } from "react";
import Dashboard from "./dashboard";
import { usePrivy } from "@privy-io/react-auth";
import axios from "axios";
import { useParams } from "next/navigation";
import LogoLoader from "@/components/ui/LogoLoader";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const [loading, setLoading] = useState(true);
  const { username } = useParams();
  const { user } = usePrivy();
  const [userData, setUserdata] = useState({});
  const [notFound, setNotFound] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`/api/username?query=${username}`);

        console.log("Response:", response.data); // Log actual data
        setUserdata(response.data); // Update state with data
        setLoading(false); // Update loading state on success
      } catch (error) {
        console.error("Error fetching data:", error);
        if (axios.isAxiosError(error) && error.response?.status === 404) {
          setNotFound(true);
        }
        setLoading(false); // Still update loading on error (optional)
      }
    };

    if (username) {
      getData(); // Call the async function only if username exists
    } else {
      console.warn("No username provided");
      setLoading(false); // Exit loading if no username
    }
  }, [username]); // Re-run if username changes

  if (loading) {
    return (
      <div className="h-screen items-center justify-center flex text-black">
        {/* <p>Loading...</p> */}
        <LogoLoader black={true} />
      </div>
    );
  }

  return (
    <div>
      {notFound ? (
        <div className="h-screen flex  flex-col items-center justify-center bg-black text-white">
          <Link href={"/"}>
            <Image height={400} width={400} src={"/logo-2.png"} alt="Logo" />
          </Link>
          <h3>Not found</h3>
        </div>
      ) : (
        <Dashboard {...userData} />
      )}
    </div>
  );
};

export default Page;
