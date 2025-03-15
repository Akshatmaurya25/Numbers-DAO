import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  
  if (!code) {
    return NextResponse.redirect(`${baseUrl}/error?message=no_code`);
  }

  try {
    const cookieStore = await cookies();
    const codeVerifier = cookieStore.get('code_verifier')?.value;

    if (!codeVerifier) {
      throw new Error('No code verifier found');
    }

    const tokenResponse = await fetch('https://api.twitter.com/2/oauth2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: process.env.TWITTER_CLIENT_ID!,
        client_secret: process.env.TWITTER_CLIENT_SECRET!,
        code,
        grant_type: 'authorization_code',
        redirect_uri: process.env.TWITTER_REDIRECT_URI!,
        code_verifier: codeVerifier
      })
    });

    const data = await tokenResponse.json();
    console.log('Token response:', data);

    if (!tokenResponse.ok) {
      console.error('Token error:', data);
      throw new Error(data.error_description || 'Failed to get access token');
    }

    // Clear the code_verifier cookie and redirect with absolute URL
    const response = NextResponse.redirect(`${baseUrl}/twitter?access_token=${data.access_token}`);
    response.cookies.delete('code_verifier');
    
    return response;

  } catch (error) {
    console.error('Twitter Token Error:', error);
    return NextResponse.redirect(`${baseUrl}/error?message=token_error`);
  }
}
