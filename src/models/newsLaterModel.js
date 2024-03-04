import mongoose, { Schema } from "mongoose"

const newsLaterSchema = new Schema({
    newsEmail:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

const NewsLater = mongoose.models.newsLater || mongoose.model("newsLater", newsLaterSchema);
export default NewsLater;