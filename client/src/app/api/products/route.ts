import dbConnect from '@/libs/db';
import User from '@/models/Users';
import { NextResponse, type NextRequest } from 'next/server';

export const POST = async (request: NextRequest) => {
  const body = await request.json();

  await dbConnect();
  await User.create({
    name: 'hello world',
    email: 'hello@example.com',
    password: 'password'
  });

  console.log('Working');
  const response = NextResponse.json({ status: 200 });
  return response;
};
