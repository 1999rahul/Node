require('express-async-errors')
const express=require('express')
const courses=require('./routes/courses')
const error = require('./middlewares/error')
const winston=require('winston')
const app=express()

process.on('uncaughtException',(ex)=>{
    console.log("We Got an uncaught exception")
   // winston.error(ex.message,ex)
})
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
    ],
  })

 // throw new Error() this line will not be caught by winston because it is out of scope of express.

  /**
   * Till now we were only handling exceptions in the context of express request response cycle.
   * If any exceptions occurs outside of express scope then it will stop our application.
   * To handle these uncaught exceptions we use the process object'
   * when a exception occurs in an node application outside the scope of express, it raises uncaughtException.
   * we can handle that uncaught exception using process.on method.
   */

throw new Error("error messege")

app.use(express.json())  
app.use('/api/courses',courses)

app.get('/api/welcome',(req,res)=>{
    //throw new Error()
    logger.info("request receives",req)
    res.send({
        messege:'Welcome to NodeJs'
    })
})


app.use(error) 

app.listen(3000,()=>{console.log("Listning on 3000")})