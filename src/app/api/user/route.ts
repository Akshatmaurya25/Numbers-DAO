// app/api/user/route.ts
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import User from '@/modal/user';

export async function GET() {
  try {
    await dbConnect();
    const users = await User.find({});
    return NextResponse.json({
        result: users,
        msg: "User fetched successfully",
        success: true,
        status:200
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 }
    );
  }
}


export async function POST(req: Request) {
  try {
    await dbConnect();
    
    // In App Router, you need to extract the body with await req.json()
    const user = await req.json();
    console.log(user);
    
    await User.create(user);
    
    return NextResponse.json({
      msg: "User created successfully",
      success: true,
      status: 200
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create user' }, // Fixed error message to match the POST operation
      { status: 500 }
    );
  }
}