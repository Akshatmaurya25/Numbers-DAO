import  dbConnect  from '@/lib/db';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import User from '@/modal/user';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  console.log('ID from query params:', id);
  await dbConnect();
  const user =await User.findOne({ authId: id }).lean();

  if (user) {
    return NextResponse.json(user, { status: 200 });
  } else {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }
}
