import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    isVerify:{
      type:Boolean,
      default:false,
    },
    isVerifyToken:{
        type:String,
        default:"",
    },
    forgetPasswodToken:{
        type:String,
        default:"",
    },

},
{
    timestamps:true
})

const User  = mongoose.models.users || mongoose.model("users", userSchema);

export default User;