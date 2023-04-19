const express=require('express')
const app=express()

const courses=[
    {id:1,name:'DSA',price:2000},
    {id:2,name:'OS',price:5000},
    {id:3,name:'DBMS',price:4000}
]

app.get('/api/courses/:id',(req,res)=>{
    const course=courses.find((course)=>{
        return course.id===parseInt(req.params.id)
    })
    if(!course){
        res.status(404).send('Cannot find the course with given ID')
    }
    res.send(course)
})



const port=process.env.PORT || 3000
app.listen(port,()=>console.log(`Listning on port ${port}`))