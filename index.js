const startupDebugger=require('debug')('app:startup')
const dbDebugger=require('debug')('app:db')
const express=require('express')
const app=express()

/*
 * Till now we were serving a simple json to the client.
 * We can also create a HTML and send it to client so that client can see the better representation of data.
 * we use temelate engine to create HTML, their are various template engines available like pug, ejs...
 * each template engine has different syntax 
 */

startupDebugger('Morgan enabled...')
dbDebugger('dbDebugger')
// if (app.get('env')==='development'){
//     app.use(morgan('tiny'))
//     startupDebugger('Morgan enabled...')
// }
 
const courses=[
    {id:1,"name":'DSA',price:2000},
    {id:2,"name":'OS',price:5000},
    {id:3,"name":'DBMS',price:4000}
]

const port=process.env.PORT || 3000
app.listen(port,()=>console.log(`Listning on port ${port}`))
