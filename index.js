const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.get('/api/courses',(req,res)=>{
    res.send([1,2,3,4,5])
})

//An enviroment variable is the variable which is the part of env. in which a process runs.
//we can acess env variable using process object.
const port=process.env.PORT || 3000
app.listen(port,()=>console.log(`Listning on port ${port}`))