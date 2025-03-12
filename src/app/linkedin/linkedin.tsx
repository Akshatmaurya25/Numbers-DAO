"use client";
import { useState, useEffect } from "react";
import axios from "axios";

interface LinkedInProfile {
  id: string;
  firstName: string;
  lastName: string;
  profilePicture: string;
  headline: string;
  connections: number;
  positions: {
    company: string;
    title: string;
  }[];
}

export default function FetchLinkedInData() {
  const [profileUrl, setProfileUrl] = useState<string>("");
  const [profile, setProfile] = useState<LinkedInProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const initiateLinkedInAuth = () => {
    window.location.href = '/api/linkedin/auth';
  };

  const fetchLinkedInData = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get('access_token');
    const errorParam = urlParams.get('error');

    if (errorParam) {
      setError(`Authentication error: ${errorParam}`);
      return;
    }

    if (!accessToken) {
      initiateLinkedInAuth();
      return;
    }

    setLoading(true);
    setError(null);

    try {
      console.log('Fetching with access token:', accessToken);
      const response = await axios.get(`/api/linkedin?access_token=${accessToken}`);
      
      console.log('Frontend received data:', response.data);
      
      if (response.data.error) {
        throw new Error(response.data.error);
      }
      
      setProfile(response.data);
    } catch (err: any) {
      console.error('Frontend Error:', err);
      setError(
        err.response?.data?.details || 
        err.response?.data?.error || 
        err.message || 
        "Error fetching LinkedIn data"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get('access_token');
    if (accessToken) {
      fetchLinkedInData();
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">LinkedIn Profile Data</h1>
      <input
        type="text"
        placeholder="Enter LinkedIn Profile URL"
        value={profileUrl}
        onChange={(e) => setProfileUrl(e.target.value)}
        className="border p-2 rounded w-64"
      />
      <button onClick={fetchLinkedInData} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
        Get Profile Data
      </button>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {profile && (
        <div className="mt-4 p-4 border rounded w-80">
          <img src={profile.profilePicture} alt={`${profile.firstName} ${profile.lastName}`} className="w-20 h-20 rounded-full mx-auto mb-2" />
          <h2 className="text-xl font-semibold">{`${profile.firstName} ${profile.lastName}`}</h2>
          <p className="text-gray-500">{profile.headline}</p>
          <p>Connections: {profile.connections}</p>
          
          <h3 className="mt-4 text-lg font-bold">Recent Positions</h3>
          <div className="mt-2">
            {profile.positions.map((position, index) => (
              <div key={index} className="mb-2">
                <p className="font-semibold">{position.title}</p>
                <p className="text-gray-600">{position.company}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
