const express=require('express')
const authRoutes=require('./routes/auth')
const app=express()

app.use('/auth',authRoutes)

 
app.get('/',(req,res)=>{
    res.send('Home')
})
 
app.listen(3000,()=>{
    console.log('Listning on port 3000')
})