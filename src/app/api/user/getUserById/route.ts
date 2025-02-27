import  dbConnect  from '@/lib/db';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import User from '@/modal/user';

export async function GET(request: NextRequest) {
  const { id  } =await request.json();
  await dbConnect();
  const user =await User.findOne({ authId: id }).lean();
    console.log(user)
  if (user) {
    return NextResponse.json(user, { status: 200 });
  } else {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }
}
