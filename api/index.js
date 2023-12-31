import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import userroutes from "./routes/user.routes.js"
import authroutes from "./routes/auth.routes.js"

dotenv.config();

const app=express();
app.use(express.json())
mongoose.connect(process.env.MONGO).then(
    ()=>{
        console.log("successsfully connected mongo db");
    }
).catch(
    (err)=>{
console.error(err);
    }
)
app.use("/api/user",userroutes)
app.use("/api/auth",authroutes)
app.use((err,req,res,next)=>{
    const statuscode=err.statuscode|| 500;
    const message=err.message|| "server error"
    return res.status(statuscode).json({
        success:false,
        message,
        statuscode
    })
})



app.listen(3000,()=>{
    console.log("Server start.......");
})