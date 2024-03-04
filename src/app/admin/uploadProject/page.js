// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
"use client";
import { toastProperties } from "@/utils/toastClass";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export default function uploadProject() {

  const router = useRouter()
  const [mainImg, setMainImg] = useState("");
  const [mainPdf, setMainPdf] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [projectData, setProjectData] = useState({
    title: "",
    subTitle: "",
    videoLink: "",
    category: "",
    uploadYear: "",
    description: "",
  });

  function previewFile(e) {
    setMainImg(e.target.files[0])
    // Reading New File (open file Picker Box)
    const reader = new FileReader();
    // Gettting Selected File (user can select multiple but we are choosing only one)
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      reader.readAsDataURL(selectedFile);
    }
    // As the File loaded then set the stage as per the file type
    reader.onload = (readerEvent) => {
      if (selectedFile.type.includes("image")) {
        setImagePreview(readerEvent.target.result);
      }
    };
  }
  
// ---------------------------------------------------
  const uploadFile = async (type)=>{
    const data = new FormData();
    if(type=='pdf'){
      data.append('file',mainPdf);
    }else{
      data.append('file',mainImg);
    }

    data.append('upload_preset',process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET);
    try {
      let cloudName = process.env.NEXT_PUBLIC_CLODINARY_CLOUD_NAME;
      let api = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;  

       const res = await axios.post(api,data,{
        headers:{
          'Content-Type':'multipart/form-data'
        }
       });
       const {secure_url,public_id}  = res.data;
       return {secure_url,public_id } ;

    } catch (error) {
      console.log('error when file uploaded... ',error);
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProjectData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handelSubmit = async(e) => {
    e.preventDefault();
    const {title,subTitle,category,uploadYear,description} =  projectData;

    if(!title || !subTitle || !description|| !uploadYear || !category){
      toast.error('All required fields must filled', toastProperties)
        return;
    }
    if(!mainImg ){
      toast.error('Project main image not selected', toastProperties)
        return;
    }
    const imageUploadData = await uploadFile('image');
    if(mainPdf){
      // it do because pdf upload is optional
    var pdfUploadData = await uploadFile('pdf');
    }
   
    if(!imageUploadData){
      toast.error('Error in image uploading', toastProperties)
        return;
    }
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_baseURL}/api/admin/upload-project`, {projectData,imageUploadData,pdfUploadData}, {
      headers: {
        "Content-Type": "application/json",
      },
    });
      if(res.status ===200){
        toast.success('Project upload successfully', toastProperties) ;
        router.push('/admin/dashboard?comp=All-Projects');
      }
    } catch (error) {
      toast.error('Server Error',toastProperties) 
    }
    
  };

  return (
    <div className="max-w-7xl w-full m-auto border-[1px] border-[#222121aa] flex justify-center items-center my-8 md:py-8 py-4 px-3 sm:px-0">
      <form onSubmit={handelSubmit}>
        <div className="space-y-12">
          <div className="border-b-2 border-gray-600 pb-3">
            <h2 className="text-base md:text-2xl font-bold leading-7 border-2 w-full ps-2 bg-blue-900 text-white py-2 rounded-md">
              Upload New Project
            </h2>
            <p className=" mt-2 text-sm leading-6 text-blue-900 ">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>

          <div className="pb-4">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Project Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Use verified and correct information.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8">
              <div className="sm:col-span-4">
                <label
                  htmlFor="title"
                  className="after:content-['*'] after:text-red-500  after:text-lg block text-sm font-medium leading-6 text-gray-900"
                >
                  1. Project Title
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    onChange={handleChange}
                    value={projectData.title}
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="subTitle"
                  className="after:content-['*'] after:text-red-500  after:text-lg block text-sm font-medium leading-6 text-gray-900"
                >
                  2. Project Sub-Title
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="subTitle"
                    id="subTitle"
                    onChange={handleChange}
                    value={projectData.subTitle}
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-8">
                <label
                  htmlFor="videoLink"
                  className=" block text-sm font-medium leading-6 text-gray-900"
                >
                  <span> 3.YouTube Video Link (optional)</span>
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="videoLink"
                    id="videoLink"
                    onChange={handleChange}
                    value={projectData.videoLink}
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="category"
                  className=" after:content-['*'] after:text-red-500  after:text-lg block text-sm font-medium leading-6 text-gray-900"
                >
                  4. Category
                </label>
                <div className="mt-2">
                  <select
                    id="category"
                    name="category"
                    onChange={handleChange}
                    value={projectData.category}
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option value={""}>Select options</option>
                    <option value={"Software"}>Software</option>
                    <option value={"Hardware"}>Hardware</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="uploadYear"
                  className="after:content-['*'] after:text-red-500  after:text-lg block text-sm font-medium leading-6 text-gray-900"
                >
                  5. Upload Year
                </label>
                <div className="mt-2">
                  <select
                    id="uploadYear"
                    name="uploadYear"
                    onChange={handleChange}
                    value={projectData.uploadYear}
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option value={""}>Select options</option>
                    <option value={"2024"}>2024</option>
                    <option value={"2025"}>2025</option>
                    <option value={"2026"}>2026</option>
                    <option value={"2027"}>2027</option>
                    <option value={"2028"}>2028</option>
                    <option value={"2029"}>2029</option>
                    <option value={"2023"}>2030</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* --------------------------------------------------------------- */}

          <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8">
            <div className="col-span-full">
              <label
                htmlFor="description"
                className=" after:content-['*'] after:text-red-500  after:text-lg block text-sm font-medium leading-6 text-gray-900"
              >
                6. Project sort description
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  onChange={handleChange}
                  value={projectData.description}
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Write a few sentences about your project.
              </p>
            </div>

            {/* <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
               7. Cover photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                 =
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">
                    PNG, JPG up to 2MB
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* =--------------------------------------------------------------------- */}
        <h1 className="text-left text-base font-semibold mt-6">
          8. Project Main Image
        </h1>
        <div className="flex justify-center items-center flex-col gap-y-5 mt-6">
        {imagePreview != null &&
         <div className="border-[1px] border-dashed border-[#000] flex justify-center items-center overflow-hidden">
        <Image src={imagePreview} width={500} height={400} className="object-contain w-[280px] md:w-[320px]  md:h-[320px] h-[280px]" alt="projectImg"/>
        </div>
        }

  <label className=" block">
    <span className="sr-only">Choose profile photo</span>
    <input onChange={previewFile} type="file" accept="image/*" name="mainImg" className={`block w-full text-sm ${mainImg?'text-green-500':'text-slate-500'}
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
      `}/>
  </label>
  </div>

         {/* =-------------------- upload pdf (optional)----------------------------------- */}
         <h1 className="text-left text-base font-semibold mt-6">
          9. Project PDF File<span className="text-gray-400 pl-3">(optional)</span> 
        </h1>
        <div className="flex justify-center items-center flex-col gap-y-5 mt-6">
  <label className=" block">
    <span className="sr-only">Choose photo</span>
    <input onChange={(e)=>setMainPdf(e.target.files[0])} type="file" accept="application/pdf" name="mainPdf" className={`block w-full text-sm ${mainPdf?'text-green-500':'text-slate-500'}
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
      `}/>
  </label>
  </div>
 

        {/* -------------------------------------------- */}

        <div className="mt-6 flex items-end justify-center sm:justify-end gap-x-6 ">
          <button
            type="reset"
            className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
