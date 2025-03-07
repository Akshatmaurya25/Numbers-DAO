// app/api/user/route.ts
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import User from '@/modal/user';

export async function GET() {
  try {
    console.log('⭐ GET Request started');
    await dbConnect();
    console.log('📀 Database connected');

    const users = await User.find({});
    console.log('👥 Users found:', users.length);
    
    return NextResponse.json({
        result: users,
        msg: "User fetched successfully",
        success: true,
        status:200
    });
  } catch (error) {
    console.error('❌ Error in GET request:', error);
    return NextResponse.json(
      
      { error: `Failed to fetch users ${error} ` },
      { status: 500 }
    );
  }
}

type errorType={
  errorResponse: object
}
const BannedUsername= [
  "dashboard", "test", "privacy-policy","team","about", "contact", "blog"
]
export async function POST(req: Request) {
  try {
    await dbConnect();
    
    const user = await req.json();
    console.log("user=>",user);
    if (BannedUsername.includes(user.data.username)){
      return NextResponse.json(
        { error: `Some keywords cannot be used as username.`,
       }, 
        { status: 409 }
      );
    }
    
    await User.create(user.data);
    
    return NextResponse.json({
      msg: "User created successfully",
      success: true,
      status: 200
    });
  } catch (error: unknown) {
    if (error instanceof Error && error.message.includes('E11000')) {

      const mongoError = error as any;
      console.log(mongoError.keyValue);
      return NextResponse.json(
        { error: `Duplicate Key found ${Object.keys(mongoError.keyValue)[0]}`,
         duplicate : Object.keys(mongoError.keyValue)[0] }, 
        { status: 409 }
      );
    } else {
      console.log('An unknown error occurred', error);
    }
    return NextResponse.json(
      { error: 'Failed to create user' }, // Fixed error message to match the POST operation
      { status: 500 }
    );
  }
}

export async function PATCH(req: Request) {
  try {
    await dbConnect();
    const { authId, socials, ...updatedData } = await req.json();

    console.log(`Updating user ${authId} with data:`, updatedData);

    const updateFields: any = { ...updatedData };


    if (socials) {
      Object.keys(socials).forEach((key) => {
        updateFields[`socials.${key}`] = socials[key]; 
      });
    }

    const user = await User.findOneAndUpdate(
      { authId },
      { $set: updateFields }, 
      { new: true }
    );

    console.log("Updated user:", user);

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      msg: "User updated successfully",
      success: true,
      status: 200,
      result: user,
    });
  } catch (error) {
    console.log("Failed to update user:", error);
    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
    );
  }
}

