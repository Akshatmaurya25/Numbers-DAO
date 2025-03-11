import { NextResponse } from 'next/server';
import axios from 'axios';

const LINKEDIN_CLIENT_ID = process.env.LINKEDIN_CLIENT_ID!;
const LINKEDIN_CLIENT_SECRET = process.env.LINKEDIN_CLIENT_SECRET!;
const REDIRECT_URI = process.env.LINKEDIN_REDIRECT_URI!;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const error = searchParams.get('error');
  const error_description = searchParams.get('error_description');

  if (error) {
    console.error('LinkedIn OAuth Error:', error, error_description);
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/linkedin?error=${error}`);
  }

  if (!code) {
    return NextResponse.json({ error: 'Authorization code required' }, { status: 400 });
  }

  try {
    const tokenResponse = await axios.post('https://www.linkedin.com/oauth/v2/accessToken', null, {
      params: {
        grant_type: 'authorization_code',
        code,
        client_id: LINKEDIN_CLIENT_ID,
        client_secret: LINKEDIN_CLIENT_SECRET,
        redirect_uri: REDIRECT_URI,
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const { access_token, expires_in } = tokenResponse.data;

    // Add console log to debug token response
    console.log('Token Response:', tokenResponse.data);

    // Redirect back to the frontend with the access token
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/linkedin?access_token=${access_token}`);
  } catch (error: any) {
    console.error('LinkedIn Token Error:', {
      message: error.message,
      response: error.response?.data
    });
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/linkedin?error=token_error`);
  }
}
