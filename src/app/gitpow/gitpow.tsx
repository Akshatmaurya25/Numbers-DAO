"use client";
import { useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { config } from "dotenv";
config();

interface GitHubUser {
  login: string;
  name: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
}

interface GitHubRepo {
  language: string | null;
}

interface ContributionData {
  total: number;
}

interface GraphData {
  name: string;
  value: number;
}

export default function FetchGitHubData() {
  const [username, setUsername] = useState<string>("");
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [languages, setLanguages] = useState<GraphData[]>([]);
  const [contributions, setContributions] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchGitHubData = async () => {
    if (!username) return;
    setLoading(true);
    setError(null);

    try {

      // Verify token exists
      const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
      if (!token) {
        throw new Error('GitHub token not configured');
      }

      // Fetch GitHub user profile
      const userRes = await axios.get<GitHubUser>(`https://api.github.com/users/${username}`);

      // Fetch repositories
      const reposRes = await axios.get<GitHubRepo[]>(`https://api.github.com/users/${username}/repos?per_page=100`);

      // Analyze most used languages
      const languageCount: Record<string, number> = {};
      reposRes.data.forEach((repo) => {
        if (repo.language) {
          languageCount[repo.language] = (languageCount[repo.language] || 0) + 1;
        }
      });

      // Fetch contribution data from GitHub GraphQL API
      const graphQLQuery = {
        query: `
          query {
            user(login: "${username}") {
              contributionsCollection {
                contributionCalendar {
                  totalContributions
                }
              }
            }
          }
        `,
      };

      const graphQLRes = await axios.post(
        "https://api.github.com/graphql",
        graphQLQuery,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const totalContributions = graphQLRes.data.data.user.contributionsCollection.contributionCalendar.totalContributions;

      // Set data
      setUser(userRes.data);
      setContributions(totalContributions);
      setLanguages(Object.entries(languageCount).map(([lang, count]) => ({ name: lang, value: count })));
    } catch (err) {
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">GitHub Proof of Work</h1>
      <input
        type="text"
        placeholder="Enter GitHub Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 rounded w-64"
      />
      <button onClick={fetchGitHubData} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
        Get Proof of Work
      </button>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {user && (
        <div className="mt-4 p-4 border rounded w-80">
          <img src={user.avatar_url} alt={user.name} className="w-20 h-20 rounded-full mx-auto mb-2" />
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-500">@{user.login}</p>
          <p>Public Repos: {user.public_repos}</p>
          <p>Followers: {user.followers}</p>
          <p>Contributions (Last Year): {contributions}</p>

          <h3 className="mt-4 text-lg font-bold">Most Used Languages</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={languages}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#3182CE" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
