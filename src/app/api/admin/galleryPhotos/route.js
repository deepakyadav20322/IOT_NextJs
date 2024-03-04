import dbConnect from "@/db/dbConnect";
import Gallery from "@/models/galleryModel";
import { NextResponse } from "next/server";


import cloudinary from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: 'dtylrk1zj', 
  api_key: '818812673898723', 
  api_secret: 'J9amCEkbsyniSwoPvmcU9e3AKyY' 
});



export async function POST(req){
    dbConnect();
    try {
      const reqbody = await req.json();
      const imageUploadData  = reqbody;
      
      if(!imageUploadData){
        console.log('that will run')
        return NextResponse.json({message:"Not get image "},{status:400});
      }
    
      const newImg = new  Gallery({
        galleryImg:imageUploadData
      });
      await newImg.save();
      return NextResponse.json({message:"Image uploaded successfully ",success: true,},{status:200})
  } catch (error) {
    return NextResponse.json({error:error},{status:500})
  }
}

export async function GET(req){
  dbConnect();
  try {
    const allImages = await Gallery.find({});
    return NextResponse.json({message:"Image successfully retrive ",images:allImages,success: true,},{status:200})
  } catch (error) {
     return NextResponse.json({error:error},{status:500})
  }

}

export async function DELETE(req){
  dbConnect()
  try {
    const reqbody = await req.json()
    console.log(reqbody)
    const {publicId,imgId} = reqbody;

    console.log(publicId);
    console.log(imgId);
    const imgData = await Gallery.findByIdAndDelete(imgId);
    cloudinary.uploader
    .destroy(publicId)
    .then((result) => {
      console.log(result)
    })
    .catch((error) => {
      return NextResponse.json({error:error},{status:500})
    });
     return NextResponse.json({message:"Image deleted successfully ",success: true,},{status:200})
  } catch (error) {
    console.log(error)
    return NextResponse.json({error:error},{status:500})
  }

}