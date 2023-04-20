const express=require('express')
const auth=require('../middlewares/auth')
const router=express.Router()

courses=[
    {id:1,name:'DSA'},
    {id:2,name:'SQL'},
    {id:3,name:"DBMS"}
]
/**
 * we can pass auth middleware as 2nd parameter 
 */
router.post('/',auth,async (req,res)=>{
       /*
        * Some Post Operation
        */
       res.send({messege:'Data Saved'})
})

module.exports=router