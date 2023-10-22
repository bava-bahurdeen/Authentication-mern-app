
import User from "../modules/user.module.js"

import bcryptjs from "bcryptjs"
 var signup= async (req,res)=>{
    
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
export default signup