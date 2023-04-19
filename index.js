const Joi=require('joi')
const express=require('express')
const logger=require('./logger')
const app=express()

/*A Middleware is just a function which takes three arguments request object, response object and next(reference to next middleware) , 
do something and depending on requirements it passes the control to next middleware in the pipeline.Here express.json() returns a
middleware which checks for a json object in request, if it find the json then it parses json and puts it into req.body and calls 
next middleware.*/

/*All the Handlers functions defined with the routes are also example of middleware, these are built in middlewares but we can also
define our own custom middlewares.*/

/*We use app.use() function to install builtin/custom middlewares to the request processing pipeline*/

app.use(express.json())
app.use(logger.logger)//using custom middleware defined in logger.js
app.use((req,res,next)=>{  //using custom middleware directally
    console.log('Authenticating....')
    next()
})
const courses=[
    {id:1,"name":'DSA',price:2000},
    {id:2,"name":'OS',price:5000},
    {id:3,"name":'DBMS',price:4000}
]

app.get('/api/courses',(req,res)=>{
    res.send(courses)
})

app.get('/api/courses/:id',(req,res)=>{
    const course=courses.find((course)=>{
        return course.id===parseInt(req.params.id)
    })
    if(!course){
        res.status(404).send('Cannot find the course with given ID')
    }
    res.send(course)
})
 
app.post('/api/courses',(req,res)=>{

    const schema=Joi.object({
        name:Joi.string().min(3).required(),
        price:Joi.number().greater(100).required()
    })
    
    const course={
        id:courses.length+1,
        name:req.body.name,
        price:req.body.price
    }
    let result=schema.validate(course)
    if (result.error){
        res.status(400).send(result.error)
        return
    }
    courses.push(course)
    res.send(course)
})
const port=process.env.PORT || 3000
app.listen(port,()=>console.log(`Listning on port ${port}`))