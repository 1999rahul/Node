/*
 * Sometimes we need to call multiple async operations all at once and without dependency
 * In this case we use Promise.all() which takes array of promise which has to be fulfilled.
*/

const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async Operation 1")
        resolve({id:1})
    },2000)
})

const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async Operation 2")
        resolve({id:2})
    },2000)
})

Promise.all([p1,p2]).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})