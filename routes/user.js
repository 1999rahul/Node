const express=require('express')
const router=express.Router()

users=[]
router.post('/',async (req,res)=>{
       users.push(req.body)
})