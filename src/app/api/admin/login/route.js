
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import dbConnect from "@/db/dbConnect";
import User from "@/models/userModel";

export async function POST(request) {
    dbConnect();
  try {
    const reqBody = await request.json();
    // console.log("ccccccccc");
	const { email, password } = reqBody;

    if ( !email || !password) {
        return NextResponse.json(
          { message: "All fields are required" , success:false},
          { status: 401 }
        );
      }

    const user  = await User.findOne({email});
    if(!user){
        return NextResponse.json({message:'Email or password wrong', success:false}, {
            status: 401,
          });
    }
    const verifyPassword = await bcrypt.compare(password, user.password);
    if (!verifyPassword) {
        console.log("password verify")
        return NextResponse.json({ message: 'Invalid password', success:false }, { status: 401 });
    }

    const tokenData = {
        id: user._id,
        username: user.username,
        email: user.email,
    };
    const token =  jwt.sign(tokenData, process.env.JWT_TOKEN_SECRET, {
        expiresIn: '2d',
    });
    
    const response = NextResponse.json({
        message: 'Login Successful',
        success: true,
    }, { status: 200 });

    // send TOKEN to user's cookies
    response.cookies.set('token', token, { httpOnly: false,maxAge: 60 * 60 * 24 ,secure: process.env.NODE_ENV === "production",});
  
    return response;

  } catch (error) {
    console.log('error occure 400')
    return NextResponse.json({ error: error.message , success:false}, { status: 400 });
  }
 
}


