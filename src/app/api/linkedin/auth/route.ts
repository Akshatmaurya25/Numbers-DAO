import { NextResponse } from 'next/server';

const LINKEDIN_CLIENT_ID = process.env.LINKEDIN_CLIENT_ID!;
const REDIRECT_URI = process.env.LINKEDIN_REDIRECT_URI!;

export async function GET() {
  const scopes = [
    'r_liteprofile',
    'r_emailaddress',
    'w_member_social'
  ].join(' ');
  
  const state = Math.random().toString(36).substring(7);
  const authUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${LINKEDIN_CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&state=${state}&scope=${encodeURIComponent(scopes)}`;
  
  console.log('Auth URL:', authUrl);
  return NextResponse.redirect(authUrl);
}
