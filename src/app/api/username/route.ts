import dbConnect from '@/lib/db';
import { NextResponse, type NextRequest } from 'next/server';
import User from '@/modal/user';

export async function GET(
  request: NextRequest,
) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('query');
  
  if (!username) {
    return NextResponse.json({ error: 'Username query parameter is required' }, { status: 400 });
  }

  try {
    await dbConnect();
    const user = await User.findOne({ username }).lean();
    
    if (user) {
      return NextResponse.json(user, { status: 200 });
    } else {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}