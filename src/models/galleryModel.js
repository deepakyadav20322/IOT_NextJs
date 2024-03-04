import mongoose, { Schema } from "mongoose"

const gallerySchema = new Schema({
    galleryImg:{
        type:Object,
        required:true
    }
},{
    timestamps:true
});

const Gallery = mongoose.models.gallery || mongoose.model("gallery", gallerySchema);
export default Gallery;