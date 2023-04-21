const express=require('express')

const router=express.Router() 


router.get('/',async (req,res,next)=>{
    try{
        /**
         * Logic for getting data from DB 
         */
        
        const courses=[
            {id:1,name:"Physics"},
            {id:2,name:"maths"}
        ]
        res.send(courses)
    }
    catch(ex){
         next(ex)
    }

    
})


module.exports=router