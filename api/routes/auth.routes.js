import express from "express"
import signup from "../controlers/auth.control.js"
var router=express.Router()

router.post("/signup",signup)

export default router