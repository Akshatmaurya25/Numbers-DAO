import React from "react";
import Dashboard from "./dashboard";

async function getUserData(username: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/user/${username}`, {
      cache: "no-store", // Ensures fresh data on every request
    })
    if (!res.ok) throw new Error("User not found")
    return await res.json()
  } catch (error) {
    console.error("Error fetching user:", error)
    return null
  }
}

const page = async ({ params }: { params: { username: string } }) => {
  const user = await getUserData(params.username);

  if (!user) {
    return <div className="text-red-500 text-center mt-10">User not found</div>
  }

  return <Dashboard user={user} />

};

export default page;
