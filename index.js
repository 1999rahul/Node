const morgan=require('morgan')
const Joi=require('joi')
const express=require('express')
const logger=require('./logger')
const app=express()

/**
 * Sometimes we need to use middlewares according to enviroments like production,staging or developement
 * So, we can check for enviroments then use middleware
 * we can use app.get('env') to get enviroment of current node application, if enviroment is not set then it returns the developement
 * we can also use process.env.NODE_ENV but first we have to set it.
 */ 
if (app.get('env')==='development'){
    app.use(morgan('tiny'))
    console.log('Morgan enabled...')
}

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