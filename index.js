const express=require('express')
const courses=require('./routes/courses')
const error = require('./middlewares/error')
const app=express()

/**
 * We can use try catch block to handle the exception but this is very repetative task.
 * In this Example we have used try catch block with custom error handler middlewere
 * In Express we can define a error handler middleware with four parameters and we keep it at the end of all middlewares.
 * If any Exception occurs then we call this middleware using next method in request handler.
 * By using this method our error messages will be at a cetral place and easy to modify.
 * But we still have to write a lot of try catch block
 */





app.use(express.json())
app.use('/api/courses',courses)


app.use(error)

app.listen(3000,()=>{console.log("Listning on 3000")})