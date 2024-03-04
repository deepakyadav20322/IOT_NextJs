import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    subTitle:{
        type:String,
        required:true,
    },
    videoLink:{
        type:String,
        required:false
    },
    description:{
        type:Boolean,
        default:false
    },
    uploadYear:{
      type:String,
      required:true
    },
    category:{
      type:String,
      required:true,
    },
    description:{
        type:String,
        required:true
    },
    mainImg:{
        type:Object,
        required:false,

    },
    mainPdf:{
        type:Object,
        required:false,

    },

},
{
    timestamps:true
})

const Project  = mongoose.models.projects || mongoose.model("projects", projectSchema);

export default Project;