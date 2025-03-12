import { NextResponse } from 'next/server';
import axios from 'axios';

const LINKEDIN_CLIENT_ID = process.env.LINKEDIN_CLIENT_ID!;
const LINKEDIN_CLIENT_SECRET = process.env.LINKEDIN_CLIENT_SECRET!;
const REDIRECT_URI = process.env.LINKEDIN_REDIRECT_URI!;

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get('code');
    const error = searchParams.get('error');
    const error_description = searchParams.get('error_description');

    console.log('Callback Params:', {
      code,
      error,
      error_description,
      searchParams: Object.fromEntries(searchParams)
    });

    if (error || error_description) {
      console.error('LinkedIn returned an error:', { error, error_description });
      return NextResponse.redirect(
        `${process.env.NEXT_PUBLIC_APP_URL}/error?message=${encodeURIComponent(error_description || error || 'Unknown error')}`
      );
    }

    if (!code) {
      console.error('No authorization code received from LinkedIn');
      return NextResponse.redirect(
        `${process.env.NEXT_PUBLIC_APP_URL}/error?message=No authorization code received`
      );
    }

    const tokenResponse = await axios.post('https://www.linkedin.com/oauth/v2/accessToken', 
      new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        client_id: LINKEDIN_CLIENT_ID,
        client_secret: LINKEDIN_CLIENT_SECRET,
        redirect_uri: REDIRECT_URI,
      }).toString(),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
      }
    );

    console.log('Token Response:', tokenResponse.data);

    const { access_token } = tokenResponse.data;
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_APP_URL}/linkedin?access_token=${access_token}`
    );
  } catch (error: any) {
    console.error('LinkedIn OAuth Error:', {
      message: error.message,
      response: error.response?.data,
      stack: error.stack
    });
    
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_APP_URL}/error?message=${encodeURIComponent('Failed to complete authentication')}`
    );
  }
}
