const startupDebugger=require('debug')('app:startup')
const dbDebugger=require('debug')('app:db')
const express=require('express')
const app=express()


/*
 * We can connect to various DB using node.
 * we have to just install the driver and require it.
 * we will get all the api's to perform operations.
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
