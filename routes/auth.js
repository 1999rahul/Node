const router =require('express').Router()
const passport = require('passport')
const passportSetup=require('../config/passport-setup')

router.get('/login',(req,res)=>{

}) 

router.get('/logout',(req,res)=>{

})

router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
    res.send('reached callback uri')
})

router.get('/google',passport.authenticate('google',{
    scope:['profile']
}))

module.exports=router

    