const PromiseOne = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('PromiseOne');
        resolve()
    },2000)
})

PromiseOne.then(()=>{
    console.log("promise1");
}).catch((err)=>{
    console.error(err);
})