'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import TwitterLoginButton from '@/components/ui/TwitterLoginButton';

export default function TwitterProfile() {
  const [profile, setProfile] = useState<any>(null);
  const [tweets, setTweets] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const accessToken = searchParams.get('access_token');

  useEffect(() => {
    if (!accessToken) {
      setLoading(false);
      return;
    }

    const fetchTwitterData = async () => {
      try {
        const response = await fetch(`/api/twitter/user?access_token=${accessToken}`);
        if (!response.ok) {
          throw new Error('Failed to fetch Twitter data');
        }
        const data = await response.json();
        console.log('Twitter API response:', data); // Debug log
        setProfile(data.profile);
        setTweets(data.tweets || []);
      } catch (err) {
        console.error('Error fetching Twitter data:', err);
        setError('Failed to load Twitter profile');
      } finally {
        setLoading(false);
      }
    };

    fetchTwitterData();
  }, [accessToken]);

  if (loading) return <div className="text-center p-4">Loading...</div>;
  if (error) return <div className="text-red-500 text-center p-4">{error}</div>;
  if (!accessToken) return <div className="text-center p-4"><TwitterLoginButton /></div>;
  if (!profile) return <div className="text-center p-4">No profile data available</div>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex items-center">
          <Image
            src={profile.profile_image_url}
            alt={profile.name}
            width={64}
            height={64}
            className="rounded-full"
          />
          <div className="ml-4">
            <h1 className="text-xl font-bold">{profile.name}</h1>
            <p className="text-gray-600">@{profile.username}</p>
          </div>
        </div>
        
        <p className="mt-4">{profile.description}</p>
        
        <div className="flex gap-4 mt-4">
          <div>
            <span className="font-bold">{profile?.public_metrics?.followers_count || 0}</span>
            <span className="text-gray-600"> Followers</span>
          </div>
          <div>
            <span className="font-bold">{profile?.public_metrics?.following_count || 0}</span>
            <span className="text-gray-600"> Following</span>
          </div>
          <div>
            <span className="font-bold">{profile?.public_metrics?.tweet_count || 0}</span>
            <span className="text-gray-600"> Tweets</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {tweets.map((tweet: any) => (
          <div key={tweet.id} className="bg-white rounded-lg shadow p-4">
            <p>{tweet.text}</p>
            <div className="flex gap-4 mt-2 text-sm text-gray-600">
              <span>{new Date(tweet.created_at).toLocaleDateString()}</span>
              <span>♥ {tweet.public_metrics.like_count}</span>
              <span>↺ {tweet.public_metrics.retweet_count}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
