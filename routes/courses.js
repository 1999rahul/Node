const express=require('express')
const router=express.Router()

const courses=[
    {id:1,"name":'DSA',price:2000},
    {id:2,"name":'OS',price:5000},
    {id:3,"name":'DBMS',price:4000}
]
router.get('/',(req,res)=>{
    res.send(courses)
})
router.get('/:id',(req,res)=>{
    res.send(req.params.id)
})

router.post('/',(req,res)=>{
    res.send("data posted")
})

module.exports=router

