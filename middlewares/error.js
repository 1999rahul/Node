const winston=require('winston')
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
    ],
  })
module.exports=(err,req,res,next)=>{
    logger.error("Someting Went Wrong",err)
    /**
     * we have different methods for logging messeges like info,error,warn,debug,silly,verbose.
     */
    res.status(500).send('Something Went wrong')
}