const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.get('/api/courses',(req,res)=>{
    res.send([1,2,3,4,5])
})


//We use route parameters for required values, route parameters are stored in an object called parms and can be accessed using req,parms
//we use query string parameters for optional values, query string can be accessed using req.query.req.query is an object.
//query parameter can be sent as http://localhost:3000/api/courses/10/20?name=Design and Analysis of Algorithms&price=6000
app.get('/api/posts/:year/:month',(req,res)=>{
    res.send({query:req.query,params:req.params})
})

//An enviroment variable is the variable which is the part of env. in which a process runs.
//we can acess env variable using process object.
const port=process.env.PORT || 3000
app.listen(port,()=>console.log(`Listning on port ${port}`))