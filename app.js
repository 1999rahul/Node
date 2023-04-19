const fs=require('fs')
//we should allaways use async functions
//remember javascript has only one thread so we should allaways use async functions.
fs.readdir('./',(err,files)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(files)
    }
})
