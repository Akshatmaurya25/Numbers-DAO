import { NextResponse } from 'next/server';

const LINKEDIN_CLIENT_ID = process.env.LINKEDIN_CLIENT_ID!;
const REDIRECT_URI = process.env.LINKEDIN_REDIRECT_URI!;

export async function GET() {
  try {
    // Update scopes to include all needed permissions
    const scopes = [
      'r_liteprofile',
      'w_member_social'
    ].join(' ');
    
    const authUrl = new URL('https://www.linkedin.com/oauth/v2/authorization');
    authUrl.searchParams.set('response_type', 'code');
    authUrl.searchParams.set('client_id', LINKEDIN_CLIENT_ID);
    authUrl.searchParams.set('redirect_uri', REDIRECT_URI);
    authUrl.searchParams.set('state', Date.now().toString());
    authUrl.searchParams.set('scope', scopes);

    console.log('Auth URL:', authUrl.toString());
    return NextResponse.redirect(authUrl.toString());
  } catch (error) {
    console.error('Auth Error:', error);
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/error?message=auth_failed`);
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    }
  });
}
