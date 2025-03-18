import { NextResponse } from 'next/server';
import DbConnect from "@/lib/db";
import SocialMedia from "@/modal/social";
import mongoose from 'mongoose';

export async function POST(request: Request) {
  await DbConnect();

  try {
    const body = await request.json();
    const { userId, socialScore, github, twitter } = body;

    console.log('Received POST request with body:', body);

    if (!userId) {
      console.error('Missing userId in request');
      return NextResponse.json({ error: "Invalid or missing User ID" }, { status: 400 });
    }

    let objectId;
    try {
      objectId = new mongoose.Types.ObjectId(userId);
    } catch (error) {
      console.error('Invalid ObjectId format:', userId);
      return NextResponse.json({ error: "Invalid User ID format" }, { status: 400 });
    }

    const existingSocialMedia = await SocialMedia.findOne({ userId: objectId });
    console.log('Existing social media:', existingSocialMedia);

    let result;
    if (existingSocialMedia) {
      result = await SocialMedia.findOneAndUpdate(
        { userId: objectId },
        { 
          $set: { 
            socialScore: socialScore || existingSocialMedia.socialScore,
            ...(github && { github }),
            ...(twitter && { twitter })
          } 
        },
        { new: true }
      );
    } else {
      result = await new SocialMedia({ 
        userId: objectId, 
        socialScore,
        github,
        twitter
      }).save();
    }

    console.log('Operation result:', result);
    return NextResponse.json(result);
  } catch (error) {
    console.error('Detailed error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "An unknown error occurred" },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  await DbConnect();
  
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json({ error: "Invalid User ID" }, { status: 400 });
    }

    // Convert string userId to ObjectId
    let objectId;
    try {
      objectId = new mongoose.Types.ObjectId(userId);
    } catch (error) {
      return NextResponse.json({ error: "Invalid User ID format" }, { status: 400 });
    }

    const socialMedia = await SocialMedia.findOne({ userId: objectId });

    if (!socialMedia) {
      return NextResponse.json({ error: "No social media data found for this user" }, { status: 404 });
    }

    return NextResponse.json(socialMedia);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "An unknown error occurred" },
      { status: 500 }
    );
  }
}
