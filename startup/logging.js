require('express-async-errors')   
const winston=require('winston')

module.exports=function(){
    process.on('uncaughtException',(ex)=>{
        console.log("We Got an uncaught exception")
        process.exit(1)
       // winston.error(ex.message,ex)
    })
    
    process.on('unhandledRejection',(ex)=>{
        console.log("We Got an uncaught Rejection")
        process.exit(1)
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
}