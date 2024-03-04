import dbConnect from "@/db/dbConnect";
import Gallery from "@/models/galleryModel";
import { NextResponse } from "next/server";

export async function GET(req){
    dbConnect();
    try {
   
      const allImages = await Gallery.find({});
      return NextResponse.json({message:"Image successfully retrive",images:allImages,success: true,},{status:200})
    } catch (error) {
       return NextResponse.json({error:error},{status:500})
    }
  
  }