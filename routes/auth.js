const jwt=require('jsonwebtoken')
const express=require('express')
const router=express.Router()

router.post('/',async (req,res)=>{
       /**
        * Perform input validation and Authentication
        */
       const token=jwt.sign({id:10},'jwtKey')
       res.send(token)
})

module.exports=router