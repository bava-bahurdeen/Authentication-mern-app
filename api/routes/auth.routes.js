import express from "express"
import {signup,signin }from "../controlers/auth.control.js"
var router=express.Router()

router.post("/signup",signup)
router.post("/signin",signin)

export default router