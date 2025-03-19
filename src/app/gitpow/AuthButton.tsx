"use client";

import axios from "axios";
import { useSession, signIn, signOut } from "next-auth/react";

export default function AuthButton() {
  const { data: session } = useSession();
  console.log('Total contributions:', session?.user);

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

        {session.user.provider === "github" && (
            <div className="space-y-2 text-center bg-white p-4 rounded-lg shadow-md max-w-sm mx-auto w-80">
            <div className="flex items-center justify-center mb-4">
              {session.user.image && (
              <img 
                src={session.user.image} 
                alt="Profile" 
                className="w-20 h-20 rounded-full"
              />
              )}
            </div>
            <div className="mb-2">
              <p className="font-semibold text-gray-700">Email</p>
              <p className="text-gray-600">{session.user.email}</p>
            </div>
            <div className="flex gap-2">
              <div className="flex-1 bg-gray-50 p-2 rounded-lg">
              <p className="font-semibold text-gray-700 text-sm">Followers</p>
              <p className="text-base text-blue-600">{session.user.followers}</p>
              </div>
              <div className="flex-1 bg-gray-50 p-2 rounded-lg">
              <p className="font-semibold text-gray-700 text-sm">Public Repos</p>
              <p className="text-base text-blue-600">{session.user.public_repos}</p>
              </div>
            </div>
            <div className="bg-gray-50 p-2 rounded-lg">
              <p className="font-semibold text-gray-700 text-sm">Most Used Language</p>
              <p className="text-base text-green-600">{session.user.most_used_language}</p>
            </div>
            <div className="bg-gray-50 p-2 rounded-lg">
              <p className="font-semibold text-gray-700 text-sm">Total Contributions</p>
              <p className="text-base text-purple-600">{session.user.total_contributions}</p>
            </div>
            <div className="mt-2 bg-gray-50 p-2 rounded-lg">
              <p className="font-semibold text-gray-700 text-sm mb-2">Language Distribution</p>
              {session.user.language_percentages && 
              session.user.language_percentages.map(({ language, percentage }) => (
                <div key={language} className="flex justify-between items-center mb-1">
                <span className="text-gray-600 text-sm">{language}</span>
                <span className="text-blue-600 text-sm">{percentage}%</span>
                </div>
              ))
              }
            </div>
            </div>
        )}

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