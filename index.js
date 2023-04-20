const express=require('express')
const user=require('./routes/user')
const courses=require('./routes/courses')
const auth=require('./routes/auth')
const authUser=require('./middlewares/auth')
const app=express()

//app.use(authUser) if we add auth middlewere here then each route will be protected which we do not want.
//we will add auth middleware only where we want to protact the route.
app.use(express.json())
app.use('/api/users',user)
app.use('/api/auth',auth)
app.use('/api/courses',courses)


app.listen(3000,()=>{console.log("listning on 3000")})