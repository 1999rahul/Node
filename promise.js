/**
 * A Promise is an object which holds the result of an async operation
 * A promise can have three states Pending,resolved and rejected.
 * The Promise constructor takes a callback which has two args, resolve and reject which are callbacks.
 * we can access the data returned by async operation using then and catch functions of promise.
 * we define the async operations inside the Function which we pass to promise
 */

const p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
         resolve({id:1})
         reject({messege:"data not found"})
    },2000)
})


p.then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})