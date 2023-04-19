const EventEmmitter =require('events')

const Logger=require('./logger')

const logger=new Logger()

logger.on("messegeLogged",(arg)=>{
    console.log('Listner called',arg)
})

logger.log('messege')