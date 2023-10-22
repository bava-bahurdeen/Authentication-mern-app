import mongoose from "mongoose";

const userschema=new mongoose.Schema({
    name: {
        type:String,
        required:false,
        
    },
   email: {
        type:String,
        required:true,
       
    },
   password: {
type:String,
required:true,
unique:true,
    }
},{timestamps:true})
const User=mongoose.model("User",userschema);
export default User