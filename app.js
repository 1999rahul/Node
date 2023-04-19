/*
We use Http module to send Http request and make backend servers.
- Http module has a method called createServer which is an extends from EventEmmiter class, so we can use it to handle request events.
*/

const http = require('http')
const server = http.createServer();

 /*
 - when a new request is received to server object, it emits an event named connection, so we can listen to it using on function.
 */

 server.on('connection',(socket)=>{
    console.log("connection")
 })

 server.listen(3000)
 console.log('Listning on port 3000')
