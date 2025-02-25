import  dbConnect  from '@/lib/db';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import User from '@/modal/user';

export async function GET(request: NextRequest, { params }: { params: { username: string } }) {
  const { username } = params;
  await dbConnect();
  const user =await User.findOne({ username }).lean();
    console.log(user)
  if (user) {
    return NextResponse.json(user, { status: 200 });
  } else {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }
}
