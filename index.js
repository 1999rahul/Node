const startupDebugger=require('debug')('app:startup')
const dbDebugger=require('debug')('app:db')
const express=require('express')
const app=express()

/**
 * Using console.log statements for debugging is very old way and not a good way of debugging the appliation 
 * we have to remove the console.log statements explicitly if we do not want then
 * using debug module we can control all the debug statements using an enviroment variable.
 * we can create different debug statements for different tasks and control them using enviroment variables.
 * we can have a startup debugger or db debugger and we can control each of them seprately.
 * debug module returns a function and we can pass the scope of the debugger in that function
 * if the enviroment variable is set for a specific debugger then it will work otherwise not.
 * we can set env variable as by running set DEBUG=app:startup for app:startup scope, simmilarly we can set it for different scopes.
 * https://www.npmjs.com/package/debug
 * to set env variables for windows we can use set DEBUG=app:startup.
 * to set multiple env variable we can use set DEBUG=app:startup,app:db
 * we can also control color of the debugger
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
