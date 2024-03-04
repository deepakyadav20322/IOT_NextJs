import Project from "@/models/projectModel";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from 'jsonwebtoken'
import User from "@/models/userModel";
const { default: dbConnect } = require("@/db/dbConnect");


export async function GET(req){
  dbConnect();

    try {
        const allData = await Project.find();
    return NextResponse.json({allData},{status:200});
    } catch (error) {
       
    return NextResponse.json({error},{status:500});
    }
    
}

export async function POST(req){
        dbConnect();
        try {

// ---------------------------------------------

const cookiesObject = cookies();
const cookieToken = cookiesObject.get('token');
if(cookieToken){
const tokenValue = cookieToken?.value;
const decode  = jwt.verify(tokenValue, process.env.JWT_TOKEN_SECRET);
// check user present or not in dataBase-
const isValiedUser = await User.findById({_id:decode.id});

if(!isValiedUser){
 return NextResponse.json({'message':"Unauthorized Access"},{status:401});
}
}else{
  return NextResponse.json({'message':"Please provide token"},{status:400});
}
// -----------------------------------------


      const reqbody =await req.json();
      const {projectData,imageUploadData,pdfUploadData} = (reqbody);
      const {title ,subTitle,description , uploadYear,category,videoLink}= projectData;
      const {secure_url,public_id}= imageUploadData;
      
      if(!title || !subTitle || !description|| !uploadYear || !category || !secure_url || !public_id){
        return NextResponse.json(
            { message: "All required field must be filled" , success:false},
            { status: 400 }
          );
      }

      const saveData = new Project({
        title,subTitle,description,uploadYear,category,videoLink,
        mainImg:imageUploadData,mainPdf:pdfUploadData || "",
      });
      await saveData.save();
       return NextResponse.json(
        { message: "Project successfully upload" , success:true},
        { status: 200 }
      );
        } catch (error) {
            console.log('catch error occure 500',error)
            return NextResponse.json({ error: error.message , success:false}, { status: 500 });
        }
  } 

 
