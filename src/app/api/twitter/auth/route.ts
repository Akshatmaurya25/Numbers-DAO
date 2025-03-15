import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
  try {
    const verifier = generateRandomString(64);
    const challenge = await generateChallenge(verifier);

    const response = NextResponse.redirect(
      `https://twitter.com/i/oauth2/authorize?${new URLSearchParams({
        response_type: 'code',
        client_id: process.env.TWITTER_CLIENT_ID!,
        redirect_uri: process.env.TWITTER_REDIRECT_URI!,
        scope: 'tweet.read users.read follows.read',
        state: crypto.randomUUID(),
        code_challenge: challenge,
        code_challenge_method: 'S256'
      })}`
    );

    // Set the code verifier in a cookie
    response.cookies.set('code_verifier', verifier, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 10
    });

    return response;
  } catch (error) {
    console.error('Twitter Auth Error:', error);
    return NextResponse.redirect('/error?message=auth_failed');
  }
}

function generateRandomString(length: number) {
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';
  const values = crypto.getRandomValues(new Uint8Array(length));
  return Array.from(values).map(x => possible[x % possible.length]).join('');
}

async function generateChallenge(verifier: string) {
  const encoder = new TextEncoder();
  const data = encoder.encode(verifier);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return base64URLEncode(new Uint8Array(digest));
}

function base64URLEncode(array: Uint8Array) {
  return btoa(String.fromCharCode(...array))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}
