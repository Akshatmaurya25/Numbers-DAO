import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const accessToken = searchParams.get('access_token');

  if (!accessToken) {
    return NextResponse.json({ error: 'Access token required' }, { status: 400 });
  }

  try {
    // Fetch profile data with all fields
    const profileResponse = await axios.get('https://api.linkedin.com/v2/me', {
      params: {
        projection: '(id,localizedFirstName,localizedLastName,headline,profilePicture(displayImage~:playableStreams))'
      },
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'X-Restli-Protocol-Version': '2.0.0',
        'Content-Type': 'application/json',
      }
    });

    console.log('Raw Profile Response:', profileResponse.data);

    const profileData = {
      id: profileResponse.data.id,
      firstName: profileResponse.data.localizedFirstName,
      lastName: profileResponse.data.localizedLastName,
      headline: profileResponse.data.headline,
      pictureUrl: profileResponse.data.profilePicture?.['displayImage~']?.elements?.[0]?.identifiers?.[0]?.identifier
    };

    console.log('Transformed Profile Data:', profileData);
    return NextResponse.json(profileData);
  } catch (error: any) {
    console.error('LinkedIn API Error:', {
      message: error.message,
      response: error.response?.data,
    });
    return NextResponse.json({ 
      error: 'Failed to fetch LinkedIn data',
      details: error.response?.data || error.message 
    }, { 
      status: error.response?.status || 500 
    });
  }
}
