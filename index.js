require('express-async-errors')
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
/**
 * To get rid of writing try catch every time we can define a generic function and pass request handler to it.
 * this generic function will return the async handler and will wrap try catch logic for whole application.
 */

function asyncErrorHandlerMiddleware(handler){
    return async (req,res,next)=>{
        try{
            await handler(req,res)
        }
        catch(ex){
            next(ex)
        }
    }
}
/**
 * Now we can wrap our request handler inside asyncErrorHandlerMiddleware function and handle errors globally.
 * asyncErrorHandlerMiddleware is not an real async function as we are not performing any async task.
 * We are just returning a function from asyncErrorHandlerMiddleware.
 * Now we can just move the asyncErrorHandlerMiddleware to a new module and start using it.
 */

/**
 * To handle exceptions we have to wrap each of our handlers to asyncErrorHandlerMiddleware
 * This makes our code look ugly
 * Using express-async-errors module we don't have to define asyncErrorHandlerMiddleware, so we can remove it but we still have to define the error handler middleware which we use at last.
 * express-async-errors module encapulates the logic of asyncErrorHandlerMiddleware and we also do not need to call any function in our routes.
 * if this module does not works then we should use the previous approch.
 */
app.use(express.json())
app.use('/api/courses',courses)

app.get('/api/welcome',(req,res)=>{
    //throw new Error()
    res.send({
        messege:'Welcome to NodeJs'
    })
})


app.use(error) 

app.listen(3000,()=>{console.log("Listning on 3000")})