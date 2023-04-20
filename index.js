const courses=require('./routes/courses')
const express=require('express')
const app=express()

/*
  * index.js is our startup file and we should not pollute it by putting everything here.
  * we can seperate the logic into different module and export it.
  * To seperate routes we use express router export and then use it as a middleware.
  * just like router we can move our all middleware into different folder.
 */

 app.use(express.json())
 app.use('/api/courses',courses)

const port=process.env.PORT || 3000
app.listen(port,()=>console.log(`Listning on port ${port}`))
