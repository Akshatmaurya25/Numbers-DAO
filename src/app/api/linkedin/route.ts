import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const accessToken = searchParams.get('access_token');

  if (!accessToken) {
    return NextResponse.json({ error: 'Access token required' }, { status: 400 });
  }

  try {
    // Single API call with all needed fields
    const response = await axios.get('https://api.linkedin.com/v2/me', {
      params: {
        projection: '(id,localizedFirstName,localizedLastName,headline,profilePicture(displayImage~:playableStreams),positions)'
      },
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'X-Restli-Protocol-Version': '2.0.0',
        'Content-Type': 'application/json',
      }
    });

    console.log('Raw LinkedIn Response:', JSON.stringify(response.data, null, 2));

    // Simplified data transformation
    const profileData = {
      id: response.data.id,
      firstName: response.data.localizedFirstName || '',
      lastName: response.data.localizedLastName || '',
      profilePicture: response.data.profilePicture?.['displayImage~']?.elements?.[0]?.identifiers?.[0]?.identifier || '',
      headline: response.data.headline || '',
      connections: 0, // LinkedIn API v2 doesn't provide connection count
      positions: response.data.positions?.values?.map((pos: any) => ({
        company: pos.companyName || '',
        title: pos.title || ''
      })) || []
    };

    console.log('Transformed Profile Data:', profileData);
    return NextResponse.json(profileData);
  } catch (error: any) {
    console.error('LinkedIn API Error:', {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data
    });
    return NextResponse.json({ 
      error: 'Failed to fetch LinkedIn data',
      details: error.response?.data || error.message
    }, { status: error.response?.status || 500 });
  }
}
