const express=require('express')
const app=express()

require('./startup/logging')()
require('./startup/routes')(app)

app.listen(3000,()=>{console.log("Listning on 3000")})