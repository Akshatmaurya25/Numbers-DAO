import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const accessToken = searchParams.get('access_token');

  if (!accessToken) {
    return NextResponse.json({ error: 'Access token required' }, { status: 400 });
  }

  try {
    // Update user profile request to include public metrics
    const userResponse = await fetch(
      'https://api.twitter.com/2/users/me?user.fields=id,name,username,profile_image_url,description,public_metrics', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
      next: { revalidate: 60 }
    });

    const userData = await userResponse.json();
    console.log('User Response:', userData); // Debug log

    if (!userResponse.ok) {
      throw new Error(`Failed to fetch user profile: ${JSON.stringify(userData)}`);
    }

    // Only fetch tweets if we have a valid user ID
    if (!userData.data?.id) {
      throw new Error('User ID not found in response');
    }

    // Fetch user tweets with expanded error handling
    const tweetsResponse = await fetch(
      `https://api.twitter.com/2/users/${userData.data.id}/tweets`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
      next: { revalidate: 60 }
    });

    const tweetsData = await tweetsResponse.json();
    console.log('Tweets Response:', tweetsData); // Debug log

    if (!tweetsResponse.ok) {
      console.error('Twitter API Error:', tweetsData);
      // Return profile even if tweets fail
      return NextResponse.json({
        profile: userData.data,
        tweets: []
      });
    }

    return NextResponse.json({
      profile: userData.data,
      tweets: tweetsData.data || []
    });

  } catch (error: any) {
    console.error('Twitter API Error:', error);
    return NextResponse.json({ 
      error: error.message || 'Failed to fetch Twitter data'
    }, { 
      status: 500 
    });
  }
}
