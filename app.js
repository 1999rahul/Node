/*
We use Http module to send Http request and make backend servers.
- Http module has a method called createServer which is an extends from EventEmmiter class, so we can use it to handle request events.
*/

const http = require('http')

/*
In real world we will not use http module directally, instead we will use express or something else
-instead of on method we can directally work with req and res objects.
 */
const server = http.createServer((req,res)=>{
    if (req.url==='/'){
        res.write("Hello world")
        res.end()
    }
    if (req.url ==='api/courses'){
        res.write(JSON.stringify([1,2,3,4,5]))
        res.end()
    }
});

 server.listen(3000)
 console.log('Listning on port 3000')



