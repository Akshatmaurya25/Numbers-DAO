"use client";

import axios from "axios";
import { useSession, signIn, signOut } from "next-auth/react";

export default function AuthButton() {
  const { data: session } = useSession();

  const handleSignIn = async (provider: string) => {
    switch (provider) {
      case "github":
        await signIn("github");

        break;

      default:
        break;
    }
  };
  if (session?.user) {
    return (
      <div className="flex flex-col items-center p-4">
        <div className="mb-4 text-center">
          <h2 className="text-xl font-bold">Welcome, {session.user.name}!</h2>
          <p className="text-gray-600">
            {/* Signed in with: {session.user.provider} */}
          </p>
        </div>

        {/* {session.user.provider === "github" && (
          <div className="space-y-2 text-center">
            <p>Followers: {session.user.followers}</p>
            <p>Public Repositories: {session.user.public_repos}</p>
            <p>Most Used Language: {session.user.most_used_language}</p>
            <p>Total Contributions: {session.user.contribution_count}</p>
          </div>
        )} */}

        {/* {session.user.provider === 'linkedin' && (
                <div className="space-y-2 text-center">
                    <p>First Name: {session.user.firstName}</p>
                    <p>Last Name: {session.user.lastName}</p>
                    <p>Headline: {session.user.headline}</p>
                    {session.user.profilePicture && (
                        <img 
                            src={session.user.profilePicture} 
                            alt="LinkedIn Profile" 
                            className="w-20 h-20 rounded-full mx-auto"
                        />
                    )}
                </div>
            )} */}

        <button
          onClick={() => signOut()}
          className="bg-red-500 text-white p-2 rounded mt-4 hover:bg-red-600"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center p-4">
      <h2 className="text-xl font-bold">
        Sign in to view your GitHub Proof of Work
      </h2>
      <div className="space-x-4">
        <button
          onClick={() => handleSignIn("github")}
          className="bg-gray-800 text-white p-2 rounded m-2 hover:bg-gray-900"
        >
          Sign in with GitHub
        </button>
        <button
          onClick={() => signIn("linkedin")}
          className="bg-blue-600 text-white p-2 rounded m-2 hover:bg-blue-700"
        >
          Sign in with LinkedIn
        </button>
      </div>
    </div>
  );
}
