const config=require('config')
const morgan=require('morgan')
const Joi=require('joi')
const express=require('express')
const logger=require('./logger')
const app=express()

/*
 * In Every application we need to store the configuration settings, we can use different predefined modules for that 
 * In this example we will use config module
 * to store config info using config module we create a folder name config and we define different confile there according to the enviroment
 * we define deafult.json, development.json, production.json to store config files, the name of files should match.
 * sometimes we need to store some sensitive data, we store those data to env. variables and we map a json file to env. variable.
 * by storing the sensetive data in env variable if we push the config files to github then also our data will be scure.
 * the name of the file should must be custom-environment-variables.json, In this file we only define the mappings of settings to env variables
 * we can use config.get() to access the config settings.
 */
console.log('Application Name '+config.get('name'))
console.log('Mail Server', config.get('mail.host'))
console.log('Mail Password', config.get('mail.password'))//this checks for various sources to ckeck password.


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