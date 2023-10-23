
import User from "../modules/user.module.js"
import { errorhandler } from "../utils/error.js"
import jwt from "jsonwebtoken"

import bcryptjs from "bcryptjs"
  export var signup= async (req,res)=>{
    
const {name,email,password}=req.body
var hashedpassword=bcryptjs.hashSync(password,10)
var newuser=new User({name,email,password:hashedpassword})
try{

    await newuser.save()
    res.status(201).json({message:"user created succesfully"})
}
catch(error){
   console.log(error)
}
}


export var signin=async (req,res,next)=>{

    const {email,password}=req.body
   try{
const validuser= await User.findOne({email})
if(!validuser)return next(errorhandler(401,"user not found"))
const validpassword= bcryptjs.compareSync(password,validuser.password)
if(!validpassword)return next(errorhandler(404,"not udentils"))
const token=jwt.sign({id:validuser._id},process.env.JWT_SECRET)
const {password:hashedpassword,...rest}=validuser._doc
const expireDate=new Date().now()+360000 //1 hour
rest
.cookie('access_token',token,{httpOnly:true,expires:expireDate})
.status(200).json(rest)   
}

   catch(error){
next(error)
   }

}