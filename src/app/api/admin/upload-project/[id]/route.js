import Project from "@/models/projectModel";
import { isValidObjectId } from "@/utils/mongoObjIdValidator";
import { NextResponse } from "next/server";
const { default: dbConnect } = require("@/db/dbConnect");

import cloudinary from 'cloudinary';
import { validateTokenToAuthApi } from "@/lib/apiAuthorizationFun";
import { cookies } from "next/headers";
          
// cloudinary.config({ 
//   cloud_name: process.env.CLODINARY_CLOUD_NAME, 
//   api_key: process.env.CLODINARY_api_key, 
//   api_secret: process.env.CLODINARY_api_secret
// });
cloudinary.config({ 
  cloud_name: 'dtylrk1zj', 
  api_key: '818812673898723', 
  api_secret: 'J9amCEkbsyniSwoPvmcU9e3AKyY' 
});



export async function GET(req,ctx){
    dbConnect();
    const id = ctx.params.id;
 
    // const{accessToken,decodedToken} = validateTokenToAuthApi(req);
    //  if(!accessToken || !decodedToken){
    //   return NextResponse.json({message:"Unauthorized Request"},{status:400});
    //  }

  
    try {
     const checkId =  isValidObjectId(id);
     if(checkId==false){
      console.log("id not correct",checkId);
      return NextResponse.json({message:"Given id is not correct"},{status:404});
     }
        const singleData = await Project.findOne({_id:id});
    return NextResponse.json({singleData},{status:200});
    } catch (error) {
       
    return NextResponse.json({error},{status:500});
    }

}


export async function POST(req,ctx){
    dbConnect();
    const id = ctx.params.id
    try {
  const reqbody =await req.json();
 
  const findProject = await Project.findOne({_id:id});     

  if(findProject){
    const {projectData,imageUploadData} = (reqbody);
    const {title ,subTitle,description , uploadYear,category,videoLink}= projectData;
    if(imageUploadData){
    const {secure_url,public_id}= imageUploadData;
      if(!secure_url|| !public_id){
        return NextResponse.json(
            { message: "Not get Image Data" , success:false},
            { status: 400 }
          );
      }
    }
    if(!title || !subTitle || !description|| !uploadYear || !category){
      return NextResponse.json(
          { message: "All required field must be filled" , success:false},
          { status: 400 }
        );
    }
    
     if(!imageUploadData){
    let updatedProject = await Project.findByIdAndUpdate(
        id,
        { $set: {
                title,subTitle,description,uploadYear,category,videoLink} },
        { new: true } 
       
      );
      await updatedProject.save();
        }
        else{
          // Delete the previous image from cloudinary before changing -----------------
          cloudinary.uploader
          .destroy(imageUploadData.public_id)
          .then((result) => {
            console.log(result)
          })
          .catch((error) => {
            return NextResponse.json({error:error},{status:500})
          });


            let updatedProject = await Project.findByIdAndUpdate(
                id,
                { $set: {
                        title,subTitle,description,uploadYear,category,videoLink,mainImg:imageUploadData} },
                { new: true } // 
              );
              await updatedProject.save();
        }
      
   return NextResponse.json(
    { message: "Project successfully updated" , success:true},
    { status: 200 }
  );

  }else{
    return NextResponse.json({ message: 'project not found' , success:false}, { status: 404 });
  }
  
    } catch (error) {
        console.log('catch error occure 500',error)
        return NextResponse.json({ error: error.message , success:false}, { status: 500 });
    }
} 


export async function DELETE(req,ctx){
    dbConnect();
    const id = ctx.params.id
    console.log(id)
    try {
     const checkId =  isValidObjectId(id);
     if(checkId==false){
      console.log("id not correct",checkId);
      return NextResponse.json({message:"Given id is not correct"},{status:404});
     }
        const singleData = await Project.findOne({_id:id});
        const pubId = (singleData.mainImg.public_id);
      console.log(singleData.mainImg.public_id);

        if(!singleData){
          return NextResponse.json({message:"Data not found"},{status:400});
        } 

            // delete the  Data from database
            
           const deletedData=await Project.findByIdAndDelete(id);
             console.log(deletedData)
             if(!deletedData){
              return NextResponse.json({message:"Error during Data deletion"},{status:400});
             }

            //Now delete image from cluodinary.
            cloudinary.uploader
            .destroy(pubId)
            .then((result) => {
              console.log(result)
            })
            .catch((error) => {
              return NextResponse.json({error:error},{status:500})
            });
           
       
       

         return NextResponse.json({message:"Project data deleted successfully"},{status:200});
  } catch (error) {
    console.log(error)
    return NextResponse.json({message:"server error", error: error.message , success:false}, { status: 500 });
  }
}
