import ProjectCard from "@/components/ProjectCard";
import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { toastProperties } from "@/utils/toastClass";
const project = async () => {
  const projectData = await getAllProjectsData();

  return (
    <div className=" lg:max-w-7xl m-auto mt-2 mb-6 px-2 rounded-md customRadial">
      <h1 className=" text-2xl sm:3xl md:text-4xl lg:text-5xl text-semibold border-b-4 border-black pl-3 pb-4 sm:mx-3 md:mx-6 pt-2">
        Projects
      </h1>
      <p className="text-xl pt-2 px-3 lg:px-9"> Learn by creating projects</p>
      <div className="flex flex-col justify-center items-center">
        {projectData?.map((item, ind) => (
          <ProjectCard item={item} key={ind} />
        ))}
      </div>
    </div>
  );
};

export default project;

async function getAllProjectsData() {
  try {
    const res = await axios.get(
      `${process.env.baseURL}/api/admin/upload-project`
    );
    var data_all = res.data.allData;
    return data_all;
  } catch (error) {
    console.log(error);
    toast.error("Server Error", toastProperties);
  }
}
