const express=require('express')
const courses=require('../routes/courses')
const error = require('../middlewares/error')

module.exports=function(app){
    app.use(express.json())  
    app.use('/api/courses',courses) 
    app.use(error)
}