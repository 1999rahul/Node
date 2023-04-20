/*
 * we can use async/await in a same way as we use it in c#
 * promise is simmilar to Task in c#
 * when we call async function/Promise returning functions we call then in an async function.
 * to handle errors in async function we use try/catch, in promises we were using catch() method.
*/


getData()
async function getData(){
    try{
        const x=await fun1()
        const y=await fun2()
    }
    catch{
        //handle error
    }
}
function fun1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Async Operation 1")
            resolve({id:1})
        },2000)
    })

}
function fun2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Async Operation 2")
            resolve({id:2})
        },2000)
    })
}
