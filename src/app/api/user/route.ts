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
    const body = await req.json();
    const { authId, achievements } = body;

    console.log('PATCH request received:', { authId, achievements });

    if (!authId) {
      return NextResponse.json(
        { error: 'authId is required', success: false },
        { status: 400 }
      );
    }

    // Find user first to verify existence
    const existingUser = await User.findOne({ authId });
    if (!existingUser) {
      return NextResponse.json(
        { error: 'User not found', success: false },
        { status: 404 }
      );
    }

    // Update with achievements
    const updatedUser = await User.findOneAndUpdate(
      { authId },
      { 
        $set: { 
          achievements: {
            projects: achievements.projects || [],
            milestones: achievements.milestones || [],
            workExperience: achievements.workExperience || []
          }
        } 
      },
      { new: true }
    );

    console.log('Updated user:', updatedUser);

    return NextResponse.json({
      success: true,
      msg: 'User updated successfully',
      result: updatedUser
    });
  } catch (error) {
    console.error('Update error:', error);
    return NextResponse.json(
      { error: 'Update failed', success: false },
      { status: 500 }
    );
  }
}
