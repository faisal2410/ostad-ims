const express = require("express");
const router = express.Router();
const {signup}=require("../controllers/user")

router.post("/signup", signup);
router.get("/",(req,res)=>{
    res.status(200).json({
        success:"Welcome to Ostad Ims"
    })
})


module.exports=router;