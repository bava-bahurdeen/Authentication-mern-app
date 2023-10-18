import text  from "../controlers/user.control.js";
import express from "express"
const router=express.Router();

router.get("/",text)
export default router