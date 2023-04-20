const express=require('express')
const auth=require('../middlewares/auth')
const router=express.Router()

users=[]

router.get('/me',auth,async (req,res)=>{
       /**
        * extract user id for req.user and erite logic for getting user data
        */
       res.send(req.user)
})
router.post('/',async (req,res)=>{
       users.push(req.body)
})

module.exports=router