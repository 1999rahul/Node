/*
   * Javascript is a single threaded language, so we must write non blocking code.
   * Async statements are just like a resturent with a simgle waiter.
   * In javascript we have three patterns to acheive the async behaviour in code, Callbacks, promises, Async/Await
*/
/*
 * using callbacks for handling async operations leads to nested and unreadable code so we will avoid using callbacks.
 * we will use promises or async/await for handling async operations.
*/
console.log("Before")
getUser(10,(user)=>{
    console.log(user)
    getRepos(user.userName,(repos)=>{
        console.log(repos)                   /*Callback Hell, We can use named function to avoid the callback hell*/
    }) 
})
console.log("After")

function getUser(id,callback){
    
    setTimeout(()=>{
        console.log("reading user from DB...")
        callback({id:id,userName:'myName'})
    },2000)
}

function getRepos(userName,callback){
    setTimeout(()=>{
          console.log(`Getting repos of ${userName}`)
          callback(['repo 1','repo 2','repo 3'])
    },2000)
}