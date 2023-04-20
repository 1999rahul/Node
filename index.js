const express=require('express')
const user=require('./routes/user')
const auth=require('./routes/auth')
const app=express()


app.use(express.json())
app.use('/api/users',user)
app.use('/api/auth',auth)


app.listen(3000,()=>{console.log("listning on 3000")})