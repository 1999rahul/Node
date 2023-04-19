const EventEmmitter=require('events')

class Logger extends EventEmmitter{
    log(messege){
        console.log(messege)
        this.emit('messegeLogged',{id:1,url:"http://"})
    }
}

module.exports=Logger