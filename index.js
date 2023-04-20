/*
   * Javascript is a single threaded language, so we must write non blocking code.
   * Async statements are just like a resturent with a simgle waiter.
   * In javascript we have three patterns to acheive the async behaviour in code, Callbacks, promises, Async/Await
*/
/*
 * using callbacks for handling async operations leads to nested and unreadable code so we will avoid using callbacks.
 * we will use promises or async/await for handling async operations.
 * we chain the async operations to get the clean structure.
*/
console.log("Before")
const p=getUser(10)
                  .then((user)=>{getRepos(user.userName)})
                  .then((repos)=>{console.log(repos)})
                  .catch(err=>{console.log(err)})

console.log("After")

function getUser(id){  
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("reading user from DB...")
            resolve({id:id,userName:'myName'})
        },2000)
    })
    
}

function getRepos(userName){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`Getting repos of ${userName}`)
            resolve(['repo 1','repo 2','repo 3'])
      },2000)
    })
}